module.exports = function (app) {

    // https://www.npmjs.com/package/swagger-autogen#schema-and-definitions
    // Quando utilizando as annotations do swagger e executarmos o autogen
    // é adiciono de forma automatica no arquivo swagger_output.json as informacoes.

    //endpoint get
    app.get('/users/:id', (req, res) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para obter um usuário.'
        // #swagger.parameters['id'] = { description: 'ID do usuário.' }

        /* #swagger.parameters['filtro'] = {
               description: 'Um filtro qualquer.',
               type: 'string'
        } */
        const filtro = req.query.filtro

        if (false) {
            return  res.status(404).send(false)
            /* #swagger.responses[200] = {
                   schema: { $ref: "#/definitions/User" },
                   description: 'Usuário encontrado.'
            } */
        }
        return res.status(200).send(data)
    })
}