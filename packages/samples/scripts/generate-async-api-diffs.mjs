import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT_ROOT = path.join(ROOT_DIR, "async-api-diffs");
const EXPORT_FILE = path.join(ROOT_DIR, "src", "async-api-diffs.ts");

const SECTION_OPERATION = "operation";
const SECTION_CHANNEL = "channel";
const SECTION_MESSAGE = "message";
const SECTION_SERVER = "channel-server";

const CASES = [];

const clone = (value) => JSON.parse(JSON.stringify(value));

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

const kafkaTypedBinding = () => ({
  bindingVersion: "1.0.0",
  stringValue: "hello",
  numberValue: 7,
  booleanValue: true,
  nullValue: null,
  objectValue: {
    first: "one",
    second: 2,
  },
  arrayPrimitives: ["x", 1, false],
  arrayObjects: [{ id: 1 }, { id: 2 }],
  arrayArrayPrimitives: [["a", "b"], [1, 2], [true, false]],
});

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
) => {
  addCase(section, `${numbering.addRemovePrefix}.1`, `${objectName}.bindings add amqp`, (doc) => {
    getter(doc).bindings = { kafka: { bindingVersion: "1.0.0" } };
  }, (doc) => {
    getter(doc).bindings = {
      kafka: { bindingVersion: "1.0.0" },
      amqp: { bindingVersion: "0.3.0" },
    };
  });

  addCase(section, `${numbering.addRemovePrefix}.2`, `${objectName}.bindings remove kafka`, (doc) => {
    getter(doc).bindings = {
      kafka: { bindingVersion: "1.0.0" },
      amqp: { bindingVersion: "0.3.0" },
    };
  }, (doc) => {
    getter(doc).bindings = {
      amqp: { bindingVersion: "0.3.0" },
    };
  });

  addCase(section, `${numbering.addRemovePrefix}.3`, `${objectName}.bindings add kafka`, () => {}, (doc) => {
    getter(doc).bindings = { kafka: { bindingVersion: "1.0.0" } };
  });

  addCase(section, `${numbering.addRemovePrefix}.4`, `${objectName}.bindings remove kafka`, (doc) => {
    getter(doc).bindings = { kafka: { bindingVersion: "1.0.0" } };
  }, () => {});

  addCase(section, `${numbering.versionPrefix}.1`, `${objectName}.bindings.kafka.bindingVersion changed`, (doc) => {
    getter(doc).bindings = { kafka: { bindingVersion: "1.0.0" } };
  }, (doc) => {
    getter(doc).bindings = { kafka: { bindingVersion: "2.0.0" } };
  });

  addCase(section, `${numbering.versionPrefix}.2`, `${objectName}.bindings.kafka.bindingVersion removed`, (doc) => {
    getter(doc).bindings = { kafka: { bindingVersion: "1.0.0" } };
  }, (doc) => {
    getter(doc).bindings = { kafka: {} };
  });

  addCase(section, `${numbering.versionPrefix}.3`, `${objectName}.bindings.kafka.bindingVersion added`, (doc) => {
    getter(doc).bindings = { kafka: {} };
  }, (doc) => {
    getter(doc).bindings = { kafka: { bindingVersion: "1.0.0" } };
  });
};

