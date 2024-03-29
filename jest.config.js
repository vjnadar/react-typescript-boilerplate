module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx,mjs}"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "ts", "json", "tsx"],
  setupFiles: ["./jest.polyfills.js"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)", "**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testEnvironmentOptions: {
    url: "http://localhost",
    customExportConditions: [""]
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: false,
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "\\.svg$": "<rootDir>/fileTransformer.js"
  }
};
