const os = require("os");

const systemInfo = () => {
    const myObj = {
        platform: os.platform(),
        osType: os.type(),
        freeMemory: os.freemem(),
        totalMemory: os.totalmem(),
        EOL: os.EOL
    };
    return myObj;
};

module.exports.systemInfo = systemInfo;