//using promises
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };

//using try and catch
/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, resp, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err,
      message,
    });
  }
};
export { asyncHandler };
*/
