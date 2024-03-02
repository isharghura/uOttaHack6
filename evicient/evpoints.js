import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const lat = 45.424159;
const long = -75.686951;
const radius = 5;
const token = process.env.api_key;

const url = `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${token}&country=CA&latitude=${lat}&longitude=${long}&radius=${radius}&fuel_type=ELEC`;

axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error.response.data);
    });
