import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT_ROOT = path.join(ROOT_DIR, "async-api-diffs");
const EXPORT_FILE = path.join(ROOT_DIR, "src", "async-api-diffs.ts");
const WHOLE_APIHUB_OPERATION_TEMPLATE_FILE = path.join(
  ROOT_DIR,
  "fixtures",
  "whole-apihub-operation-template.yaml",
);

const SECTION_OPERATION = "operation";
const SECTION_CHANNEL = "channel";
const SECTION_CHANNEL_PARAMETERS = "channel-parameters";
const SECTION_MESSAGE = "message";
const SECTION_SERVER = "channel-server";
const SECTION_WHOLE_APIHUB_OPERATION = "whole-apihub-operation";

const CASES = [];

const sanitize = (text) => text
  .replaceAll("\\", "-")
  .replaceAll("/", "-")
  .replaceAll(" ", "-")
  .replaceAll(":", "-")
  .replaceAll(".", "-")
  .replaceAll("[", "")
  .replaceAll("]", "")
  .replaceAll("$", "ref")
  .replaceAll('"', "")
  .replaceAll("'", "");

const parameterObject = (description) => ({
  description,
  location: "$message.payload#/id",
  schema: { type: "string", minLength: 1 },
});

const kafkaInternalJsoBindingBefore = () => ({
  bindingVersion: "1.0.0",
  arbitraryJso: {
    unchanged: "keep",
    removed: "bye",
    changed: 111,
  },
});

const kafkaInternalJsoBindingAfter = () => ({
  bindingVersion: "1.0.0",
  arbitraryJso: {
    unchanged: "keep",
    changed: "test string",
    added: "new",
  },
});

const defaultKafkaBinding = () => ({
  bindingVersion: "1.0.0",
});

const defaultAmqpBinding = () => ({
  bindingVersion: "0.3.0",
});

const serverKafkaBinding = () => ({
  bindingVersion: "1.0.0",
  schemaRegistryUrl: "https://schema-registry.example.com",
  schemaRegistryVendor: "confluent",
});

const serverAmqpBinding = () => ({
  bindingVersion: "0.3.0",
  connectionName: "sample-server-connection",
});

const operationKafkaBinding = () => ({
  bindingVersion: "1.0.0",
  groupId: {
    type: "string",
    enum: ["consumer-group-1"],
  },
});

const operationAmqpBinding = () => ({
  bindingVersion: "0.3.0",
  expiration: 100000,
  userId: "guest",
  cc: ["user.logs"],
  priority: 10,
  deliveryMode: 2,
  mandatory: false,
});

const channelKafkaBinding = () => ({
  bindingVersion: "1.0.0",
  topic: "events-topic",
  partitions: 5,
});

const channelAmqpBinding = () => ({
  bindingVersion: "0.3.0",
  is: "routingKey",
  exchange: {
    name: "events-exchange",
    type: "topic",
    durable: true,
    autoDelete: false,
  },
});

const messageKafkaBinding = () => ({
  bindingVersion: "1.0.0",
  key: {
    type: "string",
  },
  schemaIdLocation: "header",
});

const messageAmqpBinding = () => ({
  bindingVersion: "0.3.0",
  contentEncoding: "gzip",
  messageType: "user.signup",
});

const ADD_REMOVE_BINDING_DIR_SUFFIXES = [
  "-bindings-add-one-more-binding",
  "-bindings-remove-one-of-several-bindings",
  "-bindings-add-bindings",
  "-bindings-remove-bindings",
];

const ADD_REMOVE_BINDING_FACTORIES = {
  operation: {
    kafka: operationKafkaBinding,
    amqp: operationAmqpBinding,
  },
  channel: {
    kafka: channelKafkaBinding,
    amqp: channelAmqpBinding,
  },
  message: {
    kafka: messageKafkaBinding,
    amqp: messageAmqpBinding,
  },
  server: {
    kafka: serverKafkaBinding,
    amqp: serverAmqpBinding,
  },
};

