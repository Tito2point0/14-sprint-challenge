
















// build your `/api/tasks` router here
const router= require('express').Router()
const Task = require('./model')
const validateTasks = require('./middleware')

router.get('/', async (req, res, next) => {
    try {
      const getTasks = await Task.get();
      res.status(200).json(getTasks);
    } catch (error) {
      next(error);
    }
  });

  router.post('/', validateTasks, async (req, res, next) => {
    try{
        const newTask = await Task.insert(req.body) 
        res.status(200).json(newTask)
    }catch(error){
        next(error)
    }
  })
  
module.exports= router