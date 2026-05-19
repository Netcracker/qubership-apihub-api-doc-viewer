export const parseJsonSource = (sourceText: string): Record<string, unknown> => {
  let parsedSource: unknown = undefined;

  try {
    parsedSource = JSON.parse(sourceText);
  } catch (error) {
    console.error("Cannot parse JSON:", error);
    parsedSource = undefined;
  }

  if (!parsedSource || typeof parsedSource !== "object" || parsedSource === null) {
    return {};
  }

  return parsedSource as Record<string, unknown>;
};
