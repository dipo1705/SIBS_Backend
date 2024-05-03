require("dotenv").config();
  const { PrismaClient } = require('@prisma/client');
  const { produitsanguin } = new PrismaClient();




//------------------PRODUITS SANGUINS------------------------------------------

//afficher tous les produits sanguins

exports.getAllProduitssanguins = async (req, res) => {
  try {
    const produitssanguins = await produitsanguin.findMany();
    res.status(200).json(produitssanguins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//afficher un produit sanguin (par id)

exports.getProduitsanguinById = async (req, res) => {
  try {
    const produitssaguins = await produitsanguin.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!produitssaguins) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.status(200).json(produitssaguins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//ajouter un produit sanguin

exports.createProduitsanguin = async (req, res) => {
  try {
    const produitssaguins = await produitsanguin.create({
      data: req.body,
    });
    res.status(201).json(produitssaguins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  
  //suppression d'un produit sanguin

 exports.deleteProduitsanguinById = async (req, res) => {
        try {
          const produitssaguins = await produitsanguin.delete({
            where: {
              id: parseInt(req.params.id),
            },
          });
          if (!produitssaguins) {
            return res.status(404).json({ message: 'Produit sanguin non trouvé' });
          }
          res.status(200).json({ message: 'Poduit sanguin supprimée avec succès' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
  
  
  //mise à jour d'un produit sanguin

  exports.updateProduitsanguinById = async (req, res) => {
    try {
      const produitssaguins = await produitsanguin.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: req.body,
      });
      if (!produitssaguins) {
        return res.status(404).json({ message: 'Produit sanguin non trouvé' });
      }
      res.status(200).json(machines);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };