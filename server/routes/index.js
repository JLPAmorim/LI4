// Roteador do servidor API
var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Listar todos os utilizadores
router.get('/user', (req, res, next) => {
  let token = req.headers.token;
  jwt.verify(token, 'secretkey', (error, decoded) =>{
    if (error) return res.status(401).json({
      title: 'Unauthorized'
    })
    UserModel.findOne({ _id: decoded.userId }, (error, user) => {
      if (error) return console.log(error)
      return res.status(200).json({
        title: 'User Grabbed',
        user:{
          _id: user._id,
          name: user.name,
          email: user.email,
          balance: user.balance,
          currentCoin: user.currentCoin,
          balance_history: user.balance_history
        }
      })
    })
  })
});

// Registar um user
router.post('/user', function(req, res){
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  }
   
  User.regista(newUser)
    .then(dados => res.status(201).jsonp({dados: dados}))
    .catch(e => res.status(500).jsonp({error: 'Email in use'}))
})

// Efetuar Login de um user
router.post('/login', (req,res, next) =>{
  UserModel.findOne({ email: req.body.email }, (err, user) =>{
    if(err) return res.status(500).json({
      title: 'Server error',
      error: err
    })
    if(!user) {
      return res.status(401).json({
        title: 'User not found',
        error: 'Invalid Credentials'
      })
    }
    if(!bcrypt.compareSync(req.body.password, user.password)){
      return res.status(401).json({
        title: 'Login failed',
        error: 'Invalid Credentials'
      })
    }
    let token = jwt.sign({userId: user._id}, 'secretkey');
    return res.status(201).json({
      title: 'Login successful',
      token: token
    })
  })
})

// Editar um user

// Editar um user
router.put('/user', function(req, res){
  UserModel.findOne({ _id: req.body._id }, (err, user) =>{
    if(req.body.password!=null){
      console.log('A mudar password')
      if(bcrypt.compareSync(req.body.oldPassword, user.password)){
        console.log('Password igual à antiga')
        const editUser={
          _id: req.body._id,
          password: bcrypt.hashSync(req.body.password, 10)
        }
        console.log(editUser)
        User.alterar(editUser)
        .then(dados => res.status(201).jsonp({dados: dados}))
        .catch(e => res.status(500).jsonp({error: e}))
      }
    }else{
      console.log(req.body)
      User.alterar(req.body)
        .then(dados => res.status(201).jsonp({dados: dados}))
        .catch(e => res.status(500).jsonp({error: e}))
    }
    
  })
  
  /**/
})

router.post('/evento', function(req, res){
  const newEvento = {
    sport: req.body.sport,
    team1: req.body.team1,
    team2: req.body.team2,
    type: 'Full time',
    result_odd: {
      home: req.body.home,
      tie: req.body.tie,
      away: req.body.away
    },
    state: req.body.state
  }
  Event.inserir(newEvento)
    .then(dados => res.status(201).jsonp({dados: dados}))
    .catch(e => res.status(500).jsonp({error: 'erro'}))
})


module.exports = router;