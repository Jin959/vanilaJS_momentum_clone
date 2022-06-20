require('dotenv').config();

module.exports = {
  entry: "js/weather.js",
  plugin: [
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(process.env.API_KEY)
    })
  ]
}