import { defineConfig } from "vite";

import { requireEnvVar } from "vite-require-env-var";

export default defineConfig({
  plugins: [requireEnvVar(["VITE_TEST", "VAR_2", "VAR_3"])],
});
