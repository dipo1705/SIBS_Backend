require("dotenv").config();
  const { PrismaClient } = require('@prisma/client');
  const { donneur} = new PrismaClient();




//------------------DONNEURS------------------------------------------

//afficher tous les donneurs

exports.getAllDonneurs = async (req, res) => {
  try {
    const donneurs = await donneur.findMany();
    res.status(200).json(donneurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//afficher un donneur (par id)

exports.getDonneurById = async (req, res) => {
  try {
    const donneurs = await donneur.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!donneurs) {
      return res.status(404).json({ message: 'donneur non trouvé' });
    }
    res.status(200).json(donneurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//ajouter un donneur

exports.createDonneur = async (req, res) => {
  try {
    const donneurs = await donneur.create({
      data: req.body,
    });
    res.status(201).json(donneurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  
  //suppression d'un donneur

 exports.deleteDonneurById = async (req, res) => {
        try {
          const donneurs = await donneur.delete({
            where: {
              id: parseInt(req.params.id),
            },
          });
          if (!donneurs) {
            return res.status(404).json({ message: 'Donneur non trouvé' });
          }
          res.status(200).json({ message: 'Donneur supprimé avec succès' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
  
  
  
  //mise à jour d'un donneur

  exports.updateDonneurById = async (req, res) => {
    try {
      const donneurs = await donneur.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: req.body,
      });
      if (!donneurs) {
        return res.status(404).json({ message: 'Donneur non trouvé' });
      }
      res.status(200).json(donneurs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  