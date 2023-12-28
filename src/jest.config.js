module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    moduleNameMapper: {
      // Mocks out all these file formats when testing
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
  