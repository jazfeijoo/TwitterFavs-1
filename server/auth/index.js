const router = require('express').Router()
const { models: {User }} = require('../db')
module.exports = router

const client = require('../routes/api.route')

router.post('/login', async (req, res, next) => {
    console.log('reached the api route...! BODY:', req.body)
  try {
    res.send({ token: await User.authenticate(req.body)}); 
  } catch (err) {
    next(err)
  }
})


router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.send({token: await user.generateToken()})
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.put('/:userId/:authorId', async (req, res, next) => {
try {
  const user = await User.findByPk(req.params.userId)
  const author = await client.get(`/users/lookup`, {id: authorId})
  console.log('USER:', user, 'AUTHOR', author)
} catch (err) {
  next(err)
}
})

router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
})

router.get('/', async (req, res, next) => {
    try {
      res.send(await User.findAll({
        attributes: ["id", "username", "name"],
      }))
    } catch (ex) {
        next(ex)
    }
  })