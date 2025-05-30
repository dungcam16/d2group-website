
declare global {
  interface Window {
    chatwootSDK: {
      toggle: () => void;
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
    chatwootSettings: {
      position: string;
      type: string;
      launcherTitle: string;
    };
  }
}

export {};
