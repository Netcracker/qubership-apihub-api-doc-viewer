import { filterPathsByChoice } from "../abstract/utilities/paths";

describe('filterPathsByChoice', () => {
  const jestConsole = console
  beforeEach(() => {
    global.console = require('console')
  })
  afterEach(() => {
    global.console = jestConsole
  })


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

  test('should filter paths for choice === ["combiner", "oneOf", "item A"]', () => {
    const result = filterPathsByChoice(testPaths, ['combiner', 'oneOf', 'item A']);
    const expected = [
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

    expect(result).toEqual(expected);
  });

  test('should filter paths for choice === ["combiner", "oneOf", "B item"]', () => {
    const result = filterPathsByChoice(testPaths, ['combiner', 'oneOf', 'B item']);
    const expected = [
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

    expect(result).toEqual(expected);
  });

  test('should filter paths for choice === ["combiner", "oneOf", "One more item"]', () => {
    const result = filterPathsByChoice(testPaths, ['combiner', 'oneOf', 'One more item']);
    const expected = [
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

    expect(result).toEqual(expected);
  });

  test('should filter paths for choice === ["anotherCombiner", "oneOf", "One more item"]', () => {
    const result = filterPathsByChoice(testPaths, ['anotherCombiner', 'oneOf', 'One more item']);
    const expected = [
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

    expect(result).toEqual(expected);
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

    const result = filterPathsByChoice(numericPaths, ['api', 'v1', 2]);
    const expected = [
      ['api'],
      ['api', 'v1'],
      ['api', 'v1', 2],
      ['api', 'v1', 2, 'details'],
      ['other', 'path']
    ];

    expect(result).toEqual(expected);
  });

  test('should handle empty paths array', () => {
    const result = filterPathsByChoice([], ['any', 'path']);
    expect(result).toEqual([]);
  });

  test('should handle paths without choice area', () => {
    const pathsWithoutChoices = [
      ['simple'],
      ['simple', 'path'],
      ['another', 'path']
    ];

    const result = filterPathsByChoice(pathsWithoutChoices, ['nonexistent', 'path']);
    expect(result).toEqual(pathsWithoutChoices);
  });

  test('should handle single element choice', () => {
    const simplePaths = [
      ['a'],
      ['a', 'sub1'],
      ['a', 'sub2'],
      ['b'],
      ['b', 'sub1']
    ];

    const result = filterPathsByChoice(simplePaths, ['a']);
    const expected = [
      ['a'],
      ['a', 'sub1'],
      ['a', 'sub2'],
      ['b'],
      ['b', 'sub1']
    ];

    expect(result).toEqual(expected);
  });

  it('combiner item is also combiner', () => {
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
    ]

    const result = filterPathsByChoice(paths, ['oneOf', 'One more item', 'oneOf', 'One more item'])

    const expected = [
      ['combiner', 'oneOf'],
      ['combiner', 'oneOf', 'One more item'],
      ['combiner', 'oneOf', 'One more item', 'oneOf'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'One more item'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'One more item', 'name'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'One more item', 'age'],
      ['combiner', 'oneOf', 'One more item', 'oneOf', 'One more item', 'isStudent'],
      ['notCombiner', 'organizationId'],
      ['notCombiner', 'organizationName'],
    ]

    expect(result).toEqual(expected)
  })

  it('object is combiner item, one of object\'s properties is combiner item', () => {
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
    ]

    const result = filterPathsByChoice(paths, ['oneOf', 'One more item', 'combinerInObject', 'oneOf', 'One more item'])

    const expected = [
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
    ]

    expect(result).toEqual(expected)
  })

  test('production case', () => {
    const paths = [
      ["oneOf", 0],
      ["oneOf", 0],
      ["oneOf", 1],
      ["oneOf", 1],
      ["oneOf"],
      ["oneOf"],
      ["oneOf", 1],
      ["oneOf", 1, "combiner", "oneOf", 0],
      ["oneOf", 1, "combiner", "oneOf", 0],
      ["oneOf", 1, "combiner", "oneOf", 1],
      ["oneOf", 1, "combiner", "oneOf", 1],
      ["oneOf", 1, "combiner", "oneOf"],
      ["oneOf", 1, "combiner", "oneOf"],
      ["oneOf", 1, "notCombiner"],
      ["oneOf", 1, "notCombiner"]
    ]

    const result1 = filterPathsByChoice(paths, ['oneOf', 0])
    const expected1 = [
      ["oneOf", 0],
      ["oneOf", 0],
      ["oneOf"],
      ["oneOf"],
    ]
    console.log('result1', result1)

    const result2 = filterPathsByChoice(paths, ['oneOf', 1])
    const expected2 = [
      ["oneOf", 1],
      ["oneOf", 1],
      ["oneOf"],
      ["oneOf"],
      ["oneOf", 1],
      ["oneOf", 1, "combiner", "oneOf", 0],
      ["oneOf", 1, "combiner", "oneOf", 0],
      ["oneOf", 1, "combiner", "oneOf", 1],
      ["oneOf", 1, "combiner", "oneOf", 1],
      ["oneOf", 1, "combiner", "oneOf"],
      ["oneOf", 1, "combiner", "oneOf"],
      ["oneOf", 1, "notCombiner"],
      ["oneOf", 1, "notCombiner"]
    ]
    console.log('result2', result2)
    
    expect(result1).toEqual(expected1)
    expect(result2).toEqual(expected2)
  })

}); 