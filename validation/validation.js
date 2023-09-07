const nameValidation = (name) => {
  name = name.trim();

  if (name.length <= 3) {
    return { error: true, message: 'nama harus lebih dari 3' };
  }

  if (name.length > 20) {
    return { error: true, message: 'nama tidak lebih dari 20' };
  }

  if (!isNaN(parseInt(name))) {
    return { error: true, message: 'nama tidak boleh pakai angka' };
  }

  return { error: false, message: 'OK', data: name };
};

const ageValidation = (age) => {
  if (age <= 12) {
    return {
      error: true,
      message: 'umur harus lebih dari 12',
    };
  }

  if (age >= 80) {
    return {
      error: true,
      message: 'umur harus kurang dari 80',
    };
  }

  return { error: false, message: 'OK', data: age };
};

module.exports = { nameValidation, ageValidation };