const isAddRemoveBindingCase = (item) => {
  const dirName = `${item.caseId}-${sanitize(item.description)}`;
  return ADD_REMOVE_BINDING_DIR_SUFFIXES.some((suffix) => dirName.endsWith(suffix));
};

const baseDocument = () => ({
  asyncapi: "3.0.0",
  info: {
    title: "Sample AsyncAPI",
    version: "1.0.0",
  },
  channels: {
    testChannel: {
      address: "events.default",
      messages: {
        TestMessage: {
          $ref: "#/components/messages/TestMessage",
        },
      },
    },
  },
  operations: {
    sendOperation: {
      action: "send",
      channel: { $ref: "#/channels/testChannel" },
      messages: [{ $ref: "#/components/messages/TestMessage" }],
    },
  },
  components: {
    messages: {
      TestMessage: {
        name: "TestMessage",
        payload: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
          required: ["id"],
        },
      },
    },
  },
});

const operation = (doc) => doc.operations.sendOperation;
const channel = (doc) => doc.channels.testChannel;
const message = (doc) => doc.components.messages.TestMessage;
const server0 = (doc) => doc.servers.server0;

const wholeApihubOperationTemplate = yaml.load(
  fs.readFileSync(WHOLE_APIHUB_OPERATION_TEMPLATE_FILE, "utf8"),
);

const wholeApihubOperationDocument = () => structuredClone(wholeApihubOperationTemplate);

const wholeOperation = (doc) => doc.operations.ConsumeUserSignups;

const removeWholeApihubOperationMessages = (doc) => {
  delete wholeOperation(doc).messages;
};

const addWholeApihubOperationCase = (caseId, description, applyBefore, applyAfter) => {
  const beforeDoc = wholeApihubOperationDocument();
  const afterDoc = wholeApihubOperationDocument();
  applyBefore(beforeDoc);
  applyAfter(afterDoc);
  CASES.push({
    section: SECTION_WHOLE_APIHUB_OPERATION,
    caseId,
    description,
    beforeYaml: yaml.dump(beforeDoc, { noRefs: true, lineWidth: -1 }),
    afterYaml: yaml.dump(afterDoc, { noRefs: true, lineWidth: -1 }),
  });
};

const setServers = (doc, servers) => {
  doc.servers = servers;
};

const ensureServer0 = (doc) => {
  if (!doc.servers) {
    doc.servers = {};
  }
  if (!doc.servers.server0) {
    doc.servers.server0 = {
      host: "broker-0.example.com:9092",
      protocol: "kafka",
    };
  }
  channel(doc).servers = [{ $ref: "#/servers/server0" }];
};

const addCase = (section, caseId, description, applyBefore, applyAfter) => {
  const beforeDoc = baseDocument();
  const afterDoc = baseDocument();
  applyBefore(beforeDoc);
  applyAfter(afterDoc);
  CASES.push({
    section,
    caseId,
    description,
    beforeYaml: yaml.dump(beforeDoc, { noRefs: true, lineWidth: -1 }),
    afterYaml: yaml.dump(afterDoc, { noRefs: true, lineWidth: -1 }),
  });
};

