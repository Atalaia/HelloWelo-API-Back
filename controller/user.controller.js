const User = require('../models/').User;
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/checkAuth');
const bcrypt = require('bcrypt');

/**
 * Affiche la liste des utilisateurs
 */
exports.user_list = (req, res, next) => {
    User.findAll({})
      .then(User => {
        res.json(User)
      })
      .catch(error => {
        res.status(400);
        res.json({ message: 'There is nothing here...' })
      })
  }

/**
 * Affiche les détails d'un utilisateur
 */
exports.user_detail = (req, res, next) => {
    const id = req.params.id;
    User.findByPk(id)
      .then(User => {
        res.json(User)
      })
      .catch(error => {
        res.status(400);
        res.json({ message: 'There is nothing here...' })
      })
  }

/**
 * Enregistrer un utilisateur
 */
exports.user_signin = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      const newUser = Object.assign(req.body, { password: hash })
      let email = req.body.email;
      User.findAll({
        where: {
          email: email
        }
      })
  
        .then(user => {
          if (user.length !== 0) {
            return res.status(409).json({ message: "Ce mail est deja utilisé, essaie encore" });
          }
        })
      User.create(newUser)
        .then(user => {
          res.json(user);
        })
        .catch(error => {
          res.status(400);
          res.json(error);
        })
    })
  }

/**
 * Pour se connecter
 */
exports.user_login = (req, res, next) => {
    User.findOne({ where: {email: req.body.email} })
      .then(User => {
        if (User) {
          verifyPassword(User, req, res);
        }
        else {
          res.json({ message: "Mauvais email ou password" })
        }
      })
      .catch(error => {
        res.status(500).json(error);
      })
  }

/**
 * Fonction pour vérifier le mot de passe
 */
const verifyPassword = (User, req, res) => {
    bcrypt.compare(req.body.password, User.password, (err, result) => {
      if (err) return res.status(500).json(err)
      else {
        if (result) return getToken(User, res)
        else return res.json({ message: "You fail" });
      }
    })
  }

/**
 * Fonction pour obtenir le Token
 */
const getToken = (User, res) => {
    const token = jwt.sign({ email: User.email, userId: User._id }, process.env.JWT_KEY, { expiresIn: "2h" })
    res.json({
      message: "You win - auth ok",
      User,
      token: token
    })
  }