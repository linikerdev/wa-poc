exports.formatError = (err, res) => {
    const {
      statusCode = 500,
      message = "Aconteceu um erro inesperado",
      code = "ERROR",
    } = err;
  
    res.status(statusCode).json({
      statusCode,
      message,
      code,
    });
  };
  