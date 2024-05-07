exports.seed = async function (knex) {
  await knex("tasks").del();
  await knex("tasks").insert([
    {
      task_description: "create a website from scratch",
      task_notes:"almost done",
      task_completed: false,
      project_id:2
    },
    {
      
      task_description: "restudy the basics of coding",
      task_notes:"need to start from sprint 6 to sprint 15",
      task_completed: true,
      project_id:1
    }, 
    {
     
      task_description: "get medicine",
      task_notes:"need to go to a new pharmacy to get the discounts =)",
      task_completed: false,
      project_id:3
    },
  ]);
};