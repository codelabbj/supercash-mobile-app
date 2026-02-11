import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.supercash.app',
    appName: 'SuperCash',
    webDir: 'www',
    server: {
        url: 'https://supercash-user.vercel.app',
        cleartext: true
    }
};

export default config;
