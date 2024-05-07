// build your `Resource` model here
const db= require('../../data/dbConfig')

async function get(){
    return db('resources')
}

async function getName(resourceName) {
    const resource = await db('resources').where({ resource_name: resourceName }).first();
    return resource;
 }

 
async function insert(resource){
    const [resource_id] = await db("resources").insert(resource)
    const newResource = await db("resources").where({resource_id}).first()
    return newResource
}
module.exports = {
    get,
    insert, 
    getName
}