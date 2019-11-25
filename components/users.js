const axios = require('axios');
const config = require('../config.json');
const Person = require('../models/user');

const APIIURL = `${config.RandomUserUrl}api/`;

const getRandomUser = (request, response) => axios.get(APIIURL)
  .then((resp) => {
    const { data: { results: [{ name: { first: firstName, last: lastName }, picture: { large: picture } }] } } = resp;
    const person = new Person(firstName, lastName, picture);

    response.status(200).json(person);
  })
  .catch((error) => {
    response.status(500).send(error);
  });

module.exports = getRandomUser;
