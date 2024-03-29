import { AliasOptions } from 'vite';
import anchor from 'markdown-it-anchor';
import { BuildOptions } from 'vite';
import MarkdownIt from 'markdown-it';
import { Options } from '@vitejs/plugin-vue';
import { ServerOptions } from 'vite';
import { UserConfig as UserConfig_2 } from 'vite';
import { ViteDevServer } from 'vite';

export declare function build(root: string, buildOptions?: BuildOptions & {
    mpa?: string;
}): Promise<void>;

export declare const createMarkdownRenderer: (srcDir: string, options?: MarkdownOptions) => MarkdownRenderer;

export declare function createServer(root?: string, serverOptions?: ServerOptions): Promise<ViteDevServer>;

/**
 * Type config helper
 */
export declare function defineConfig(config: RawConfigExports): RawConfigExports;

export declare type HeadConfig =
| [string, Record<string, string>]
| [string, Record<string, string>, string]

export declare interface Header {
    level: number
    title: string
    slug: string
}

export declare interface LocaleConfig {
    lang: string
    title?: string
    description?: string
    head?: HeadConfig[]
    label?: string
    selectText?: string
}

export declare interface MarkdownOptions extends MarkdownIt.Options {
    lineNumbers?: boolean;
    config?: (md: MarkdownIt) => void;
    anchor?: {
        permalink?: anchor.AnchorOptions['permalink'];
    };
    attrs?: {
        leftDelimiter?: string;
        rightDelimiter?: string;
        allowedAttributes?: string[];
    };
    toc?: any;
    externalLinks?: Record<string, string>;
}

export declare interface MarkdownParsedData {
    hoistedTags?: string[];
    links?: string[];
    headers?: Header[];
}

export declare interface MarkdownRenderer {
    __data: MarkdownParsedData;
    render: (src: string, env?: any) => {
        html: string;
        data: any;
    };
}

export declare type RawConfigExports = UserConfig | Promise<UserConfig> | (() => UserConfig | Promise<UserConfig>);

export declare function resolveConfig(root?: string, command?: 'serve' | 'build', mode?: string): Promise<SiteConfig>;

export declare function resolveSiteData(root: string, userConfig?: UserConfig, command?: 'serve' | 'build', mode?: string): Promise<SiteData>;

export declare function resolveSiteDataByRoute(siteData: SiteData, route: string): SiteData;

export declare function serve(options?: ServeOptions): Promise<void>;

export declare interface ServeOptions {
    root?: string;
    port?: number;
}

export declare interface SiteConfig<ThemeConfig = any> extends Pick<UserConfig, 'markdown' | 'vue' | 'vite' | 'shouldPreload' | 'mpa'> {
    root: string;
    srcDir: string;
    site: SiteData<ThemeConfig>;
    configPath: string | undefined;
    themeDir: string;
    outDir: string;
    tempDir: string;
    alias: AliasOptions;
    pages: string[];
}

export declare interface SiteData<ThemeConfig = any> {
    base: string
    /**
     * Language of the site as it should be set on the `html` element.
     * @example `en-US`, `zh-CN`
     */
    lang: string
    title: string
    description: string
    banner: string
    head: HeadConfig[]
    themeConfig: ThemeConfig
    locales: Record<string, LocaleConfig>
    /**
     * Available locales for the site when it has defined `locales` in its
     * `themeConfig`. This object is otherwise empty. Keys are paths like `/` or
     * `/zh/`.
     */
    langs: Record<
    string,
        {
        /**
         * Lang attribute as set on the `<html>` element.
         * @example `en-US`, `zh-CN`
         */
        lang: string
        /**
         * Label to display in the language menu.
         * @example `English`, `简体中文`
         */
        label: string
    }
    >
}

export declare interface UserConfig<ThemeConfig = any> {
    extends?: RawConfigExports;
    lang?: string;
    base?: string;
    title?: string;
    description?: string;
    banner?: string;
    head?: HeadConfig[];
    themeConfig?: ThemeConfig;
    locales?: Record<string, LocaleConfig>;
    markdown?: MarkdownOptions;
    /**
     * Opitons to pass on to `@vitejs/plugin-vue`
     */
    vue?: Options;
    /**
     * Vite config
     */
    vite?: UserConfig_2;
    srcDir?: string;
    srcExclude?: string[];
    shouldPreload?: (link: string, page: string) => boolean;
    /**
     * Enable MPA / zero-JS mode
     * @experimental
     */
    mpa?: boolean;
}

export { }
