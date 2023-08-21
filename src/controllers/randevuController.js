const Randevu = require('../models/Randevu');

const randevuOlustur = async (req,res) => {

    try {
        const randevu = await Randevu.create(req.body);
        res.status(200).json({ success: true, data: randevu });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });

    }
};


const randevulariGetir=async(req,res)=>{


    try {
        const randevular=await Randevu.find();
        res.status(200).json({success:true,data:randevular})
    } catch (error) {
        res.status(400).json({ success: false, error: err.message });
    }
};

const randevuAra=async(req,res)=>{
    try {
        const {phoneNumber}=req.query;
        if (!phoneNumber) {
            return res.status(400).json({success:false,error:'Lütfen bir telefon numarası girin'});
        }
        if (phoneNumber.length !==10) {
            return res.status(400).json({success:false,error:'Telefon numarası 10 karakter olmalıdır'})
        }
        const randevular=await Randevu.find({phoneNumber});
        res.status(200).json({success:true,data:randevular});
    } catch (error) {
        res.status(400).json({success:false,error:error.message})
    }
};

const randevuGuncelle=async(req,res)=>{
    try {
        const {id}=req.params;
        const randevu=await Randevu.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({success:true,data:randevu,message:'Randevu başarılı şekilde güncellendi'})
    } catch (error) {
        res.status(400).json({success:false,error:error.message})
    }
};

const randevuIptal=async(req,res)=>{
    try {
        const {id}=req.params;
        await Randevu.findByIdAndDelete(id);
        res.status(200).json({success:true},{message:"Randevu başarılı şekilde iptal edildi"})
    } catch (error) {
        res.status(400).json({success:false,error:error.message})
    }
};



module.exports={randevuOlustur,randevulariGetir,randevuAra,randevuGuncelle,randevuIptal};