const express = require('express');
const router = express.Router();
const yahooFinance = require('yahoo-finance');
const stockDAO = require('../doa/stockDAO');

router.get('/fetch/:symbol', async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const fromDate = '2023-09-01';
    const toDate = '2023-09-01';

    yahooFinance.historical(
      {
        symbol: symbol,
        from: fromDate,
        to: toDate,
        period: 'm',
      },
      async (err, quotes) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          
          await stockDAO.insertStockData(quotes);

          res.json(quotes);
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const stocks = await stockDAO.getAllStockData();
    res.json(stocks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
