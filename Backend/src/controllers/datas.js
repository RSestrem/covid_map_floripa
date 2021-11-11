const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const { Data } = require('../models');

module.exports = {
    createData: async (req, res) => {
        console.log('Create Data')
        const { dataNotificacao, dataPrimSintomas, dataTeste, dataObito, dataNascimento, faixaEtaria, sexo, cor, bairro, cidade, unidadeSaude, tipoTeste, dorGarganta, dispneia, febre, tosse, uti } = req.body;

        /* Data Validation */
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(401).json({ ValidationErrors: errors.array() });

        /* user creation */
        try {
            const covidData = await Data.create(
                {
                    id: uuidv4(),
                    dataNotificacao,
                    dataPrimSintomas,
                    dataTeste,
                    dataNascimento,
                    faixaEtaria,
                    sexo,
                    cor,
                    bairro,
                    cidade,
                    unidadeSaude,
                    tipoTeste,
                    dorGarganta,
                    dispneia,
                    febre,
                    tosse,
                    uti,
                    dataObito,
                },
            );
            return res.status(201).json({ covidData });
        } catch (erro) {
            return res.status(500).json({ UncaughtError: erro.message });
        }
    },
    getData: async (req, res) => {
        const datas = await Data.findAll();

        return res.status(200).json({ datas });
    },
};
