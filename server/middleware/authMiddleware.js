import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ msg: "No token" });
    }

    const realToken = token.split(" ")[1];

    const decoded = jwt.verify(realToken, "secret123");

    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

export default auth;