var ManagementClient = require('auth0').ManagementClient;

const { clientId, clientSecret, domain } = require('../config/env.dev');

/**
 * Orders Methods
 */

const makeOrder = async (itemId, userId) => {
  console.log(itemId);

  var auth0managementClient = new ManagementClient({
    domain,
    clientId,
    clientSecret,
    scope: 'read:users update:users',
  });

  const user = await auth0managementClient.getUser({ id: userId });
  console.log(user.user_metadata);
  record = { item: itemId, timestamp: new Date().toISOString() };

  let newMeta;
  if (user.user_metadata) {
    newMeta = user.user_metadata;
    if (newMeta.pizza) {
      const records = newMeta.pizza;
      records.push(record);
      newMeta = { pizza: records };
    } else {
      newMeta.pizza = [record];
    }
  } else {
    newMeta = { pizza: [record] };
  }
  console.log(newMeta);
  await auth0managementClient.updateUserMetadata({ id: userId }, newMeta);

  return {
    message: `Your order of Pizza ${itemId} has been received!`,
  };
};

module.exports = {
  makeOrder,
};
