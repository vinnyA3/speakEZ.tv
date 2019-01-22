const fs = require('fs').promises;
const path = require('path');
const data = path.join(__dirname, '../../../data/messages.json');

const getMessages = () => fs.readFile(data).then(data => JSON.parse(data));

module.exports = {
  getMessages,
};
