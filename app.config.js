export default ({ config }) => {
  console.log('app.config.js - STORYBOOK_ENABLED:', process.env.STORYBOOK_ENABLED);
  return {
    ...config,
    name: 'Gestion App',
    slug: 'gestion-app',
    extra: {
      storybookEnabled: process.env.STORYBOOK_ENABLED || 'false',
    },
  };
};
