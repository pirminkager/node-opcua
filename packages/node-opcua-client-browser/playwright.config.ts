import { defineConfig } from "@playwright/test";

/**
 * Playwright config for node-opcua-client-browser E2E.
 *
 * Runs only the Chromium project to keep the install footprint minimal.
 * Each spec owns its own harness (server + bridge + vite) to avoid any
 * cross-spec state leakage; `fullyParallel: false` keeps port usage tidy.
 */
export default defineConfig({
    testDir: "./test/e2e",
    testMatch: /.*\.spec\.ts$/,
    fullyParallel: false,
    workers: 1,
    retries: 0,
    timeout: 60_000,
    expect: { timeout: 10_000 },
    reporter: [["list"]],
    use: {
        headless: true,
        ignoreHTTPSErrors: true
    },
    projects: [
        {
            name: "chromium",
            use: {
                browserName: "chromium",
                // Reuse the repo's local Chromium cache (already populated)
                launchOptions: {}
            }
        }
    ]
});
