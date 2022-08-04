


const productService = require('./Product_service');
const categorySevice = require('../categories/Category_service')

const get = async () => {
    return await productService.get();
}

const getById = async (id) => {
    const product = await productService.getById(id);
    let categories = await categorySevice.get();
    categories = categories.map(category => {
        let c = {
            _id: category._id,
            name: category.name,
            description: category.description,
            isSelected : false
        }
        // category = { ...category, isSelected: false };
        if (product.category.toString() == c._id.toString()) {
            c.isSelected = true;
        }
        return c;
    })
    return { product, categories };
}

const insert = async (product) => {
    await productService.insert(product);
}

const update = async (id, product) => {
    await productService.update(id, product);
}

const remove = async (id) => {
    await productService.remove(id);
}


module.exports = { get, getById, insert, update, remove }