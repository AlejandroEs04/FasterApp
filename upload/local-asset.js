require('dotenv').config()

const cloudinary = require('cloudinary').v2

console.log(cloudinary.config().cloud_name)

cloudinary.uploader
    .upload('./assets/images/b.png', {
        resource_type: 'image',
    })
    .then((result) => {
        console.log("sucess", JSON.stringify(result, null, 2))
    })
    .catch((error) => {
        console.log("error", JSON.stringify(error, null, 2))
    })