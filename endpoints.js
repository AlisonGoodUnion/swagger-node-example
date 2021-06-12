module.exports = function (app) {
    //endpoint get
    app.get('/users/:id', (req, res) => {
        const filtro = req.query.filtro
        return res.status(404).send(false)
    })
}