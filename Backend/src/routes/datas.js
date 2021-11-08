const { Router } = require('express');

/* controllers */
const { createData, getData } = require('../controllers/datas');

/* validation */
const { createDataValidator } = require('../middlewares/dataValidation');

const dataRouter = Router();

dataRouter
    .get('/', getData) /* vai buscar os dados */
    .post('/', createDataValidator, createData) /* vai criar um caso com base no form */

module.exports = dataRouter;
