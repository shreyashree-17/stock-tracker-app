const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: String,
  date: Date,
  open: Number,
  high: Number,
  low: Number,
  close: Number,
  volume: Number,
});

const Stock = mongoose.model('Stock', stockSchema);

async function getAllStockData() {
  try {
    const stocks = await Stock.find();
    return stocks;
  } catch (error) {
    throw error;
  }
}

async function insertStockData(data) {
  try {
    const newStock = new Stock(data);
    await newStock.save();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllStockData,
  insertStockData,
};
