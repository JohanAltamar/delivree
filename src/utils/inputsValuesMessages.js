const phonePattern = /^3\d{9}$/;
const mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const minLength = {
  fullname: 3,
  address: 5,
  password: 6,
};
const maxLength = {
  fullname: 16,
  address: 30,
  additionalInfo: 150,
  email: 30,
  password: 16,
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

export const email = {
  required: { value: true, message: "Este campo es requerido" },
  pattern: { value: mailPattern, message: "Correo no válido" },
  maxLength: {
    value: maxLength.email,
    message: `Debe tener menos de ${maxLength.email} carácteres`,
  },
};

export const password = {
  required: { value: true, message: "Este campo es requerido" },
  minLength: {
    value: minLength.password,
    message: `Debe tener entre ${minLength.password} y ${maxLength.password} carácteres`,
  },
  maxLength: {
    value: maxLength.password,
    message: `Debe tener entre ${minLength.password} y ${maxLength.password} carácteres`,
  },
};

export const newPassword = {
  minLength: {
    value: minLength.password,
    message: `Debe tener entre ${minLength.password} y ${maxLength.password} carácteres`,
  },
  maxLength: {
    value: maxLength.password,
    message: `Debe tener entre ${minLength.password} y ${maxLength.password} carácteres`,
  },
};
