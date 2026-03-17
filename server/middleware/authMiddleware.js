import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json("No token");
    }

    const verified = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = verified;

    next();

  } catch (err) {
    res.status(401).json("Invalid token");
  }
};

export default authMiddleware;