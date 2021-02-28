const phonePattern = /^3\d{9}$/;

const minLength = {
  fullname: 3,
  address: 5,
};
const maxLength = {
  fullname: 16,
  address: 30,
  additionalInfo: 150,
};

export const fullname = {
  required: { value: true, message: "Este campo es requerido" },
  minLength: {
    value: minLength.fullname,
    message: `Debe tener entre ${minLength.fullname} y ${maxLength.fullname} carácteres`,
  },
  maxLength: {
    value: maxLength.fullname,
    message: `Debe tener entre ${minLength.fullname} y ${maxLength.fullname} carácteres`,
  },
};

export const contactPhone = {
  required: { value: true, message: "Este campo es requerido" },
  pattern: {
    value: phonePattern,
    message: "Verifica el número",
  },
};

export const address = {
  required: { value: true, message: "Este campo es requerido" },
  minLength: {
    value: minLength.address,
    message: `Debe tener entre ${minLength.fullname} y ${maxLength.fullname} carácteres`,
  },
  maxLength: {
    value: maxLength.address,
    message: `Debe tener entre ${minLength.address} y ${maxLength.address} carácteres`,
  },
};

export const neighborhood = {
  required: { value: true, message: "Este campo es requerido" },
  minLength: {
    value: minLength.fullname,
    message: `Debe tener entre ${minLength.fullname} y ${maxLength.address} carácteres`,
  },
  maxLength: {
    value: maxLength.address,
    message: `Debe tener entre ${minLength.fullname} y ${maxLength.address} carácteres`,
  },
};

export const additionalInfo = {
  maxLength: {
    value: maxLength.additionalInfo,
    message: `Debe tener menos de ${maxLength.address} carácteres`,
  },
};