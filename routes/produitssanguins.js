const express = require('express');
const router = express.Router();
const { getAllProduitssanguins, getProduitsanguinById, createProduitsanguin, updateProduitsanguinById, deleteProduitsanguinById } = require('../controllers/machines');


router.get('/produitssanguins', getAllProduitssanguins);
router.get('/produitssanguins:id', getProduitsanguinById);
router.post('/produitssanguins', createProduitsanguin);
router.put('/produitssanguins:id', updateProduitsanguinById);
router.delete('/produitssanguins:id', deleteProduitsanguinById );
module.exports = router;