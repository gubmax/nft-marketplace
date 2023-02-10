module.exports = {
  root: true,
  extends: ['@nft-marketplace/eslint-config'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  }
};