const addKafkaTypeCases = (section, objectName, getter, prefix) => {
  const mutations = [
    ["string-to-number", (k) => { k.stringValue = 1; }],
    ["number-to-string", (k) => { k.numberValue = "1"; }],
    ["string-to-boolean", (k) => { k.stringValue = true; }],
    ["number-to-null", (k) => { k.numberValue = null; }],
    ["boolean-to-string", (k) => { k.booleanValue = "true"; }],
    ["null-to-number", (k) => { k.nullValue = 5; }],
    ["string-to-array-primitives", (k) => { k.stringValue = ["a", 1, false]; }],
    ["number-to-array-primitives", (k) => { k.numberValue = ["a", 1, false]; }],
    ["string-to-array-objects", (k) => { k.stringValue = [{ a: 1 }, { a: 2 }]; }],
    ["number-to-array-objects", (k) => { k.numberValue = [{ a: 1 }, { a: 2 }]; }],
    ["string-to-array-arrays-primitives", (k) => { k.stringValue = [["a"], [1], [false]]; }],
    ["number-to-array-arrays-primitives", (k) => { k.numberValue = [["a"], [1], [false]]; }],
    ["boolean-to-null", (k) => { k.booleanValue = null; }],
    ["boolean-to-array-primitives", (k) => { k.booleanValue = ["a", 1, false]; }],
    ["null-to-array-primitives", (k) => { k.nullValue = ["a", 1, false]; }],
    ["boolean-to-object", (k) => { k.booleanValue = { changed: true }; }],
    ["null-to-object", (k) => { k.nullValue = { changed: true }; }],
    ["array-primitives-to-object", (k) => { k.arrayPrimitives = { changed: true }; }],
    ["array-objects-to-object", (k) => { k.arrayObjects = { changed: true }; }],
    ["array-arrays-primitives-to-object", (k) => { k.arrayArrayPrimitives = { changed: true }; }],
    ["remove-object-property", (k) => { delete k.objectValue.second; }],
    ["add-object-property", (k) => { k.objectValue.third = "added"; }],
  ];

  let index = 1;
  for (const [name, mutate] of mutations) {
    addCase(section, `${prefix}.${index}`, `${objectName}.bindings.kafka ${name}`, (doc) => {
      getter(doc).bindings = { kafka: kafkaTypedBinding() };
    }, (doc) => {
      getter(doc).bindings = { kafka: kafkaTypedBinding() };
      mutate(getter(doc).bindings.kafka);
    });
    index += 1;
  }
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

const addChannelSpecificCases = () => {
  addCase(SECTION_CHANNEL, "7.1", "channel.parameters added", (doc) => {
    channel(doc).address = "events.static";
  }, (doc) => {
    channel(doc).address = "events.{firstParam}.{secondParam}";
    channel(doc).parameters = {
      firstParam: parameterObject("first parameter"),
      secondParam: parameterObject("second parameter"),
    };
  });

  addCase(SECTION_CHANNEL, "7.2", "channel.parameters removed", (doc) => {
    channel(doc).address = "events.{firstParam}.{secondParam}";
    channel(doc).parameters = {
      firstParam: parameterObject("first parameter"),
      secondParam: parameterObject("second parameter"),
    };
  }, (doc) => {
    channel(doc).address = "events.static";
  });

  addCase(SECTION_CHANNEL, "7.3", "channel.parameters.firstParam removed", (doc) => {
    channel(doc).address = "events.{firstParam}.{secondParam}";
    channel(doc).parameters = {
      firstParam: parameterObject("first parameter"),
      secondParam: parameterObject("second parameter"),
    };
  }, (doc) => {
    channel(doc).address = "events.{secondParam}";
    channel(doc).parameters = {
      secondParam: parameterObject("second parameter"),
    };
  });

  addCase(SECTION_CHANNEL, "7.4", "channel.parameters.secondParam added", (doc) => {
    channel(doc).address = "events.{firstParam}";
    channel(doc).parameters = {
      firstParam: parameterObject("first parameter"),
    };
  }, (doc) => {
    channel(doc).address = "events.{firstParam}.{secondParam}";
    channel(doc).parameters = {
      firstParam: parameterObject("first parameter"),
      secondParam: parameterObject("second parameter"),
    };
  });

  addCase(SECTION_CHANNEL, "7.5", "channel.parameters key rename", (doc) => {
    channel(doc).address = "events.{firstParam}.{secondParam}";
    channel(doc).parameters = {
      firstParam: parameterObject("first parameter"),
      secondParam: parameterObject("second parameter"),
    };
  }, (doc) => {
    channel(doc).address = "events.{firstParam}.{param_2}";
    channel(doc).parameters = {
      firstParam: parameterObject("first parameter"),
      param_2: parameterObject("second parameter"),
    };
  });

  addCase(SECTION_CHANNEL, "7.6", "channel.parameters.secondParam object to broken ref", (doc) => {
    channel(doc).address = "events.{firstParam}.{secondParam}";
    channel(doc).parameters = {
      firstParam: parameterObject("first parameter"),
      secondParam: parameterObject("second parameter"),
    };
  }, (doc) => {
    channel(doc).address = "events.{firstParam}.{secondParam}";
    channel(doc).parameters = {
      firstParam: parameterObject("first parameter"),
      secondParam: { $ref: "#/components/parameters/DoesNotExist" },
    };
  });

  addCase(SECTION_CHANNEL, "7.7", "channel.parameters.secondParam broken ref to object", (doc) => {
    channel(doc).address = "events.{firstParam}.{secondParam}";
    channel(doc).parameters = {
      firstParam: parameterObject("first parameter"),
      secondParam: { $ref: "#/components/parameters/DoesNotExist" },
    };
  }, (doc) => {
    channel(doc).address = "events.{firstParam}.{secondParam}";
    channel(doc).parameters = {
      firstParam: parameterObject("first parameter"),
      secondParam: parameterObject("second parameter"),
    };
  });

  const servers = {
    server0: { host: "broker-0.example.com:9092", protocol: "kafka" },
    server1: { host: "broker-1.example.com:9092", protocol: "kafka" },
    server2: { host: "broker-2.example.com:5672", protocol: "amqp" },
  };

  addCase(SECTION_CHANNEL, "7.8", "channel.servers added", (doc) => {
    setServers(doc, clone(servers));
  }, (doc) => {
    setServers(doc, clone(servers));
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }];
  });

  addCase(SECTION_CHANNEL, "7.9", "channel.servers removed", (doc) => {
    setServers(doc, clone(servers));
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }];
  }, (doc) => {
    setServers(doc, clone(servers));
  });

  addCase(SECTION_CHANNEL, "7.10", "channel.servers one item added", (doc) => {
    setServers(doc, clone(servers));
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }];
  }, (doc) => {
    setServers(doc, clone(servers));
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }, { $ref: "#/servers/server2" }];
  });

  addCase(SECTION_CHANNEL, "7.11", "channel.servers one item removed", (doc) => {
    setServers(doc, clone(servers));
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }, { $ref: "#/servers/server2" }];
  }, (doc) => {
    setServers(doc, clone(servers));
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }];
  });

  addCase(SECTION_CHANNEL, "7.12", "channel.servers ref changed to broken ref", (doc) => {
    setServers(doc, clone(servers));
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }];
  }, (doc) => {
    setServers(doc, clone(servers));
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/missing-server" }];
  });

  addCase(SECTION_CHANNEL, "7.13", "channel.servers broken ref changed to existing ref", (doc) => {
    setServers(doc, clone(servers));
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/missing-server" }];
  }, (doc) => {
    setServers(doc, clone(servers));
    channel(doc).servers = [{ $ref: "#/servers/server0" }, { $ref: "#/servers/server1" }];
  });
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
  });
  addKafkaTypeCases(SECTION_SERVER, "channel.servers[0]", serverGetter, "4.1");
};

