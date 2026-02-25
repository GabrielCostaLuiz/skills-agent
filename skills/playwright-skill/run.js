const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const helpers = require('./lib/helpers');

const arg = process.argv[2];

if (!arg) {
    console.error('Usage: node run.js <file-path-or-code-string>');
    process.exit(1);
}

// Inject helpers and Playwright into global scope for convenience in one-liners
global.chromium = chromium;
global.helpers = helpers;
global.getContextOptionsWithHeaders = helpers.getContextOptionsWithHeaders;

async function execute() {
    if (fs.existsSync(arg)) {
        // Execute file
        require(path.resolve(arg));
    } else {
        // Execute string
        try {
            const AsyncFunction = Object.getPrototypeOf(async function () { }).constructor;
            const fn = new AsyncFunction(arg);
            await fn();
        } catch (e) {
            console.error('Execution failed:', e);
            process.exit(1);
        }
    }
}

execute().catch(err => {
    console.error(err);
    process.exit(1);
});
