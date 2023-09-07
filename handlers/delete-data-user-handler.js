const { removeData } = require('../gateways/memory-storage-gateway');

const deleteDataUserHandler = (req, res) => {
  const id = req.body.id;

  removeData(id);

  res.send({ error: false, messaeg: 'berhasil' });
};

module.exports = { deleteDataUserHandler };
