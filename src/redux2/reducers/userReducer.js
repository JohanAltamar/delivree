import types from "../types";

const initialState = {
  additionalInfo: "",
  address: "Cra 22 A # 12 - 71, Apto 101",
  cellphoneNumber: "3016669240",
  fullname: "Johan Altamar",
  neighborhood: "San Mateo",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER__SET_INFO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
