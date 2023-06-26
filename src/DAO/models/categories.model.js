//@ts-check
import { Schema, model } from 'mongoose';

const categoriesSchema = new Schema({
  title: String,
  description: String,
});

export const categoriesModel = model('categories', categoriesSchema); 