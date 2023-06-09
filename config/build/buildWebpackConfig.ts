import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPugins';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(opt: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = opt;

    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(opt),
        },
        resolve: buildResolves(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(opt),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(opt) : undefined,
    };
}
