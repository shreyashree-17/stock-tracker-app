
const mongoose = require('mongoose');

const stockDataSchema = new mongoose.Schema({
  symbol: {type: String, require: true},
  date: {type: Date, require: true},
  open: {type: Number, require: true},
  high: {type: Number, require: true},
  low: {type: Number, require: true},
  close: {type: Number, require: true},
  volume: {type: Number, require: true},
}, {
    timestamps: true,
});

const StockData = mongoose.model('StockData', stockDataSchema);
module.exports = StockData;