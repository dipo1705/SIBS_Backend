require("dotenv").config();
  const { PrismaClient } = require('@prisma/client');
  const { banquedesang } = new PrismaClient();


//--------------------------BANQUE DE SANG------------------------------------------

//afficher toutes les banques de sang

exports.getAllBanquesdesang = async (req, res) => {
  try {
    const banquesdesang = await banquedesang.findMany();
    res.status(200).json(banquesdesang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//afficher une banquedesang (par id)

exports.getBanquedesangById = async (req, res) => {
  try {
    const banquesdesang = await banquedesang.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!banquesdesang) {
      return res.status(404).json({ message: 'Banque de sang non trouvé' });
    }
    res.status(200).json(banquesdesang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//ajouter une banque de sang

exports.createBanquedesang = async (req, res) => {
  try {
    const banquesdesang = await banquedesang.create({
      data: req.body,
    });
    res.status(201).json(banquesdesang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  
  //suppression d'une banque de sang

 exports.deleteBanquedesangById = async (req, res) => {
        try {
          const banquesdesang = await banquedesang.delete({
            where: {
              id: parseInt(req.params.id),
            },
          });
          if (!banquesdesang) {
            return res.status(404).json({ message: 'Banque de sang non trouvé' });
          }
          res.status(200).json({ message: 'Banque de sang supprimé avec succès' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
  
  //mise à jour d'une banque de sang

  exports.updateBanquedesangById = async (req, res) => {
    try {
      const banquesdesang = await banquedesang.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: req.body,
      });
      if (!banquesdesang) {
        return res.status(404).json({ message: 'Banque de sang non trouvé' });
      }
      res.status(200).json(banquedesang);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  