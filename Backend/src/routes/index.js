const { Router, Router } = require('express');

/* importação de rotas */
const datasRouter = require('./datas.js');

const router = Router();

/* router */
router
    .use('/data', datasRouter) /* verificar essa rota se bate com o que foi implementado no front */

module.exports = router;
