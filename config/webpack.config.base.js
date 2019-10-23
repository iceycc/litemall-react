const path = require('path');
const rootDir = path.dirname(__dirname);

Config = {
    alias: {
        "src": path.resolve(rootDir, 'src'),
        'assets':path.resolve(rootDir,'src','assets')
    },
}

module.exports =  Config
