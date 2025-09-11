export default ({ config }) => {
  return {
    ...config,
    name: 'Gestion App',
    slug: 'gestion-app',
    extra: {
      storybookEnabled: process.env.STORYBOOK_ENABLED || 'false',
    },
  };
};
