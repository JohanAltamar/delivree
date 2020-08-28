export const developmentLog = (message, message2) => {
  if (process.env.NODE_ENV === 'development') {
    if (!message2) {
      console.log(message);
    } else {
      console.log(message, message2);
    }
  }
};
