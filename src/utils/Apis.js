// const host = 'localhost';
const protocol = 'http';
const host = '192.168.43.16';
const port = '7777';
const baseLink = '/api/v1/imagestore/';

const links = {
    list: protocol+"://"+host+":"+port+baseLink+"list",
    add: protocol+"://"+host+":"+port+baseLink+"add",
    update: protocol+"://"+host+":"+port+baseLink+"update?id=",
    findById: protocol+"://"+host+":"+port+baseLink+"findById?id=",
    deleteImage: protocol+"://"+host+":"+port+baseLink+"delete?id=",
    deleteAll: protocol+"://"+host+":"+port+baseLink+"deleteAll",
    image: protocol+"://"+host+":"+port+baseLink+"images"
} 

module.exports = { links, protocol, host, port, baseLink };