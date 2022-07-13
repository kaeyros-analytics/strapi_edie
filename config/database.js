

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-3-222-74-92.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'daoilq9k55mh41'),
      user: env('DATABASE_USERNAME', 'foeezsdbhqflly'),
      password: env('DATABASE_PASSWORD', '57fc06f44eb80cdabadb63dbd272ccb22205d21e364ad1272dc7af127a8fe31f'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});

