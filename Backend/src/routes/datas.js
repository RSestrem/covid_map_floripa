/* router from express */
const { Router } = require('express');

/* controllers */
const { createData, getData, createCsvData } = require('../controllers/datas');

/* validation */
const { createDataValidator } = require('../middlewares/dataValidation');

const dataRouter = Router();
const multer = require('multer');
const multerConfig = multer();

dataRouter
    .get('/', getData) /* vai buscar os dados */
    .post('/', createDataValidator, createData) /* vai criar um caso com base no form */
    .post('/file', multer(multerConfig).single('file'), createCsvData) /* carrega os dados de um arquivo */

module.exports = dataRouter;