const addTitleDescriptionSummaryCases = (section, objectName, getter) => {
  addCase(section, "1.1", `${objectName}.title changed`, (doc) => {
    getter(doc).title = `${objectName} title`;
  }, (doc) => {
    getter(doc).title = `CHANGED ${objectName} title`;
  });

  addCase(section, "1.2", `${objectName}.title removed`, (doc) => {
    getter(doc).title = `${objectName} title`;
  }, () => {});

  addCase(section, "1.3", `${objectName}.title added`, () => {}, (doc) => {
    getter(doc).title = `${objectName} title`;
  });

  addCase(section, "2.1", `${objectName}.description changed`, (doc) => {
    getter(doc).description = `${objectName} description`;
  }, (doc) => {
    getter(doc).description = `CHANGED ${objectName} description`;
  });

  addCase(section, "2.2", `${objectName}.description removed`, (doc) => {
    getter(doc).description = `${objectName} description`;
  }, () => {});

  addCase(section, "2.3", `${objectName}.description added`, () => {}, (doc) => {
    getter(doc).description = `${objectName} description`;
  });

  addCase(section, "2.4", `${objectName}.summary changed`, (doc) => {
    getter(doc).summary = `${objectName} summary`;
  }, (doc) => {
    getter(doc).summary = `CHANGED ${objectName} summary`;
  });

  addCase(section, "2.5", `${objectName}.summary removed`, (doc) => {
    getter(doc).summary = `${objectName} summary`;
  }, () => {});

  addCase(section, "2.6", `${objectName}.description moved to summary`, (doc) => {
    getter(doc).description = `${objectName} moved value`;
  }, (doc) => {
    getter(doc).summary = `${objectName} moved value`;
  });

  addCase(section, "2.7", `${objectName}.summary moved to description`, (doc) => {
    getter(doc).summary = `${objectName} moved value`;
  }, (doc) => {
    getter(doc).description = `${objectName} moved value`;
  });
};

const addBindingsAndVersionCases = (
  section,
  objectName,
  getter,
  numbering = { addRemovePrefix: "3", versionPrefix: "4" },
  addRemoveBindingFactories = {
    kafka: defaultKafkaBinding,
    amqp: defaultAmqpBinding,
  },
) => {
  const kafkaBinding = addRemoveBindingFactories.kafka;
  const amqpBinding = addRemoveBindingFactories.amqp;

  addCase(section, `${numbering.addRemovePrefix}.1`, `${objectName}.bindings add one more binding`, (doc) => {
    getter(doc).bindings = { kafka: kafkaBinding() };
  }, (doc) => {
    getter(doc).bindings = {
      kafka: kafkaBinding(),
      amqp: amqpBinding(),
    };
  });

  addCase(section, `${numbering.addRemovePrefix}.2`, `${objectName}.bindings remove one of several bindings`, (doc) => {
    getter(doc).bindings = {
      kafka: kafkaBinding(),
      amqp: amqpBinding(),
    };
  }, (doc) => {
    getter(doc).bindings = {
      amqp: amqpBinding(),
    };
  });

  addCase(section, `${numbering.addRemovePrefix}.3`, `${objectName}.bindings add bindings`, () => {}, (doc) => {
    getter(doc).bindings = { kafka: kafkaBinding() };
  });

  addCase(section, `${numbering.addRemovePrefix}.4`, `${objectName}.bindings remove bindings`, (doc) => {
    getter(doc).bindings = { kafka: kafkaBinding() };
  }, () => {});

  addCase(section, `${numbering.versionPrefix}.1`, `${objectName}.bindings.kafka.bindingVersion changed`, (doc) => {
    getter(doc).bindings = { kafka: defaultKafkaBinding() };
  }, (doc) => {
    getter(doc).bindings = { kafka: { bindingVersion: "2.0.0" } };
  });

  addCase(section, `${numbering.versionPrefix}.2`, `${objectName}.bindings.kafka.bindingVersion removed`, (doc) => {
    getter(doc).bindings = { kafka: defaultKafkaBinding() };
  }, (doc) => {
    getter(doc).bindings = { kafka: {} };
  });

  addCase(section, `${numbering.versionPrefix}.3`, `${objectName}.bindings.kafka.bindingVersion added`, (doc) => {
    getter(doc).bindings = { kafka: {} };
  }, (doc) => {
    getter(doc).bindings = { kafka: defaultKafkaBinding() };
  });
};

const channelParametersAddressFive = () =>
  "events.{firstParam}.{secondParam}.{thirdParam}.{fourthParam}.{fifthParam}";

const channelParametersFieldsAddedBefore = () => ({
  firstParam: { description: "first parameter" },
  secondParam: { location: "$message.payload#/id" },
  thirdParam: { location: "$message.payload#/id" },
  fourthParam: { location: "$message.payload#/id" },
  fifthParam: { location: "$message.payload#/id" },
});

const channelParametersFieldsAddedAfter = () => ({
  firstParam: {
    description: "first parameter",
    location: "$message.header#/id",
  },
  secondParam: {
    description: "second parameter",
    location: "$message.payload#/id",
  },
  thirdParam: {
    location: "$message.payload#/id",
    enum: ["alpha", "beta"],
  },
  fourthParam: {
    location: "$message.payload#/id",
    default: "default-value",
  },
  fifthParam: {
    location: "$message.payload#/id",
    examples: ["example-1", "example-2"],
  },
});

const channelParametersFieldsChangedBefore = () => ({
  firstParam: {
    description: "first parameter",
    location: "$message.payload#/id",
  },
  secondParam: {
    description: "second parameter",
  },
  thirdParam: {
    enum: ["alpha", "beta"],
  },
  fourthParam: {
    default: "default-value",
  },
  fifthParam: {
    examples: ["example-1", "example-2"],
  },
});

const channelParametersFieldsChangedAfter = () => ({
  firstParam: {
    description: "first parameter",
    location: "$message.header#/id",
  },
  secondParam: {
    description: "updated second parameter description",
  },
  thirdParam: {
    enum: ["alpha", "gamma"],
  },
  fourthParam: {
    default: "changed-default-value",
  },
  fifthParam: {
    examples: ["example-1", "changed-example-2"],
  },
});

const addChannelParametersCases = () => {
  addCase(SECTION_CHANNEL_PARAMETERS, "1", "channel.parameters two added", (doc) => {
    channel(doc).address = "events.static";
  }, (doc) => {
    channel(doc).address = "events.{param1}.{param2}";
    channel(doc).parameters = {
      param1: parameterObject("first parameter"),
      param2: parameterObject("second parameter"),
    };
  });

  addCase(SECTION_CHANNEL_PARAMETERS, "2", "channel.parameters two removed", (doc) => {
    channel(doc).address = "events.{param1}.{param2}";
    channel(doc).parameters = {
      param1: parameterObject("first parameter"),
      param2: parameterObject("second parameter"),
    };
  }, (doc) => {
    channel(doc).address = "events.static";
  });

  addCase(SECTION_CHANNEL_PARAMETERS, "3", "channel.parameters second added", (doc) => {
    channel(doc).address = "events.{param1}";
    channel(doc).parameters = {
      param1: { description: "first parameter" },
    };
  }, (doc) => {
    channel(doc).address = "events.{param1}.{param2}";
    channel(doc).parameters = {
      param1: { description: "first parameter" },
      param2: { description: "second parameter" },
    };
  });

  addCase(SECTION_CHANNEL_PARAMETERS, "4", "channel.parameters second removed", (doc) => {
    channel(doc).address = "events.{param1}.{param2}";
    channel(doc).parameters = {
      param1: { description: "first parameter" },
      param2: { description: "second parameter" },
    };
  }, (doc) => {
    channel(doc).address = "events.{param1}";
    channel(doc).parameters = {
      param1: { description: "first parameter" },
    };
  });

  addCase(SECTION_CHANNEL_PARAMETERS, "5", "channel.parameters key renamed", (doc) => {
    channel(doc).address = "events.{param1}.{param2}";
    channel(doc).parameters = {
      param1: { description: "first parameter" },
      param2: { description: "second parameter" },
    };
  }, (doc) => {
    channel(doc).address = "events.{parameter_1}.{param2}";
    channel(doc).parameters = {
      parameter_1: { description: "first parameter" },
      param2: { description: "second parameter" },
    };
  });

  addCase(SECTION_CHANNEL_PARAMETERS, "6", "channel.parameters fields added", (doc) => {
    channel(doc).address = channelParametersAddressFive();
    channel(doc).parameters = channelParametersFieldsAddedBefore();
  }, (doc) => {
    channel(doc).address = channelParametersAddressFive();
    channel(doc).parameters = channelParametersFieldsAddedAfter();
  });

  addCase(SECTION_CHANNEL_PARAMETERS, "7", "channel.parameters fields removed", (doc) => {
    channel(doc).address = channelParametersAddressFive();
    channel(doc).parameters = channelParametersFieldsAddedAfter();
  }, (doc) => {
    channel(doc).address = channelParametersAddressFive();
    channel(doc).parameters = channelParametersFieldsAddedBefore();
  });

  addCase(SECTION_CHANNEL_PARAMETERS, "8", "channel.parameters fields changed", (doc) => {
    channel(doc).address = channelParametersAddressFive();
    channel(doc).parameters = channelParametersFieldsChangedBefore();
  }, (doc) => {
    channel(doc).address = channelParametersAddressFive();
    channel(doc).parameters = channelParametersFieldsChangedAfter();
  });
};

