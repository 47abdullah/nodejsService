const express=require('express');
const router=express.Router();
const { randevulariGetir, randevuOlustur, randevuAra, randevuGuncelle, randevuIptal, randevulariGoruntule, musaitSaatleriGoruntule, musaitSaatlerGetir, } = require('../controllers/randevuController');
const Personnel = require('../models/Personnel');
const  {login,changePassword} =require('..//controllers/adminController')


router.post('/randevu',randevuOlustur);
router.get('/randevu/list',randevulariGetir);
router.get('/randevu/ara',randevuAra);
router.put('/randevu/:id',randevuGuncelle);
router.delete('/randevu/:id',randevuIptal);
router.get('/randevular',randevulariGoruntule);
router.get('/musait-saatler',musaitSaatleriGoruntule),//düzgün çalışmıyor tekrar bakılacak
router.get('/saat',musaitSaatlerGetir)

//admin login router kısmı

router.post('/login',login)
router.post('/change-password',changePassword)


module.exports=router;