const nameValidation = (name) => {
  name = name.trim();

  if (name.length <= 3) {
    return { error: true, message: 'nama harus lebih dari 3' };
  }

  if (!isNaN(parseInt(name))) {
    return { error: true, message: 'nama tidak boleh pakai angka' };
  }

  return { error: false, message: 'OK', data: name };
};

const ageValidation = (age) => {
  return { error: false, message: 'OK', data: age };
};

module.exports = { nameValidation, ageValidation };