const addKafkaInternalJsoChangesCase = (section, objectName, getter, caseId = "5.1") => {
  addCase(section, caseId, `${objectName}.bindings.kafka internal-jso-changes`, (doc) => {
    getter(doc).bindings = { kafka: kafkaInternalJsoBindingBefore() };
  }, (doc) => {
    getter(doc).bindings = { kafka: kafkaInternalJsoBindingAfter() };
  });
};

const addExtensionsCases = (section, objectName, getter) => {
  addCase(section, "6.1", `${objectName}.x-second added`, (doc) => {
    getter(doc)["x-first"] = "first";
  }, (doc) => {
    getter(doc)["x-first"] = "first";
    getter(doc)["x-second"] = "second";
  });

  addCase(section, "6.2", `${objectName}.x-second removed`, (doc) => {
    getter(doc)["x-first"] = "first";
    getter(doc)["x-second"] = "second";
  }, (doc) => {
    getter(doc)["x-first"] = "first";
  });

  addCase(section, "6.3", `${objectName}.x-second changed`, (doc) => {
    getter(doc)["x-first"] = "first";
    getter(doc)["x-second"] = "before";
  }, (doc) => {
    getter(doc)["x-first"] = "first";
    getter(doc)["x-second"] = "after";
  });

  addCase(section, "6.4", `${objectName}.x-first and x-second added`, () => {}, (doc) => {
    getter(doc)["x-first"] = "first";
    getter(doc)["x-second"] = "second";
  });

  addCase(section, "6.5", `${objectName}.x-first and x-second removed`, (doc) => {
    getter(doc)["x-first"] = "first";
    getter(doc)["x-second"] = "second";
  }, () => {});
};

const addMessageSchemaCases = () => {
  addCase(SECTION_MESSAGE, "7.1", "message.headers object schema added", () => {}, (doc) => {
    message(doc).headers = {
      type: "object",
      description: "headers object",
      properties: { traceId: { type: "string" } },
    };
  });

  addCase(SECTION_MESSAGE, "7.2", "message.headers object schema removed", (doc) => {
    message(doc).headers = {
      type: "object",
      description: "headers object",
      properties: { traceId: { type: "string" } },
    };
  }, () => {});

  addCase(SECTION_MESSAGE, "7.3", "message.headers.description changed", (doc) => {
    message(doc).headers = {
      type: "object",
      description: "before description",
      properties: { traceId: { type: "string" } },
    };
  }, (doc) => {
    message(doc).headers = {
      type: "object",
      description: "after description",
      properties: { traceId: { type: "string" } },
    };
  });

  addCase(SECTION_MESSAGE, "7.4", "message.payload object schema added", (doc) => {
    message(doc).payload = { type: "string" };
  }, (doc) => {
    message(doc).payload = {
      type: "object",
      description: "payload object",
      properties: { id: { type: "string" } },
    };
  });

  addCase(SECTION_MESSAGE, "7.5", "message.payload object schema removed", (doc) => {
    message(doc).payload = {
      type: "object",
      description: "payload object",
      properties: { id: { type: "string" } },
    };
  }, (doc) => {
    message(doc).payload = { type: "string" };
  });

  addCase(SECTION_MESSAGE, "7.6", "message.payload.description changed", (doc) => {
    message(doc).payload = {
      type: "object",
      description: "before description",
      properties: { id: { type: "string" } },
    };
  }, (doc) => {
    message(doc).payload = {
      type: "object",
      description: "after description",
      properties: { id: { type: "string" } },
    };
  });
};

