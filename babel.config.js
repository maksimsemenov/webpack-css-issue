module.exports = {
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
  overrides: [
    {
      test: './apps/emr',
      env: {
        test: {
          plugins: [
            [
              'babel-plugin-module-resolver',
              {
                cwd: 'packagejson',
                alias: {
                  internalTool: '../internalTool',
                  modules: './src/modules',
                  components: './src/components',
                  constants: './src/constants',
                  shared: './src/shared',
                  widgets: './src/widgets',
                  urls: './src/urls',
                  utils: './src/utils',
                  views: './src/views',
                },
              },
            ],
            '@babel/plugin-transform-modules-commonjs',
          ],
        },
      },
    },
    {
      test: './packages/vital',
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-function-bind',
        '@babel/plugin-proposal-function-sent',
        '@babel/plugin-proposal-json-strings',
        '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-transform-runtime',
      ],
    },
  ],
};
