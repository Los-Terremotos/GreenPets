// import '@testing-library/jest-dom';
// export const preset = 'ts-jest';
// export const testEnvironment = 'node';
// export const testMatch = [
//   "**/__tests__/**/*.ts?(x)",
//   "**/?(*.)+(spec|test).ts?(x)"
// ];
// export const setupFilesAfterEnv = ['@testing-library/jest-dom'];

import { defaults as tsjPreset } from 'ts-jest/presets';

export default {
  ...tsjPreset,
  testEnvironment: 'jsdom',
  testMatch: [
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)+(spec|test).ts?(x)"
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
};