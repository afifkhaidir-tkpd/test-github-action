declare const __SERVER__: boolean;
declare const __DEV__: boolean;
declare const __STAG__: boolean;
// declare const __TEST__: boolean;
declare const __PROD__: boolean;
declare const __GITREV__: string;
declare const __BROWSER_LEGACY_PATTERN__: RegExp;
declare const __BROWSER_MODERN_PATTERN__: RegExp;
declare const __R18__: boolean;

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: number;
    HOST?: string;
    SKIPPER_SERVICE_NAME: string;
    SKIPPER_DIFF_SERVING: boolean;
    SKIPPER_SCRIPT_CONTROLLER: boolean;
    SKIPPER_SERVICE_WORKER_ENABLED: boolean;
    SKIPPER_SERVICE_WORKER_FILENAME: string;
    SKIPPER_SERVICE_WORKER_PREFIX: string;
    SKIPPER_SERVICE_WORKER_BLACKLISTED_ROUTES: string[];
    SKIPPER_HEALTH_CHECK_ROUTES: string[];
    SKIPPER_SERVER_TIMING_ORIGIN: string[];
    SKIPPER_SSG_MAX_CACHE_SIZE: number;
    SKIPPER_WEBVIEW_FRAUD_ENABLED: boolean;
    SKIPPER_WEBVIEW_FRAUD_WARNING_TYPE: 'block' | 'message' | 'badge' | 'false';

    LITE_PUBLIC_HOSTNAME: string;
    LITE_PUBLIC_SW_EXCLUDE_ARRAY: string;
    LITE_PUBLIC_TRACKER_GA_ID: string;
    LITE_PUBLIC_TRACKER_ALEXA_ID: string;
    LITE_PUBLIC_TRACKER_GTM_ID: string;
  }
}

interface NodeModule {
  hot: {
    accept: (path?: string | string[], callback?: () => void) => void;
  };
}
