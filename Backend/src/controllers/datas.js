const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const { Data } = require('../models');
const { Readable } = require('stream');
const readline = require('readline');

module.exports = {
    createData: async (req, res) => {
        const { dataNotificacao, dataPrimSintomas, dataTeste, dataObito, dataNascimento, faixaEtaria, sexo, cor, bairro, cidade, unidadeSaude, tipoTeste, dorGarganta, dispneia, febre, tosse, uti } = req.body;
        console.log('Create Data')

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
    createCsvData: async (req, res) => {
        const { file } = req;
        const { buffer } = file;

        const readableFile = new Readable();
        readableFile.push(buffer)
        readableFile.push(null)

        const covidLine = readline.createInterface({
            input: readableFile
        })

        const arrayData = []
        let first = true
        for await (let line of covidLine) {
            if (first) {
                first = false
                continue
            }

            const lineSplit = line.split(',')
            const dataNotificacao = new Date(lineSplit[0])
            const dataPrimSintomas = new Date(lineSplit[1])
            const dataTeste = new Date(lineSplit[2])
            const dataNascimento = new Date(lineSplit[3])

            arrayData.push({
                id: uuidv4(),
                dataNotificacao,
                dataPrimSintomas,
                dataTeste,
                dataNascimento,
                faixaEtaria: lineSplit[4],
                sexo: lineSplit[5],
                cor: lineSplit[6],
                bairro: lineSplit[7],
                cidade: lineSplit[8],
                unidadeSaude: lineSplit[9],
                tipoTeste: lineSplit[10],
                dorGarganta: lineSplit[11],
                dispneia: lineSplit[12],
                febre: lineSplit[13],
                tosse: lineSplit[14],
                uti: lineSplit[15],
                dataObito: lineSplit[16],
            })
        }

        console.log('Data received')

        try {
            const covidDatas = await Data.bulkCreate(arrayData)

            console.log('Success!')

            return res.status(200).json(covidDatas)
        } catch (err) {
            console.log('CSV data error ' + err)
            return res.status(500).json({ err: err.message })
        }
    },
    getData: async (req, res) => {
        const datas = await Data.findAll();

        return res.status(200).json({ datas });
    },
};
