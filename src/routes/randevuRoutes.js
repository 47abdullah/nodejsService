const express=require('express');
const router=express.Router();
const { randevulariGetir, randevuOlustur, randevuAra, randevuGuncelle, randevuIptal } = require('../controllers/randevuController');


router.post('/randevu',randevuOlustur);
router.get('/randevu/list',randevulariGetir);
router.get('/randevu/ara',randevuAra);
router.put('/randevu/:id',randevuGuncelle);
router.delete('/randevu/:id',randevuIptal);
module.exports=router;