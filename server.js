import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
//const express = require('express');
//const path = require('path');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
