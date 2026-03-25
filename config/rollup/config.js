<<<<<<< HEAD
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
=======
import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'src/main.js',
	output: [
		{
			format: 'umd',
			name: 'NIER',
			file: 'build/bundle.js'
		}
	],
	plugins: [ resolve() ]
>>>>>>> 2de52b34e875bac809bce527326d867f569aaf47
};
