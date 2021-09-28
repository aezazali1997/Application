module.exports = {
  babel: {
    presets: ['@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
      ['@babel/plugin-proposal-object-rest-spread'],
      ['@babel/plugin-transform-spread'],
      ['@babel/plugin-proposal-export-default-from'],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      [
        'module-resolver',
        {
          alias: {
            '~': './src',
            '^@/(.*)': './src/\\1',
            '^@types': './src/types/index.ts',
            '^@constants': './src/constants/index.ts',
            '^@icons': './src/icons/index.ts',
            '^@interfaces': './src/interfaces/index.ts',
            '^@models': './src/models/index.ts',
            '^@enums': './src/enum/index.ts',
            '^@shared': './src/components/shared/index.ts',
            '^@components/(.*)': './src/components/\\1',
          },
        },
      ],
    ],
    loaderOptions: (babelLoaderOptions) => babelLoaderOptions,
  },
  jest: {
    configure: { coverageProvider: 'v8' },
  },
  webpack: {
    loaders: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
};
