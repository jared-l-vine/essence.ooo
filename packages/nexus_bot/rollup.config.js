import nodeResolve from "rollup-plugin-node-resolve";
import builtins from "builtin-modules";
import commonJS from "rollup-plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";

export default ({
  input = "src/index.ts",
  plugins = [],
  external = [],
  output = {
    dir: "dist",
    format: "cjs"
  }
}) => ({
  input,
  manualChunks(id) {
    if (id.includes("node_modules")) {
      return "vendor";
    }
  },
  output,
  plugins: [
    typescript(/*{ plugin options }*/),
    nodeResolve({ preferBuiltins: true }),
    commonJS({ include: "node_modules/**" }),
    json(),
    ...plugins
  ],
  external: ["aws-sdk", ...builtins, ...external]
});
