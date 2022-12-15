const ENGINE_DB = process.env.ENGINE_DB

const pathModels = (ENGINE_DB ==='nosql')? './nosql' : './postgres';

const models ={
    usersModel: require(`${pathModels}/users`),
    storageModel: require(`${pathModels}/storage`),
    tracksModel: require(`${pathModels}/tracks`)
}

module.exports = models;