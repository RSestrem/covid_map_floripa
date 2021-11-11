const { check } = require('express-validator');
const { isOnlyLetters } = require('../utils/functions');

module.exports = {
    createDataValidator: [
        /* verifica se é data */
        check('dataNotificacao')
            .notEmpty()
            .withMessage('Data de notificacao cannot be empty')
            .bail()
            .toDate()
            .isISO8601()
            .withMessage('Data de notificacao deve ser em formato data'),

        check('dataPrimSintomas')
            .notEmpty()
            .withMessage('Data de primeiros sintomas cannot be empty')
            .bail()
            .toDate()
            .isISO8601()
            .withMessage('Data de primeiros sintomas deve ser em formato data'),

        check('dataTeste')
            .notEmpty()
            .withMessage('Data de teste cannot be empty')
            .bail()
            .toDate()
            .isISO8601()
            .withMessage('Data de teste deve ser em formato data'),

        /* verifica se houve óbito */
        check('dataObito')
            .notEmpty()
            .withMessage('Data de obito cannot be empty')
            .bail()
            .isIn(['sim', 'nao'])
            .withMessage('Data de obito deve ser sim ou não'),

        check('dataNascimento')
            .notEmpty()
            .withMessage('Data de nascimento cannot be empty')
            .bail()
            .toDate()
            .isISO8601()
            .withMessage('Data de nascimento deve ser em formato data'),

        /* verifica se cidade contém somente letras */
        check('cidade')
            .notEmpty()
            .withMessage('Cidade cannot be empty')
            .bail()
            .custom(async (value) => {
                if (!await isOnlyLetters(value)) { throw new Error('Cidade só pode conter letras'); }
            }),
        
        /* bairro somente letras */
        check('bairro')
            .notEmpty()
            .withMessage('Bairro cannot be empty')
            .bail()
            .custom(async (value) => {
                if (!await isOnlyLetters(value)) { throw new Error('Bairro só pode conter letras'); }
            }),

        check('cor')
            .notEmpty()
            .withMessage('Cor cannot be empty')
            .bail()
            .custom(async (value) => {
                if (!await isOnlyLetters(value)) { throw new Error('Cor só pode conter letras'); }
            }),

        check('unidadeSaude')
            .notEmpty()
            .withMessage('Unidade de Saúde cannot be empty')
            .bail()
            .custom(async (value) => {
                if (!await isOnlyLetters(value)) { throw new Error('Unidade de Saúde só pode conter letras'); }
            }),

        check('tipoTeste')
            .notEmpty()
            .withMessage('Tipo de teste cannot be empty')
            .bail()
            .isIn(['rt-pcr', 'rapido', 'soro']),

        check('faixaEtaria')
            .notEmpty()
            .withMessage('Faixa etária cannot be empty')
            .bail()
            .isIn(['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90-99', '100+'])
            .withMessage('Faixa etaria deve estar entre 0 e 100'),
        
        /* sexo */
        check('sexo')
            .notEmpty()
            .withMessage('Sexo cannot be empty')
            .bail()
            .isIn(['M', 'F', 'N']),
        
        check('dorGarganta')
            .notEmpty()
            .withMessage('Dor de garganta cannot be empty')
            .bail()
            .isIn(['sim', 'nao'])
            .withMessage('Dor de garganta deve ser sim ou não'),
        
        check('dispneia')
            .notEmpty()
            .withMessage('Dispneia cannot be empty')
            .bail()
            .isIn(['sim', 'nao'])
            .withMessage('Dispneia deve ser sim ou não'),
        
        check('febre')
            .notEmpty()
            .withMessage('Febre cannot be empty')
            .bail()
            .isIn(['sim', 'nao'])
            .withMessage('Febre deve ser sim ou não'),
        
        check('uti')
            .notEmpty()
            .withMessage('UTI cannot be empty')
            .bail()
            .isIn(['sim', 'nao'])
            .withMessage('UTI deve ser sim ou não'),

        check('tosse')
            .notEmpty()
            .withMessage('Tosse cannot be empty')
            .bail()
            .isIn(['sim', 'nao'])
            .withMessage('Tosse deve ser sim ou não'),
    ]
}
