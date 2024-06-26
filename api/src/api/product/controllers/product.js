"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    let entities;
    const { filters } = ctx.query;

    // Initialize the base query
    let query = {
      populate: true,
      where: {},
    };

    if (filters) {
      // Price filters
      if (filters.price) {
        const { gte, lte } = filters.price;
        query.where.$or = [
          {
            $and: [{ discount: 0 }, { price: { $gte: gte, $lte: lte } }],
          },
          {
            $and: [
              { discount: { $gt: 0 } },
              { discount: { $gte: gte, $lte: lte } },
            ],
          },
        ];
      }

      // Category filters
      if (filters.category) {
        query.where.category = { id: { $in: filters.category } };
      }
    }

    entities = await strapi.db.query("api::product.product").findMany(query);

    return entities;
  },
}));
