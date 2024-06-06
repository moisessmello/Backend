const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
        dataNascimento: {
            type: Date,
            required: true
        },
        dataContratacao: {
            type: Date,
            required: true
        },
        genero: {
            type: String,
            required: true
        },
        endereco: {
            cep: String,
            uf: String,
            logradouro: String,
            localidade: String,
            bairro: String,
            numero: String,
            complemento: String
        },
        registroProfissional: {
            type: String,
            required: true
        },
        cargo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cargo',
            required: false
        },
        
    },
    {
        timestamps: true
    }
)

const Funcionario = mongoose.model('funcionario', schema)

module.exports = Funcionario