async function validateTask(req, res, next) {
    const { task_description, project_id } = req.body;
  
    try {
      if (!task_description) {
        throw { status: 400, message: 'Task must have a description.' };
      }
  
      // Check if project_id is present and is a valid positive integer
      if (!project_id || isNaN(project_id) || parseInt(project_id) <= 0) {
        throw { status: 400, message: 'Task must have a valid positive integer project_id.' };
      }
  
      next();
    } catch (error) {
      next(error);
    }
  }
  
  module.exports = validateTask;
  