const deteleById = async (collection) => {
  const dataRes = collection.deleteOne({ id: 4 });
  return dataRes;
};

module.exports = { deteleById };
