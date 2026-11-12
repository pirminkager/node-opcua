const ua = process.env.npm_config_user_agent || "";

// Block only on a positive npm signal. pnpm (any version, any context —
// including recursive sub-projects where the UA is stripped) never starts
// with "npm/", so we don't rely on absence/negation.
if (ua.startsWith("npm/")) {
  console.log("Use `pnpm install` to install dependencies in this repository");
  process.exit(1);
}
process.exit(0);
