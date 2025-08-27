const fs = require('fs');

module.exports = {
  process(src, filename) {
    // Read the file as a string and export it as a default export
    const content = fs.readFileSync(filename, 'utf8');
    return {
      code: `module.exports = ${JSON.stringify(content)};`,
    };
  },
};
