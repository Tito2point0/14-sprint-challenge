exports.seed = async function (knex) {
  await knex("resources").del();
  await knex("resources").insert([
    {
      resource_name: "google",
      resource_description: "searches for coding tips and tricks",
    },
    {
      resource_name: "instagram",
      resource_description: "helps connect individuals",
    },
    {
      resource_name: "youtube",
      resource_description: "practice and inovate existing project ideas",
    },
  ]);
};