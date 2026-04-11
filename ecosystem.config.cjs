module.exports = {
  apps: [
    {
      name: 'gmp',
      cwd: __dirname,
      script: 'node',
      args: './dist/server/entry.mjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 4004,
      },
      env_production: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 4004,
      },
    },
  ],
};
