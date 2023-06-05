const host = 'localhost';
const post = '7777';
const baseLink = '/api/v1/imagestore/';

const ImageApis = {
    list: host+":"+post+baseLink+"list",
    add: host+":"+post+baseLink+"add",
    update: host+":"+post+baseLink+"update?id=",
    findById: host+":"+post+baseLink+"findById?id=",
    deleteImage: host+":"+post+baseLink+"delete?id=",
    deleteAll: host+":"+post+baseLink+"deleteAll",
    image: host+":"+post+baseLink+"images"
} 

module.exports = ImageApis;