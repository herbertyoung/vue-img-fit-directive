import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/vue-img-fit-directive.esm.js',
    format: 'esm'
  }, {
    file: 'dist/vue-img-fit-directive.common.js',
    format: 'cjs'
  }],
  plugins: [
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ]
};
