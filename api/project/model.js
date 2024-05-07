// build your `Project` model here
const db = require("../../data/dbConfig.js");

async function getProjects() {
  const rows = await db("projects");
  const result = rows.map((project) => {
    return {
      ...project,
      project_completed: project.project_completed ? true : false,
    };
  });
  return result;
}

async function insertProject(project) {
    const [project_id] = await db("projects").insert(project);
    const newProject = await db("projects").where({ project_id }).first();
  
    if (!newProject) {
      return null; 
    }
    newProject.project_completed = newProject.project_completed ? true : false;
  
    return newProject;
  }
  
module.exports = {
  getProjects,
  insertProject,
};