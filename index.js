const app = require('express')()

app.all('/', (req, res) =>{
    res.send('Hola desde Linode!!')
})

app.listen(5000, () => {
    console.log(`Server started on port: 5000`)
})