module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
    plugins: ["transform-class-properties"],
    env: {
        production: {
            plugins: ["react-remove-properties"]
        }
    }
};
