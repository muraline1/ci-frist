{
  
    parser: 'vue-eslint-parser',
    parserOptions; {
      parser: '@babel/eslint-parser'
      babelOptions: {
        parserOpts: {
          plugins: ["jsx"]
        }
      }
    }
  }