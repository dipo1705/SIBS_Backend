const express = require('express');
const router = express.Router();
const { getAllBanquedesang, getBanquedesangById, createBanquedesang, updateBanquedesangById, deleteBanquedesangById } = require('../controllers/banquedesang');


router.get('/banquedesang', getAllBanquedesang);
router.get('/banquedesang:id', getBanquedesangById);
router.post('/banquedesang', createBanquedesang);
router.put('/banquedesang:id', updateBanquedesangById);
router.delete('/banquedesang:id', deleteBanquedesangById );
module.exports = router;