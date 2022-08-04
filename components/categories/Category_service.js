

const categoryModel = require('./Category_model')

const get = async () => {
  return await categoryModel.find({});
}

module.exports = { get }






var categories = [{
    "_id": 1,
    "name": "Lionello",
    "category": "Crichton"
  }, {
    "_id": 2,
    "name": "Herschel",
    "category": "De Dei"
  }, {
    "_id": 3,
    "name": "Kipp",
    "category": "Figura"
  }, {
    "_id": 4,
    "name": "Gretna",
    "category": "Imesson"
  }, {
    "_id": 5,
    "name": "Sterling",
    "category": "Eriksson"
  }, {
    "_id": 6,
    "name": "Johnnie",
    "category": "Di Biasi"
  }, {
    "_id": 7,
    "name": "Freda",
    "category": "Kernermann"
  }, {
    "_id": 8,
    "name": "Boone",
    "category": "Ambroz"
  }, {
    "_id": 9,
    "name": "Kristen",
    "category": "Maurice"
  }, {
    "_id": 10,
    "name": "Georgiana",
    "category": "Beeck"
  }, {
    "_id": 11,
    "name": "Thedrick",
    "category": "Hapke"
  }, {
    "_id": 12,
    "name": "Tuck",
    "category": "Haselup"
  }, {
    "_id": 13,
    "name": "Zorine",
    "category": "Abba"
  }, {
    "_id": 14,
    "name": "Prue",
    "category": "Izac"
  }, {
    "_id": 15,
    "name": "Giffie",
    "category": "Stieger"
  }, {
    "_id": 16,
    "name": "Saunder",
    "category": "Howsego"
  }, {
    "_id": 17,
    "name": "Mariel",
    "category": "Gethyn"
  }, {
    "_id": 18,
    "name": "Kellby",
    "category": "Genthner"
  }, {
    "_id": 19,
    "name": "Waverley",
    "category": "Altree"
  }, {
    "_id": 20,
    "name": "Rubin",
    "category": "Kerrich"
  }]