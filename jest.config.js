module.exports = {
  testEnvironment: "node",
  testEnvironment: "node",
  clearMocks: true,
  preset: "ts-jest",
  collectCoverageFrom: ["src/usecases/**/*.ts"],
  coverageDirectory: "__tests__/coverage",
  coverageReporters: ["json", "lcov "],
  testMatch: ["<rootDir>/__tests__/**/*.spec.ts"],
  transform: {
    "ˆ.+\\.ts$": "ts-jest",
  },
};
