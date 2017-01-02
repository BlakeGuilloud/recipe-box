import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: String,
  userId: String,
});

module.exports = mongoose.model('Recipe', RecipeSchema);
