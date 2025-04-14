declare module '@twa-dev/sdk' {
    interface WebApp {
        ready: () => void;
        expand: () => void;
        close: () => void;
        MainButton: {
            show: () => void;
            hide: () => void;
            setText: (text: string) => void;
            onClick: (callback: () => void) => void;
        };
        BackButton: {
            show: () => void;
            hide: () => void;
            onClick: (callback: () => void) => void;
        };
        isExpanded: boolean;
        viewportHeight: number;
        viewportStableHeight: number;
    }

    const WebApp: WebApp;
    export default WebApp;
} 