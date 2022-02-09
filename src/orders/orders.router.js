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
  const { itemId, userId } = req.body;
  const message = await makeOrder(itemId, userId);
  console.log(message);
  res.status(200).send(sanitizeHtml(message));
});

module.exports = {
  ordersRouter,
};
