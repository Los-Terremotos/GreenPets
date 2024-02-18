export const presets = [
  '@babel/preset-env',
  ['@babel/preset-react', { runtime: 'automatic' }],
  '@babel/preset-typescript',
];

export const plugins = [
  [
    'babel-plugin-styled-components',
    {
      "displayName": true,
      "pure": true
    }
  ]
];