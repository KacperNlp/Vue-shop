"use strict";

/**
 * wishlist controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::wishlist.wishlist",
  ({ strapi }) => ({
    async addProduct(ctx) {
      const { id } = ctx.params;
      const { productId } = ctx.request.body;

      console.log(id);
      console.log(productId);

      return null;
    },
  })
);
