module.exports = ({ env }) => ({
  proxy: true,
  url: env('https://calm-journey-51634.herokuapp.com/'),
  app: { 
    keys: env.array('APP_KEYS')
  },
})
