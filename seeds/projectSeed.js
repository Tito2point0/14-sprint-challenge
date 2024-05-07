exports.seed = async function (knex) {
  await knex("projects").del();
  await knex("projects").insert([
    {
      project_name: "website for pokemon",
      project_description: "review how to incorporate react for interactivity and knex for databases",
      project_completed: true,
    },
    {
      project_name: "become a profiecient boxer",
      project_description: "start practicing combinations and footwork",  
      project_completed: false,
    }, 
    {
      project_name: "beat elden ring",
      project_description: "practice and master dodging and boss timing",
      project_completed: true,
    },
  ]);
};