const { pathsToModuleNameMapper } = require('ts-jest')

// Derive the mapping from the tsconfig rather than restating it. A jest mapping that
// disagrees with the compiler does not error - it resolves somewhere else, or nowhere,
// while tsc stays green.
//
// Plain require() because this tsconfig is plain JSON. If a comment is ever added here,
// jest fails to start with a parse error - loud, and preferable to importing typescript,
// which this package does not declare.
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(ts?|tsx?|js?|jsx?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
  ],
  // moduleNameMapper:{
  //   "^@netcracker/qubership-apihub-json-crawl$":'<rootDir>/../qubership-apihub-json-crawl/src',
  //   "^@netcracker/qubership-apihub-graphapi$":'<rootDir>/../qubership-apihub-graphapi/src',
  //   "^@netcracker/qubership-apihub-api-unifier$":'<rootDir>/../qubership-apihub-api-unifier/src',
  //   "^@netcracker/qubership-apihub-api-diff$":'<rootDir>/../qubership-apihub-api-diff/src',
  // },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  collectCoverage: true,
}