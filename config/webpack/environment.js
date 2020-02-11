const { environment } = require('@rails/webpacker')

// Added lines bellow
const webpack = require("webpack")
environment.plugins.append("Provide", new webpack.ProvidePlugin({
$: 'jquery',
jQuery: 'jquery',
Popper: ['popper.js', 'default']
}))

// Added lines above

module.exports = environment
