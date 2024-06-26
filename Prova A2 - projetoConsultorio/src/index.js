const express = require('express')
const app = express()
const PORT = 3000

const DBconnection = require('./database/connection')
DBconnection()

app.use(express.json())



const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)

const { checarToken } = require('./validators/AutenticacaoValidator')

const routes = require('./routes/routes')
app.use("/", checarToken, routes)

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})
/*
- agora vou fazer os controles de cada modelo,-
-depois de controllers,- 
-vou exportar para as minhas rotas,-
-depois das rotas vou exportar pro index,- 

depois de tudo acima funcionando, crio os validators com a biblioteca yup,


por ultimo faço a autenticação


*/