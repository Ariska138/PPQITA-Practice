const { editNamaData } = require('../gateways/memory-storage-gateway');

const ubahDataUserHandler = (req, res) => {
  let name = req.body.name;
  let id = req.body.id;

  editNamaData(id, name);

  res.send({ error: false, message: 'success' });
};

module.exports = { ubahDataUserHandler };
