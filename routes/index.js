const express = require('express');
const router = express.Router();
const needle = require('needle');

// Env Variables
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

router.get('/', async (req, res) => {
  try {
    // make the request and put the response in apiRes
    const apiRes = await needle('get', `${API_BASE_URL}`);
    const data = apiRes.body;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
    // console.log(error);
  }
});

module.exports = router;
