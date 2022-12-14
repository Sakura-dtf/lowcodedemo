module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "@vue/airbnb"],
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true,
        },
        parser: "babel-eslint",
    },
    rules: {},
};
