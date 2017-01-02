import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  url: String,
});

module.exports = mongoose.model('Recipe', RecipeSchema);
