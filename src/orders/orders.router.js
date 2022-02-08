/**
 * Required External Modules and Interfaces
 */

const express = require('express');
const { makeOrder } = require('./orders.service');
const { checkJwt } = require('../authz/check-jwt');
//const jwtAuthz = require('express-jwt-authz');

/**
 * Router Definition
 */

const ordersRouter = express.Router();

/**
 * Controller Definitions
 */

// POST order
// jwtAuthz(['pizza:order']),
ordersRouter.post('/', checkJwt, (req, res) => {
  const { itemId, userId } = req.body;
  const message = makeOrder(itemId, userId);
  res.status(200).send(message);
});

module.exports = {
  ordersRouter,
};
