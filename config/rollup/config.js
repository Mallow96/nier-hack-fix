import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.js",
  output: [
    {
      format: "umd",
      name: "NIER",
      file: "app/build/bundle.js",
    },
  ],
  plugins: [resolve()],
};
