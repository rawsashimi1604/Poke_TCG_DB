function handleError(err, req, res, next) {
  console.log(err);
  res.status(500).send("Something went wrong in the server...");
}

export default {
  handleError,
};
