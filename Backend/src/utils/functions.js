const { User } = require('../models');

module.exports = {
    isOnlyLetters: async (name) => {
        const arrayName = name.trim().split(' ');
        let isCorrect = true;
        await Array.prototype.forEach.call(arrayName, (word) => {
            if (word.search(/[^A-zÁ-ù]/) !== -1) { isCorrect =  false; }
        });
        return isCorrect;
    },
};

/* vai verificar se a string informada possui somente letras */