const generateAllCases = () => {
  addTitleDescriptionSummaryCases(SECTION_OPERATION, "operation", operation);
  addBindingsAndVersionCases(SECTION_OPERATION, "operation", operation);
  addKafkaTypeCases(SECTION_OPERATION, "operation", operation, "5.1");
  addExtensionsCases(SECTION_OPERATION, "operation", operation);

  addTitleDescriptionSummaryCases(SECTION_CHANNEL, "channel", channel);
  addBindingsAndVersionCases(SECTION_CHANNEL, "channel", channel);
  addKafkaTypeCases(SECTION_CHANNEL, "channel", channel, "5.1");
  addExtensionsCases(SECTION_CHANNEL, "channel", channel);
  addChannelSpecificCases();

  addTitleDescriptionSummaryCases(SECTION_MESSAGE, "message", message);
  addBindingsAndVersionCases(SECTION_MESSAGE, "message", message);
  addKafkaTypeCases(SECTION_MESSAGE, "message", message, "5.1");
  addExtensionsCases(SECTION_MESSAGE, "message", message);
  addMessageSchemaCases();

  addServerCases();
};

const writeYamlPairs = () => {
  fs.rmSync(OUTPUT_ROOT, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT_ROOT, { recursive: true });

  for (const item of CASES) {
    const caseDir = path.join(OUTPUT_ROOT, item.section, `${item.caseId}-${sanitize(item.description)}`);
    fs.mkdirSync(caseDir, { recursive: true });
    fs.writeFileSync(path.join(caseDir, "before.yaml"), item.beforeYaml, "utf8");
    fs.writeFileSync(path.join(caseDir, "after.yaml"), item.afterYaml, "utf8");
  }
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

generateAllCases();
writeYamlPairs();
writeExports();

console.log(`Generated ${CASES.length} async-api-diff pairs.`);
