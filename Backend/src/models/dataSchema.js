module.exports = (sequelize, DataTypes) => {
    const Data = sequelize.define(
        'Data',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            dataNotificacao: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            dataPrimSintomas: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            dataTeste: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            dataObito: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dataNascimento: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            faixaEtaria: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sexo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cor: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            bairro: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cidade: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            unidadeSaude: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tipoTeste: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dorGarganta: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dispneia: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            febre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tosse: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            uti: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            timestamps: false, /* cria colunas updatedAt e createdAt */
        },
    );

    return Data;
};