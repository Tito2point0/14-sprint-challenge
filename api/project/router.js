// build your `/api/projects` router here
const router = require("express").Router();
const Projects= require('./model.js')

router.get("/", (req, res, next) => {
  Projects.getProjects()
  .then(project =>{  
      res.status(200).json(project);
    
  })
  .catch(next)

});



router.post("/", async (req, res, next) => {
  try {
    const newPost = await Projects.insertProject(req.body);

    if (!newPost) {
      return res.status(400).json({ message: 'Missing project_name' });
    }
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
});

module.exports = router;