import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";

import pkg from "./package.json";

const name = "createCanvasContext";

// Config
const rollupConfig = {
  input: "index.js",
  cache: false
};

const babelConfig = {
  exclude: "node_modules/**",
  babelrc: false,
  runtimeHelpers: true,
  presets: [
    [
      "@babel/preset-env",
      {
        targets: ["> 0.5%", "last 2 versions", "Firefox ESR", "not dead"]
      }
    ]
  ],
  plugins: ["@babel/plugin-proposal-object-rest-spread"]
};

const isDev = process.env.NODE_ENV === "development";

export default [
  {
    ...rollupConfig,
    plugins: [
      resolve(),
      babel(babelConfig),
      isDev ? serve({ open: true, contentBase: "./" }) : terser()
    ].filter(Boolean),
    output: {
      format: "es",
      file: pkg.module
    }
  },
  {
    ...rollupConfig,
    plugins: [
      resolve(),
      babel(babelConfig),
      commonjs(),
      isDev ? 0 : terser()
    ].filter(Boolean),
    output: {
      format: "iife",
      file: `${pkg.directories.lib}/${pkg.name}.iife.js`,
      name,
      exports: "default"
    }
  },
  {
    ...rollupConfig,
    plugins: [
      resolve(),
      babel(babelConfig),
      commonjs(),
      isDev ? 0 : terser()
    ].filter(Boolean),
    output: {
      format: "umd",
      file: `${pkg.directories.lib}/${pkg.name}.umd.js`,
      name
    }
  },
  {
    ...rollupConfig,
    plugins: [
      babel({
        ...babelConfig,
        presets: [
          [
            "@babel/preset-env",
            {
              targets: ["maintained node versions"]
            }
          ]
        ]
      }),
      resolve(),
      commonjs(),
      isDev ? 0 : terser()
    ].filter(Boolean),
    output: {
      format: "cjs",
      file: pkg.main
    }
  }
];
