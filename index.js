// JWT
require("dotenv-safe").config();
const cors = require('cors');


const express = require('express');
const { produto } = require('./models');

const app = express();

app.set('view engine', 'ejs');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use(cookieParser());

// app.get('/autenticar', async function (req, res) {
//   res.render('autenticar');
// })


app.get('/', async function (req, res) {
  const produtos = await produto.findAll()
  res.json(produtos);
})

app.get('/cadastrar', async function (req, res) {
  res.render("cadastrar");
})

app.post('/cadastra', async function (req, res) {
    const produto_ = await produto.create(req.body)
  res.json(produto_)

})

// app.post('/logar', async (req, res) => {
//   const {senha} = req.body
//   console.log(await usuario.findAll())
//   const usuarios = await usuario.findOne({ where: { usuario: req.body.usuario } })
//   console.log(usuarios)
//   const senhaDecrypt = decrypt(usuarios.senha);
//   if (req.body.usuario === usuarios.usuario && senha === senhaDecrypt) {
//     const id = 1;
//     const token = jwt.sign({ id }, process.env.SECRET, {
//       expiresIn: 3600 // expires in 5min
//     });

//     res.cookie('token', token, { httpOnly: true });
//     return res.json({ auth: true, token: token });
//   }

//   res.status(500).json({ message: 'Login inválido!' });
// })

// app.post('/deslogar', function (req, res) {
//   res.cookie('token', null, { httpOnly: true });
//   res.json({ deslogado: true })
// })

// app.get('/sobre', function (req, res) {
//   res.cookie('token', null, { httpOnly: true });
//   res.json({ sobre: true })
// })

app.listen(3100, function () {
  console.log('App de Exemplo escutando na porta 3100!')
});