const addWholeApihubOperationCases = () => {
  addWholeApihubOperationCase("1.1", "message removed from operation channel and document", () => {}, (doc) => {
    removeWholeApihubOperationMessages(doc);
  });

  addWholeApihubOperationCase("1.2", "message added to operation channel and document", (doc) => {
    removeWholeApihubOperationMessages(doc);
  }, () => {});
};

const addServerCases = () => {
  addCase(SECTION_SERVER, "1.1", "channel.servers host/protocol changed", (doc) => {
    setServers(doc, {
      server0: { host: "broker-0.example.com:9092", protocol: "kafka" },
      server1: { host: "broker-1.example.com:5672", protocol: "amqp" },
      server2: { host: "broker-2.example.com:9092", protocol: "kafka" },
    });
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }, { $ref: "#/servers/server2" }];
  }, (doc) => {
    setServers(doc, {
      server0: { host: "changed-0.example.com:9092", protocol: "kafka" },
      server1: { host: "broker-1.example.com:5672", protocol: "mqtt" },
      server2: { host: "changed-2.example.com:443", protocol: "https" },
    });
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }, { $ref: "#/servers/server2" }];
  });

  addCase(SECTION_SERVER, "1.2", "channel.servers description set", (doc) => {
    setServers(doc, {
      server0: { host: "broker-0.example.com:9092", protocol: "kafka" },
      server1: { host: "broker-1.example.com:9092", protocol: "kafka", description: "remove me" },
      server2: { host: "broker-2.example.com:9092", protocol: "kafka", description: "before description" },
      server3: { host: "broker-3.example.com:9092", protocol: "kafka", description: "to summary" },
    });
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }, { $ref: "#/servers/server2" }, { $ref: "#/servers/server3" }];
  }, (doc) => {
    setServers(doc, {
      server0: { host: "broker-0.example.com:9092", protocol: "kafka", description: "added description" },
      server1: { host: "broker-1.example.com:9092", protocol: "kafka" },
      server2: { host: "broker-2.example.com:9092", protocol: "kafka", description: "after description" },
      server3: { host: "broker-3.example.com:9092", protocol: "kafka", summary: "to summary" },
    });
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }, { $ref: "#/servers/server2" }, { $ref: "#/servers/server3" }];
  });

  addCase(SECTION_SERVER, "1.3", "channel.servers summary set", (doc) => {
    setServers(doc, {
      server0: { host: "broker-0.example.com:9092", protocol: "kafka" },
      server1: { host: "broker-1.example.com:9092", protocol: "kafka", summary: "remove me" },
      server2: { host: "broker-2.example.com:9092", protocol: "kafka", summary: "before summary" },
      server3: { host: "broker-3.example.com:9092", protocol: "kafka", summary: "to description" },
    });
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }, { $ref: "#/servers/server2" }, { $ref: "#/servers/server3" }];
  }, (doc) => {
    setServers(doc, {
      server0: { host: "broker-0.example.com:9092", protocol: "kafka", summary: "added summary" },
      server1: { host: "broker-1.example.com:9092", protocol: "kafka" },
      server2: { host: "broker-2.example.com:9092", protocol: "kafka", summary: "after summary" },
      server3: { host: "broker-3.example.com:9092", protocol: "kafka", description: "to description" },
    });
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }, { $ref: "#/servers/server2" }, { $ref: "#/servers/server3" }];
  });

  const serverGetter = (doc) => {
    ensureServer0(doc);
    return server0(doc);
  };

  addBindingsAndVersionCases(SECTION_SERVER, "channel.servers[0]", serverGetter, {
    addRemovePrefix: "2",
    versionPrefix: "3",
  }, ADD_REMOVE_BINDING_FACTORIES.server);
  addKafkaInternalJsoChangesCase(SECTION_SERVER, "channel-server", serverGetter, "4.1");

  const channelServerPair = () => ({
    server0: {
      host: "broker-0.example.com:9092",
      protocol: "kafka",
      description: "Main Kafka broker",
    },
    server1: {
      host: "broker-1.example.com:5672",
      protocol: "amqp",
      description: "Secondary AMQP broker",
    },
  });

  addCase(SECTION_SERVER, "2.3", "channel.servers all added", () => {}, (doc) => {
    setServers(doc, {
      server0: {
        host: "broker-0.example.com:9092",
        protocol: "kafka",
        bindings: { kafka: { bindingVersion: "1.0.0" } },
      },
    });
    channel(doc).servers = [{ $ref: "#/servers/server0" }];
  });

  addCase(SECTION_SERVER, "2.4", "channel.servers all removed", (doc) => {
    setServers(doc, {
      server0: {
        host: "broker-0.example.com:9092",
        protocol: "kafka",
        bindings: { kafka: { bindingVersion: "1.0.0" } },
      },
    });
    channel(doc).servers = [{ $ref: "#/servers/server0" }];
  }, () => {});

  addCase(SECTION_SERVER, "5.1", "channel.servers one item removed", (doc) => {
    setServers(doc, channelServerPair());
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }];
  }, (doc) => {
    setServers(doc, channelServerPair());
    channel(doc).servers = [{ $ref: "#/servers/server0" }];
  });

  addCase(SECTION_SERVER, "5.2", "channel.servers one item added", (doc) => {
    setServers(doc, channelServerPair());
    channel(doc).servers = [{ $ref: "#/servers/server0" }];
  }, (doc) => {
    setServers(doc, channelServerPair());
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }];
  });
};

