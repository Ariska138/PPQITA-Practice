const { createData } = require('../crud/CrudObjects');

let dataMemory = [];

const savingData = (name, age) => {
  dataMemory = createData(dataMemory, { name, age });
};

const showAllData = () => {
  return dataMemory;
};

module.exports = { savingData, showAllData };
