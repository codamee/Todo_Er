import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',         // Serves your bundled files
        watchFiles: ['./src/template.html'], // Refreshes when you change HTML
        hot: true,
    },
});