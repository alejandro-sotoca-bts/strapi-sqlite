import { mergeConfig } from 'vite';

export default (config) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: ['ai-sim-builder.btsmomenta.com'],
    },
  });
}; 