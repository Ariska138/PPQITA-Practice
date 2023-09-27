const updateById = async (collection) => {
  // bagaimana mengubah daftar siswa dengan id 3 yg memiliki nama bambang diubah menjadi nama arif
  try {
    const dataRes = collection.updateOne({ id: 3 }, { $set: { name: 'arif' } });
    /**
     * referensi query: https://www.w3schools.com/mongodb/mongodb_mongosh_update.php
     */
    return dataRes;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateById };
