const express = require('express');
const router = express.Router();
const { getAllHopitals, getHopitalById, createHopital, updateHopitalById, deleteHopitalById } = require('../controllers/hopital');


router.get('/hopital', getAllHopitals);
router.get('/hopital:id', getHopitalById);
router.post('/hopital', createHopital);
router.put('/hopital:id', updateHopitalById);
router.delete('/hopital:id', deleteHopitalById );
module.exports = router;