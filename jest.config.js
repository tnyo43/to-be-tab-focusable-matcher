module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(test).+(ts|tsx|js|jsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/toBeTabFocusableMatcher.ts"],
};
