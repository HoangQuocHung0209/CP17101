

const categorySevice = require('./Category_service');

const get = async () => {
    return await categorySevice.get();
}

module.exports = { get };