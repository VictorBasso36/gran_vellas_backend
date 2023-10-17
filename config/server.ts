export default ({ env }) => ({
  host: env('HOST', '149.100.142.202'),
  port: env.int('PORT', 14002),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
