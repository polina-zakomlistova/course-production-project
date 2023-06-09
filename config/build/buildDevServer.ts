import webpack from 'webpack';
import { BuildOptions } from './types/config';

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(opt: BuildOptions): DevServerConfiguration {
    return {
        port: opt.port,
        open: true,
        historyApiFallback: true,
    };
}
