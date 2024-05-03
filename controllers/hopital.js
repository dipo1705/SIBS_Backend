require("dotenv").config();
  const { PrismaClient } = require('@prisma/client');
  const { hopital } = new PrismaClient();


//--------------------------HOPITAL------------------------------------------

//afficher toutes les hopitaux

exports.getAllHopitals = async (req, res) => {
  try {
    const hopitals = await hopital.findMany();
    res.status(200).json(hopitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//afficher un hopital (par id)

exports.getHopitalById = async (req, res) => {
  try {
    const hopitals = await hopital.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!hopitals) {
      return res.status(404).json({ message: 'Hopital non trouvé' });
    }
    res.status(200).json(hopitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//ajouter un hopital

exports.createHopital = async (req, res) => {
  try {
    const hopitals = await hopital.create({
      data: req.body,
    });
    res.status(201).json(hopitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  
  //suppression d'un hopital

 exports.deleteHopitalById = async (req, res) => {
        try {
          const hopitals = await hopital.delete({
            where: {
              id: parseInt(req.params.id),
            },
          });
          if (!hopitals) {
            return res.status(404).json({ message: 'Hopital non trouvé' });
          }
          res.status(200).json({ message: 'Hopital supprimé avec succès' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
  
  //mise à jour d'un hopital

  exports.updateHopitalById = async (req, res) => {
    try {
      const hopitals = await hopital.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: req.body,
      });
      if (!hopitals) {
        return res.status(404).json({ message: 'Hopital non trouvé' });
      }
      res.status(200).json(hopitals);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  