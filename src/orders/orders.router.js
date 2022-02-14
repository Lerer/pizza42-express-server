/**
 * Required External Modules and Interfaces
 */

const express = require('express');
const { makeOrder } = require('./orders.service');
const { checkJwt } = require('../authz/check-jwt');

/**
 * for validating scope
 * const jwtAuthz = require('express-jwt-authz')
 *
 */

/**
 * Router Definition
 */

const ordersRouter = express.Router();

/**
 * Controller Definitions
 */

/** POST order
 * for controling scope add: jwtAuthz(['pizza:order']),
 */
ordersRouter.post('/', checkJwt, async (req, res) => {
  if (!req.user) {
    return res.status(401).send({ message: 'Missing user in the request' });
  }
  const { itemId } = req.body;
  const message = await makeOrder(itemId, req.user.sub);
  console.log(message);
  res.status(200).send(message);
});

module.exports = {
  ordersRouter,
};
