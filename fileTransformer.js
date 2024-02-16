const path = require("path");

module.exports = {
    process(src, filename) {
        return { code: `${JSON.stringify(path.basename(filename))}` };
    }
};
