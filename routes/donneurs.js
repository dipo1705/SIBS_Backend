const express = require('express');
const router = express.Router();
const { getAllDonneurs, getDonneurById, createDonneur, updateDonneurById, deleteDonneurById } = require('../controllers/donneurs');


router.get('/donneurs', getAllDonneurs);
router.get('/donneurs:id', getDonneurById);
router.post('/adonneurs', createDonneur);
router.put('/donneurs:id', updateDonneurById);
router.delete('/donneurs:id', deleteDonneurById);
module.exports = router;