const app = require('express')()
const http = require('http')
const swaggerUi = require('swagger-ui-express') //import swagger-ui-express
const swaggerFile = require('./swagger_output.json') //arquivo que o swagger-autogen gera.

http.createServer(app).listen(3000) //Server Start
console.log("Listening at:http://localhost:%s/ (HTTP)", 3000)


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile)) //middleware responsável por criar a  interface gráfica do Swagger
console.log("Doc at:http://localhost:%s/doc (HTTP)", 3000)

require('./endpoints')(app) //file contendo os endpoints