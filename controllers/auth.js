const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const { User } = new PrismaClient();


exports.login = async (req, res, next) => {
  const user = await User.findUnique({
    where: {
      email: req.body.email,
    },
  });
  try {
    if (!user) {
      return res.status(401).json({ error: "Utilisateur non trouvé !" });
    }
    bcrypt.compare(req.body.password, user.password).then((valid) => {
      if (!valid) {
        return res.status(401).json({ error: "Mot de passe incorrect !" });
      }
      res.status(200).json({
        userId: user._id,
        token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
          expiresIn: "24h",
        }),
      });
    });
  } catch (error) {}
};



exports.logout = (req, res) => {
  req.logout();
  res.json({ message: "Déconnexion réussie" });
};


exports.singup = async (req, res, next) => {
  const { email, password, role } = req.body;
  const pwdHashed = await bcrypt.hash(password, 10);
  const createdUser = await User.create({
    data: {
      email,
      password: pwdHashed,
      role,
    },
  });
  if (!createdUser) {
    return res
      .status(400)
      .json({ error: "Echec de la création de l'utilisateur" });
  }
  res.status(201).json({ message: "Utilisateur créé !" });
};