const net = require('net');

/**
 * Detects common dev server ports on localhost
 */
async function detectDevServers() {
    const commonPorts = [3000, 3001, 5173, 8000, 8080];
    const found = [];

    for (const port of commonPorts) {
        const isUp = await new Promise((resolve) => {
            const socket = new net.Socket();
            socket.setTimeout(100);
            socket.on('connect', () => {
                socket.destroy();
                resolve(true);
            });
            socket.on('timeout', () => {
                socket.destroy();
                resolve(false);
            });
            socket.on('error', () => {
                socket.destroy();
                resolve(false);
            });
            socket.connect(port, '127.0.0.1');
        });

        if (isUp) {
            found.push(`http://localhost:${port}`);
        }
    }

    return found;
}

/**
 * Creates a browser context with custom headers if provided via env vars
 */
function getContextOptionsWithHeaders(options = {}) {
    const extraHeaders = {};

    if (process.env.PW_HEADER_NAME && process.env.PW_HEADER_VALUE) {
        extraHeaders[process.env.PW_HEADER_NAME] = process.env.PW_HEADER_VALUE;
    }

    if (process.env.PW_EXTRA_HEADERS) {
        try {
            Object.assign(extraHeaders, JSON.parse(process.env.PW_EXTRA_HEADERS));
        } catch (e) {
            console.warn('Failed to parse PW_EXTRA_HEADERS:', e.message);
        }
    }

    return {
        ...options,
        extraHTTPHeaders: {
            ...options.extraHTTPHeaders,
            ...extraHeaders
        }
    };
}

async function createContext(browser, options = {}) {
    return await browser.newContext(getContextOptionsWithHeaders(options));
}

module.exports = {
    detectDevServers,
    getContextOptionsWithHeaders,
    createContext,
    // Stubs for other helpers mentioned in SKILL.md
    safeClick: async (page, selector) => await page.click(selector),
    safeType: async (page, selector, text) => {
        await page.fill(selector, '');
        await page.type(selector, text);
    },
    takeScreenshot: async (page, name) => await page.screenshot({ path: `/tmp/${name}-${Date.now()}.png` })
};
