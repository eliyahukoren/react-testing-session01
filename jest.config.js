const config = {
    verbose: true,
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/*.config.js',
        '!**/vendor/**',
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
        './src/components/': {
            branches: 40,
            statements: 40,
        },
    },
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
    }
};

module.exports = config;