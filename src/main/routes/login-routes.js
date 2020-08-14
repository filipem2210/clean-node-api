const loginRouter = require('../composers/login-router-composer')
const ExpressRouterAdapter = require('../adapters/express-route-adapter')

module.exports = router => {
  router.post('/login', ExpressRouterAdapter.adapt(loginRouter))
}
