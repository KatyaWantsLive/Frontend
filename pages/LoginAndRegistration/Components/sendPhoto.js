const axios = require('axios');
const FormData = require('form-data');
import fs from 'fs';

const formData = new FormData();
formData.append('image', fs.createReadStream('../Main/Components/camera.png'));

const SendPhoto = () => {
    axios({
    method: 'post',
    url: 'https://jhdg-kjhdghj.onrender.com/location/define',
    location_photo: formData,
    headers: formData.getHeaders()
    })
    .then(function (response) {
    //handle success
    console.log(response);
    })
    .catch(function (response) {
    //handle error
    console.log(response);
    });
}

export default SendPhoto
