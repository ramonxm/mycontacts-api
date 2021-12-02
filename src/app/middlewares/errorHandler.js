module.exports = (error, request, response, next) => {
  console.log(`errorHandler: ${error.message}`);
  response.sendStatus(500);
};
