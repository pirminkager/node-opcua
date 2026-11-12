# node-opcua-client-browser

OPC UA client SDK for modern browsers, using the **WebSocket transport mapping**
defined in OPC UA Part 6, §7.5.

> **Status — scaffold only.**
> This initial drop establishes the package layout, build toolchain, and
> Playwright E2E harness. The WebSocket transport, the `createBrowserClient`
> helper, and the prebuilt browser bundle arrive in follow-up PRs. Consult
> `openspec/changes/add-browser-client-wsopcua/` for the canonical scope and
> roadmap.

## Planned scope (upcoming PRs)

- Endpoint URL schemes: `opc.ws://`, `opc.wss://`, `ws://`, `wss://`
- Security policies: `None`, `Basic256Sha256` (SignAndEncrypt)
- User identity tokens: Anonymous, UserName/Password (password encrypted under
  `Basic256Sha256` when applicable)
- Services: Read / Write / CreateSubscription / CreateMonitoredItems / Publish

## What is in this scaffold PR

- Package skeleton (`package.json`, `tsconfig*.json`).
- An empty `source/index.ts` that just exports a `VERSION` string; subsequent
  PRs add the actual transport implementation.
- A Playwright test harness that builds a minimal test page with esbuild,
  serves it over a local HTTP server, and loads it headless in Chromium.
- One smoke spec (`test/e2e/smoke.spec.ts`) that asserts the test page loads
  and the `node-opcua-client-browser` module evaluates. Later PRs replace
  this with full OPC UA Read / Write / Subscribe flows over `opc.ws` and
  `opc.wss` against a demo server.

## Running the smoke test

```bash
pnpm exec playwright install chromium   # first time only
pnpm test:e2e                           # runs the smoke spec headless
```

## License

MIT — see [LICENSE](./LICENSE).
