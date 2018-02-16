const puppeteer = require('puppeteer')
const fs = require('fs')
const mkdirp = require('mkdirp')
const os = require('os')
const path = require('path')

const DIR = path.join(os.tmpdir(), 'poopeteer_global_setup')

module.exports = async function() {
  const browser = await puppeteer.launch({args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',

      // debug logging
      '--enable-logging', '--v=1'
  ]});
  // store the browser instance so we can teardown it later
  global.poopeteer = browser;

  // file the wsEndpoint for TestEnvironments
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};
