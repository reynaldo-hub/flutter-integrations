const axios = require('axios');
const config = require('../config.json');
const Person = require('../models/user');

const APIIURL = `${config.RandomUserUrl}`;

const getRandomUser = async (request, response) => {
  try {
    const res = await axios.get(APIIURL);

    const { data: { results: [{ name: { first: firstName, last: lastName }, picture: { large: picture } }] } } = res;
    const person = new Person(firstName, lastName, picture);
    response.status(200).json(person);
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = getRandomUser;
