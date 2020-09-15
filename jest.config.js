module.exports = {
  testEnvironment: "node",
  testEnvironment: "node",
  clearMocks: true,
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/usecases/**/*.ts"],
  coverageDirectory: "__tests__/coverage",
  coverageProvider: "v8",
  testMatch: ["<rootDir>/__tests__/**/*.spec.ts"],
  transform: {
    "ˆ.+\\.ts$": "ts-jest",
  },
};
