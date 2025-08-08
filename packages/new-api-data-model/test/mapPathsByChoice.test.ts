import { ADV } from "../abstract/types/model";
import { mapPathsByChoice } from "../abstract/utilities/paths";

// Helper function to create a test row
const createTestRow = (path: (string | number)[], visible: boolean = true): ADV.Row => ({
  type: ADV.RowType.TEXT_ROW,
  level: 0,
  elements: [],
  visible,
  path: path as ADV.Path
});

// Helper function to extract paths and visibility from rows
const extractPathsAndVisibility = (rows: ADV.Row[]): Array<{ path: (string | number)[], visible: boolean }> => {
  return rows.map(row => ({ path: row.path as (string | number)[], visible: row.visible }));
};

describe('mapPathsByChoice', () => {
  const testPaths = [
    ['combiner'],
    ['combiner', 'oneOf'],
    ['combiner', 'oneOf', 'item A'],
    ['combiner', 'oneOf', 'B item'],
    ['combiner', 'oneOf', 'One more item'],
    ['combiner', 'oneOf', 'One more item', 'name'],
    ['combiner', 'oneOf', 'One more item', 'age'],
    ['combiner', 'oneOf', 'One more item', 'isStudent'],
    ['notCombiner', 'organizationId'],
    ['notCombiner', 'organizationName'],
    ['anotherCombiner'],
    ['anotherCombiner', 'oneOf'],
    ['anotherCombiner', 'oneOf', 'item A'],
    ['anotherCombiner', 'oneOf', 'B item'],
    ['anotherCombiner', 'oneOf', 'One more item'],
    ['anotherCombiner', 'oneOf', 'One more item', 'name'],
    ['anotherCombiner', 'oneOf', 'One more item', 'name']
  ];

  // Create test rows from test paths
  const testRows = testPaths.map(path => createTestRow(path));

  test('should mark correct rows as visible for choice === ["combiner", "oneOf", "item A"]', () => {
    const result = mapPathsByChoice([...testRows], ['combiner', 'oneOf', 'item A']);
    const pathsAndVisibility = extractPathsAndVisibility(result);
    
    const expectedVisiblePaths = [
      ['combiner'],
      ['combiner', 'oneOf'],
      ['combiner', 'oneOf', 'item A'],
      ['notCombiner', 'organizationId'],
      ['notCombiner', 'organizationName'],
      ['anotherCombiner'],
      ['anotherCombiner', 'oneOf'],
      ['anotherCombiner', 'oneOf', 'item A'],
      ['anotherCombiner', 'oneOf', 'B item'],
      ['anotherCombiner', 'oneOf', 'One more item'],
      ['anotherCombiner', 'oneOf', 'One more item', 'name'],
      ['anotherCombiner', 'oneOf', 'One more item', 'name']
    ];

    pathsAndVisibility.forEach(({ path, visible }) => {
      const shouldBeVisible = expectedVisiblePaths.some(expectedPath =>
        expectedPath.length === path.length && expectedPath.every((val, i) => val === path[i])
      );
      expect(visible).toBe(shouldBeVisible);
    });
  });

  test('should mark correct rows as visible for choice === ["combiner", "oneOf", "B item"]', () => {
    const result = mapPathsByChoice([...testRows], ['combiner', 'oneOf', 'B item']);
    const pathsAndVisibility = extractPathsAndVisibility(result);

    const expectedVisiblePaths = [
      ['combiner'],
      ['combiner', 'oneOf'],
      ['combiner', 'oneOf', 'B item'],
      ['notCombiner', 'organizationId'],
      ['notCombiner', 'organizationName'],
      ['anotherCombiner'],
      ['anotherCombiner', 'oneOf'],
      ['anotherCombiner', 'oneOf', 'item A'],
      ['anotherCombiner', 'oneOf', 'B item'],
      ['anotherCombiner', 'oneOf', 'One more item'],
      ['anotherCombiner', 'oneOf', 'One more item', 'name'],
      ['anotherCombiner', 'oneOf', 'One more item', 'name']
    ];

    pathsAndVisibility.forEach(({ path, visible }) => {
      const shouldBeVisible = expectedVisiblePaths.some(expectedPath =>
        expectedPath.length === path.length && expectedPath.every((val, i) => val === path[i])
      );
      expect(visible).toBe(shouldBeVisible);
    });
  });

  test('should mark correct rows as visible for choice === ["combiner", "oneOf", "One more item"]', () => {
    const result = mapPathsByChoice([...testRows], ['combiner', 'oneOf', 'One more item']);
    const pathsAndVisibility = extractPathsAndVisibility(result);

    const expectedVisiblePaths = [
      ['combiner'],
      ['combiner', 'oneOf'],
      ['combiner', 'oneOf', 'One more item'],
      ['combiner', 'oneOf', 'One more item', 'name'],
      ['combiner', 'oneOf', 'One more item', 'age'],
      ['combiner', 'oneOf', 'One more item', 'isStudent'],
      ['notCombiner', 'organizationId'],
      ['notCombiner', 'organizationName'],
      ['anotherCombiner'],
      ['anotherCombiner', 'oneOf'],
      ['anotherCombiner', 'oneOf', 'item A'],
      ['anotherCombiner', 'oneOf', 'B item'],
      ['anotherCombiner', 'oneOf', 'One more item'],
      ['anotherCombiner', 'oneOf', 'One more item', 'name'],
      ['anotherCombiner', 'oneOf', 'One more item', 'name']
    ];

    pathsAndVisibility.forEach(({ path, visible }) => {
      const shouldBeVisible = expectedVisiblePaths.some(expectedPath =>
        expectedPath.length === path.length && expectedPath.every((val, i) => val === path[i])
      );
      expect(visible).toBe(shouldBeVisible);
    });
  });

  test('should mark correct rows as visible for choice === ["anotherCombiner", "oneOf", "One more item"]', () => {
    const result = mapPathsByChoice([...testRows], ['anotherCombiner', 'oneOf', 'One more item']);
    const pathsAndVisibility = extractPathsAndVisibility(result);

    const expectedVisiblePaths = [
      ['combiner'],
      ['combiner', 'oneOf'],
      ['combiner', 'oneOf', 'item A'],
      ['combiner', 'oneOf', 'B item'],
      ['combiner', 'oneOf', 'One more item'],
      ['combiner', 'oneOf', 'One more item', 'name'],
      ['combiner', 'oneOf', 'One more item', 'age'],
      ['combiner', 'oneOf', 'One more item', 'isStudent'],
      ['notCombiner', 'organizationId'],
      ['notCombiner', 'organizationName'],
      ['anotherCombiner'],
      ['anotherCombiner', 'oneOf'],
      ['anotherCombiner', 'oneOf', 'One more item'],
      ['anotherCombiner', 'oneOf', 'One more item', 'name'],
      ['anotherCombiner', 'oneOf', 'One more item', 'name']
    ];

    pathsAndVisibility.forEach(({ path, visible }) => {
      const shouldBeVisible = expectedVisiblePaths.some(expectedPath =>
        expectedPath.length === path.length && expectedPath.every((val, i) => val === path[i])
      );
      expect(visible).toBe(shouldBeVisible);
    });
  });

  test('should work with numeric choices', () => {
    const numericPaths = [
      ['api'],
      ['api', 'v1'],
      ['api', 'v1', 0],
      ['api', 'v1', 1],
      ['api', 'v1', 2],
      ['api', 'v1', 2, 'details'],
      ['other', 'path']
    ];

    const numericRows = numericPaths.map(path => createTestRow(path));
    const result = mapPathsByChoice(numericRows, ['api', 'v1', 2]);
    const pathsAndVisibility = extractPathsAndVisibility(result);

    const expectedVisiblePaths = [
      ['api'],
      ['api', 'v1'],
      ['api', 'v1', 2],
      ['api', 'v1', 2, 'details'],
      ['other', 'path']
    ];

    pathsAndVisibility.forEach(({ path, visible }) => {
      const shouldBeVisible = expectedVisiblePaths.some(expectedPath =>
        expectedPath.length === path.length && expectedPath.every((val, i) => val === path[i])
      );
      expect(visible).toBe(shouldBeVisible);
    });
  });

  test('should handle empty rows array', () => {
    const result = mapPathsByChoice([], ['any', 'path']);
    expect(result).toEqual([]);
  });

  test('should handle paths without choice area', () => {
    const pathsWithoutChoices = [
      ['simple'],
      ['simple', 'path'],
      ['another', 'path']
    ];

    const rowsWithoutChoices = pathsWithoutChoices.map(path => createTestRow(path));
    const result = mapPathsByChoice(rowsWithoutChoices, ['nonexistent', 'path']);

    // All rows should be visible since they don't match the choice area
    result.forEach(row => {
      expect(row.visible).toBe(true);
    });
  });

  test('should handle single element choice', () => {
    const simplePaths = [
      ['a'],
      ['a', 'sub1'],
      ['a', 'sub2'],
      ['b'],
      ['b', 'sub1']
    ];

    const simpleRows = simplePaths.map(path => createTestRow(path));
    const result = mapPathsByChoice(simpleRows, ['a']);

    // All rows should be visible since single element choice includes everything
    result.forEach(row => {
      expect(row.visible).toBe(true);
    });
  });

  it('should handle combiner item that is also combiner', () => {
    const paths = [
      ['combiner', 'oneOf'],
      ['combiner', 'oneOf', 'item A'],
      ['combiner', 'oneOf', 'B item'],
      ['combiner', 'oneOf', 'One more item'],
      ['combiner', 'oneOf', 'One more item', 'oneOf'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'item A'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'B item'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'One more item'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'One more item', 'name'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'One more item', 'age'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'One more item', 'isStudent'],
      ['notCombiner', 'organizationId'],
      ['notCombiner', 'organizationName'],
    ];

    const rows = paths.map(path => createTestRow(path));
    const result = mapPathsByChoice(rows, ['oneOf', 'One more item', 'oneOf', 'One more item']);
    const pathsAndVisibility = extractPathsAndVisibility(result);

    const expectedVisiblePaths = [
      ['combiner', 'oneOf'],
      ['combiner', 'oneOf', 'One more item'],
      ['combiner', 'oneOf', 'One more item', 'oneOf'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'One more item'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'One more item', 'name'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'One more item', 'age'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'One more item', 'isStudent'],
      ['notCombiner', 'organizationId'],
      ['notCombiner', 'organizationName'],
    ];

    pathsAndVisibility.forEach(({ path, visible }) => {
      const shouldBeVisible = expectedVisiblePaths.some(expectedPath =>
        expectedPath.length === path.length && expectedPath.every((val, i) => val === path[i])
      );
      expect(visible).toBe(shouldBeVisible);
    });
  });

  it('should handle object is combiner item, one of object\'s properties is combiner item', () => {
    const paths = [
      ['combiner', 'oneOf'],
      ['combiner', 'oneOf', 'item A'],
      ['combiner', 'oneOf', 'B item'],
      ['combiner', 'oneOf', 'One more item'],
      ['combiner', 'oneOf', 'One more item', 'combinerInObject'],
      ['combiner', 'oneOf', 'One more item', 'combinerInObject', 'oneOf'],
      ['combiner', 'oneOf', 'One more item', 'combinerInObject', 'oneOf', 'item A'],
      ['combiner', 'oneOf', 'One more item', 'combinerInObject', 'oneOf', 'B item'],
      ['combiner', 'oneOf', 'One more item', 'combinerInObject', 'oneOf', 'One more item'],
      ['combiner', 'oneOf', 'One more item', 'combinerInObject', 'oneOf', 'One more item', 'name'],
      ['combiner', 'oneOf', 'One more item', 'combinerInObject', 'oneOf', 'One more item', 'age'],
      ['combiner', 'oneOf', 'One more item', 'notCombinerInObject', 'randomProperty'],
      ['notCombiner', 'organizationId'],
      ['notCombiner', 'organizationName'],
    ];

    const rows = paths.map(path => createTestRow(path));
    const result = mapPathsByChoice(rows, ['oneOf', 'One more item', 'combinerInObject', 'oneOf', 'One more item']);
    const pathsAndVisibility = extractPathsAndVisibility(result);

    const expectedVisiblePaths = [
      ['combiner', 'oneOf'],
      ['combiner', 'oneOf', 'One more item'],
      ['combiner', 'oneOf', 'One more item', 'combinerInObject'],
      ['combiner', 'oneOf', 'One more item', 'combinerInObject', 'oneOf'],
      ['combiner', 'oneOf', 'One more item', 'combinerInObject', 'oneOf', 'One more item'],
      ['combiner', 'oneOf', 'One more item', 'combinerInObject', 'oneOf', 'One more item', 'name'],
      ['combiner', 'oneOf', 'One more item', 'combinerInObject', 'oneOf', 'One more item', 'age'],
      ['combiner', 'oneOf', 'One more item', 'notCombinerInObject', 'randomProperty'],
      ['notCombiner', 'organizationId'],
      ['notCombiner', 'organizationName'],
    ];

    pathsAndVisibility.forEach(({ path, visible }) => {
      const shouldBeVisible = expectedVisiblePaths.some(expectedPath =>
        expectedPath.length === path.length && expectedPath.every((val, i) => val === path[i])
      );
      expect(visible).toBe(shouldBeVisible);
    });
  });

  test('should preserve other row properties while updating visibility', () => {
    const testRow: ADV.Row = {
      type: ADV.RowType.HEADER_ROW,
      level: 2,
      elements: [{ kind: ADV.ElementKind.NODE_TITLE }],
      entity: { test: 'data' },
      visible: false,
      path: ['test', 'path']
    };

    const result = mapPathsByChoice([testRow], ['test']);

    expect(result[0].type).toBe(ADV.RowType.HEADER_ROW);
    expect(result[0].level).toBe(2);
    expect(result[0].elements).toEqual([{ kind: ADV.ElementKind.NODE_TITLE }]);
    expect(result[0].entity).toEqual({ test: 'data' });
    expect(result[0].path).toEqual(['test', 'path']);
    expect(result[0].visible).toBe(true); // This should be updated
  });
}); 