const generateAllCases = () => {
  addTitleDescriptionSummaryCases(SECTION_OPERATION, "operation", operation);
  addBindingsAndVersionCases(SECTION_OPERATION, "operation", operation, undefined, ADD_REMOVE_BINDING_FACTORIES.operation);
  addKafkaInternalJsoChangesCase(SECTION_OPERATION, "operation", operation);
  addExtensionsCases(SECTION_OPERATION, "operation", operation);

  addTitleDescriptionSummaryCases(SECTION_CHANNEL, "channel", channel);
  addBindingsAndVersionCases(SECTION_CHANNEL, "channel", channel, undefined, ADD_REMOVE_BINDING_FACTORIES.channel);
  addKafkaInternalJsoChangesCase(SECTION_CHANNEL, "channel", channel);
  addExtensionsCases(SECTION_CHANNEL, "channel", channel);

  addTitleDescriptionSummaryCases(SECTION_MESSAGE, "message", message);
  addBindingsAndVersionCases(SECTION_MESSAGE, "message", message, undefined, ADD_REMOVE_BINDING_FACTORIES.message);
  addKafkaInternalJsoChangesCase(SECTION_MESSAGE, "message", message);
  addExtensionsCases(SECTION_MESSAGE, "message", message);
  addMessageSchemaCases();

  addServerCases();
  addChannelParametersCases();
  addWholeApihubOperationCases();
};

