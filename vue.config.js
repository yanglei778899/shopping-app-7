module.exports = {
    devServer: {
        before: require("./src/mock/mock")
    }
}