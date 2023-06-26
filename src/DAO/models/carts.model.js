import mongoose, { Schema, model } from 'mongoose';

const cartSchema = mongoose.Schema({
  products: {
    type: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'products',
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
});

export const CartsModel = model('carts', cartSchema);