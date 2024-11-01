const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.message ?? "Internal server error";

  console.error(error.stack);

  res.status(statusCode).json({
    statusCode,
    message: errorMessage,
  });
};

module.exports = errorHandler;
