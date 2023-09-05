const express = require('express');
const yahooFinance = require('yahoo-finance');
const cors = require('cors');
const mongoose = require('mongoose');
const stockRoutes = require('./routes/StockRoutes'); // Import the Mongoose model

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client', 'build')));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true,  useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/stocks', stockRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});










// Define a route to fetch minute-wise stock data and save it to MongoDB
// app.get('/api/stock/:symbol', (req, res) => {
//   const symbol = req.params.symbol;

//   // Fetch minute-wise stock data using yahoo-finance
//   yahooFinance.historical(
//     {
//       symbol: symbol,
//       from: '2023-09-01',
//       to: '2023-09-01',
//       period: 'm',
//     },
//     (err, quotes) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal server error' });
//       } else {
//         // Save the data to MongoDB
//         StockData.insertMany(
//           quotes.map((quote) => ({
//             symbol: quote.symbol,
//             date: quote.date,
//             open: quote.open,
//             high: quote.high,
//             low: quote.low,
//             close: quote.close,
//             volume: quote.volume,
//           })),
//           (insertErr) => {
//             if (insertErr) {
//               console.error(insertErr);
//               res.status(500).json({ error: 'Failed to save data to MongoDB' });
//             } else {
//               res.json(quotes);
//             }
//           }
//         );
//       }
//     }
//   );
// });