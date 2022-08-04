


const productModel = require('./Product_model')

const get = async () => {
    //select id,name from products
    const items = await productModel.find({})
    return items;
}

const getById = async (id) => {
    // select from products where id = id
    // const product = products.find(product => product._id == id);
    // return product;
    return await productModel.findById(id)
                                .populate('category');
}

const insert = async (product) => {
    // insert into products (name,price,image,category)
    // values (product.name,product.price,product.image,product.category)
    // const p = {
    //     name: product.name,
    //     price: product.price,
    //     quantity: product.quantity,
    //     image: product.image,
    //     category: product.category,
    // }
    // products.push(p);


    const p = new productModel(product);
    await p.save();
}

const update = async (id, product) => {
    // const p = products.find(p => p._id.toString() == id.toString());
    // p.name = product.name;
    // p.price = product.price;
    // p.quantity = product.quantity;
    // p.image = product.image ? product.image : p.image;
    // p.category = product.category;

    if (!product.image) {
        delete product.image;
    }
    await productModel.findByIdAndUpdate(id, product);
}

const remove = async (id) => {
    // products = products.filter(p => p._id.toString() != id.toString());
    await productModel.findByIdAndDelete(id);
}


module.exports = { get, getById, insert, update, remove }




var products = [{
    "_id": 1,
    "name": "Agivu",
    "price": 31,
    "quantity": 37,
    "category": 10,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 2,
    "name": "Skinix",
    "price": 7,
    "quantity": 62,
    "category": 9,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 3,
    "name": "Dabjam",
    "price": 14,
    "quantity": 8,
    "category": 19,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 4,
    "name": "Cogibox",
    "price": 33,
    "quantity": 67,
    "category": 12,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 5,
    "name": "Eamia",
    "price": 66,
    "quantity": 62,
    "category": 17,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 6,
    "name": "Devify",
    "price": 59,
    "quantity": 79,
    "category": 11,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 7,
    "name": "Yacero",
    "price": 61,
    "quantity": 62,
    "category": 2,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 8,
    "name": "Yacero",
    "price": 49,
    "quantity": 57,
    "category": 1,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 9,
    "name": "Dabshots",
    "price": 52,
    "quantity": 33,
    "category": 6,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 10,
    "name": "Skyvu",
    "price": 83,
    "quantity": 16,
    "category": 10,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 11,
    "name": "Yata",
    "price": 90,
    "quantity": 30,
    "category": 4,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 12,
    "name": "Meetz",
    "price": 53,
    "quantity": 97,
    "category": 18,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 13,
    "name": "Midel",
    "price": 99,
    "quantity": 10,
    "category": 10,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 14,
    "name": "Demizz",
    "price": 23,
    "quantity": 12,
    "category": 10,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 15,
    "name": "Browsecat",
    "price": 20,
    "quantity": 66,
    "category": 4,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 16,
    "name": "Browsecat",
    "price": 14,
    "quantity": 3,
    "category": 20,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 17,
    "name": "Blogtag",
    "price": 22,
    "quantity": 76,
    "category": 19,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 18,
    "name": "Jetpulse",
    "price": 27,
    "quantity": 5,
    "category": 1,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 19,
    "name": "Realblab",
    "price": 12,
    "quantity": 49,
    "category": 11,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}, {
    "_id": 20,
    "name": "Babblestorm",
    "price": 3,
    "quantity": 12,
    "category": 16,
    "image": "https://cdn.tgdd.vn/Products/Images/7264/201664/citizen-em0643-84x-1-4-org.jpg"
}]