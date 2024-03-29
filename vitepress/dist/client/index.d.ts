import { AllowedComponentProps } from 'vue';
import { App } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptions } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { EmitsOptions } from 'vue';
import { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

export declare const Content: DefineComponent<    {}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, EmitsOptions, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{} & {} & {}>, {}>;

export declare const Debug: ComponentOptions<{}, any, any, any, any, any, any, any>;

export declare interface EnhanceAppContext {
    app: App;
    router: Router;
    siteData: Ref<SiteData>;
}

export declare type HeadConfig =
| [string, Record<string, string>]
| [string, Record<string, string>, string]

export declare interface Header {
    level: number
    title: string
    slug: string
}

export declare const inBrowser: boolean;

export declare interface LocaleConfig {
    lang: string
    title?: string
    description?: string
    head?: HeadConfig[]
    label?: string
    selectText?: string
}

export declare interface PageData {
    relativePath: string
    title: string
    description: string
    headers: Header[]
    frontmatter: Record<string, any>
    lastUpdated: number
}

export declare interface Route {
    path: string;
    data: PageData;
    component: Component | null;
}

export declare interface Router {
    route: Route;
    go: (href?: string) => Promise<void>;
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

export declare interface Theme {
    Layout: Component;
    NotFound?: Component;
    enhanceApp?: (ctx: EnhanceAppContext) => void;
}

export declare function useData<T = any>(): VitePressData<T>;

export declare function useRoute(): Route;

export declare function useRouter(): Router;

export declare interface VitePressData<T = any> {
    site: Ref<SiteData<T>>;
    page: Ref<PageData>;
    theme: Ref<T>;
    frontmatter: Ref<PageData['frontmatter']>;
    title: Ref<string>;
    description: Ref<string>;
    lang: Ref<string>;
    localePath: Ref<string>;
}

export declare function withBase(path: string): string;

export { }
