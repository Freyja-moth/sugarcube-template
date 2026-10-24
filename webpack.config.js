import path from "path";
import { fileURLToPath } from "url";

const mode = process.argv.includes("--mode") ? process.argv[process.argv.indexOf("--mode") + 1] : "development";

// In Node.js versions prior to native support for import.meta.dirname,
// derive __dirname from import.meta.url.
// (Node 20.11+ supports import.meta.dirname and import.meta.filename.)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  experiments: {
    css: true,
  },
  entry: "./src/scripts/index.ts",
  output: {
    filename: "bundled.scripts.js",
    path: mode === "development" ? path.resolve(__dirname, "target/debug/build/scripts") : path.resolve(__dirname, "target/release/build/scripts"),
  },
  mode,
  resolve: {
    extensions: ['.ts', '.js', '.tsx', 'jsx'],
    alias: {
      "twine-sugarcube": false
    }
  },
  module: {
    // TODO: find out a way to get css modules
    parser: {
      "css/auto": {
        namedExports: true,
      },
    },
    generator: {
      "css/auto": {
        exportsConvention: "camel-case-only",
        localIdentName: "[uniqueName]-[id]-[local]",
      },
    },
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
};
