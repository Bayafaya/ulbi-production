import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [path.resolve(paths.src), 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': path.resolve(paths.src)
        },
    }
}