const writeYamlPairs = ({ onlyAddRemoveBindingCases = false } = {}) => {
  if (!onlyAddRemoveBindingCases) {
    fs.rmSync(OUTPUT_ROOT, { recursive: true, force: true });
    fs.mkdirSync(OUTPUT_ROOT, { recursive: true });
  }

  const itemsToWrite = onlyAddRemoveBindingCases
    ? CASES.filter(isAddRemoveBindingCase)
    : CASES;

  for (const item of itemsToWrite) {
    const caseDir = path.join(OUTPUT_ROOT, item.section, `${item.caseId}-${sanitize(item.description)}`);
    fs.mkdirSync(caseDir, { recursive: true });
    fs.writeFileSync(path.join(caseDir, "before.yaml"), item.beforeYaml, "utf8");
    fs.writeFileSync(path.join(caseDir, "after.yaml"), item.afterYaml, "utf8");
  }

  return itemsToWrite.length;
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const patchExports = (items) => {
  let content = fs.readFileSync(EXPORT_FILE, "utf8");

  for (const item of items) {
    const pattern = new RegExp(
      `(\\{[\\s\\S]*?section: ${JSON.stringify(item.section)},[\\s\\S]*?caseId: ${JSON.stringify(item.caseId)},[\\s\\S]*?description: "${escapeRegExp(item.description)}",[\\s\\S]*?beforeYaml: ")([\\s\\S]*?)(",\\s*\\n\\s*afterYaml: ")([\\s\\S]*?)(",\\s*\\n\\s*\\},)`,
      "m",
    );

    if (!pattern.test(content)) {
      throw new Error(`Export entry not found for ${item.section} ${item.caseId} ${item.description}`);
    }

    content = content.replace(
      pattern,
      (_, prefix, _oldBefore, middle, _oldAfter, suffix) =>
        `${prefix}${JSON.stringify(item.beforeYaml).slice(1, -1)}${middle}${JSON.stringify(item.afterYaml).slice(1, -1)}${suffix}`,
    );
  }

  fs.writeFileSync(EXPORT_FILE, content, "utf8");
};

const writeExports = () => {
  const lines = [];
  lines.push("export type AsyncApiDiffCase = {");
  lines.push("  section: string;");
  lines.push("  caseId: string;");
  lines.push("  description: string;");
  lines.push("  beforeYaml: string;");
  lines.push("  afterYaml: string;");
  lines.push("};");
  lines.push("");
  lines.push("export const asyncApiDiffCases: AsyncApiDiffCase[] = [");
  for (const item of CASES) {
    lines.push("  {");
    lines.push(`    section: ${JSON.stringify(item.section)},`);
    lines.push(`    caseId: ${JSON.stringify(item.caseId)},`);
    lines.push(`    description: ${JSON.stringify(item.description)},`);
    lines.push(`    beforeYaml: ${JSON.stringify(item.beforeYaml)},`);
    lines.push(`    afterYaml: ${JSON.stringify(item.afterYaml)},`);
    lines.push("  },");
  }
  lines.push("];");
  lines.push("");
  lines.push("export const getAsyncApiDiffCase = (section: string, caseId: string): AsyncApiDiffCase | undefined => {");
  lines.push("  return asyncApiDiffCases.find((item) => item.section === section && item.caseId === caseId);");
  lines.push("};");
  lines.push("");
  lines.push("export const getAsyncApiDiffCasesBySection = (section: string): AsyncApiDiffCase[] => {");
  lines.push("  return asyncApiDiffCases.filter((item) => item.section === section);");
  lines.push("};");
  lines.push("");
  fs.writeFileSync(EXPORT_FILE, lines.join("\n"), "utf8");
};

const ONLY_ADD_REMOVE_BINDING_CASES = process.argv.includes("--only-add-remove-binding-cases");

generateAllCases();

if (ONLY_ADD_REMOVE_BINDING_CASES) {
  const writtenCount = writeYamlPairs({ onlyAddRemoveBindingCases: true });
  patchExports(CASES.filter(isAddRemoveBindingCase));
  console.log(`Updated ${writtenCount} add/remove binding async-api-diff pairs.`);
} else {
  writeYamlPairs();
  writeExports();
  console.log(`Generated ${CASES.length} async-api-diff pairs.`);
}
