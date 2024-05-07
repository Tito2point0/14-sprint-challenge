// build your `/api/resources` router here

const Resource = require('./model')
const { validateName }= require('./middleware')
const router= require('express').Router()


router.get('/', async (req, res, next) => {
    try {
      const data = await Resource.get();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });
  

router.post('/', validateName, async (req, res, next) => {
const newData = await Resource.insert(req.body)
    try {
        res.status(201).json(newData)
    } catch (error) {
        next(error);
    }
});


module.exports= router