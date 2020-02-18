const config = require('./protractor.conf').config;

config.capabilities = {
    browserName: 'chrome',
    chomeOptions: {
        args: ['--headless', '--no-sandbox', "--disable-dev-shm-usage"]
    }
};
//'--disable-gpu', ,"--remote-debugging-port=9222", "--remote-debugging-address=0.0.0.0"
exports.config = config;