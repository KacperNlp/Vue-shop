"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    let entities;

    if (!!ctx.query.filters) {
      const { gte, lte } = ctx.query.filters.price;
      // Fetch products with no discount
      const noDiscountProducts = await strapi.db
        .query("api::product.product")
        .findMany({
          populate: true,
          where: {
            $and: [{ discount: 0 }, { price: { $gte: gte, $lte: lte } }],
          },
        });

      const discountProducts = await strapi.db
        .query("api::product.product")
        .findMany({
          populate: true,
          where: {
            $and: [
              { discount: { $gt: 0 } },
              { discount: { $gte: gte, $lte: lte } },
            ],
          },
        });

      entities = [...noDiscountProducts, ...discountProducts];
    } else {
      entities = await strapi.db.query("api::product.product").findMany({
        populate: true,
      });
    }

    return entities;
  },
}));
