const express = require ('express');
const bodyParser = require ("body-parser");
const app     = express();
const port    = 8080;

app.use(bodyParser.urlencoded ({extended: false})); 

app.get('/', (req, res) => {
    res.send('Selamat Datang');
});
app.listen(port, () => {
    console.log('Koneksi');
});
app.get('/orang/:nama', (req, res) => {
    var namaorang = req.params.nama;
    res.end('Siswa : ' + namaorang);
});
app.post('/orang', (req, res) => {
    var namaorang = req.body.nama;
    var alamat = req.body.alamat;
    res.end('Baru, atas nama: ' + namaorang +' ' + 'alamat :'+' ' + alamat);
});
app.delete('/orang/:id', (req, res) => {
    var id = req.params.id;
    var namaorang = req.body.nama;
    res.end('ID'+id+'dihapus : ' + namaorang);
});
app.put('/orang/:id', (req, res) => {
    var id = req.params.id;
    var namaorang = req.body.nama;
    var alamat = req.body.alamat;
    res.end(id+'telah diupdate');
});