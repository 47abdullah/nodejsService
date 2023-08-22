const Personnel = require('../models/Personnel');
const Randevu = require('../models/Randevu');

const randevuOlustur = async (req,res) => {

    try {
        const { personnel, date, time } = req.body;
        const mevcutRandevu = await Randevu.findOne({ personnel, date, time });
        if (mevcutRandevu) {
            return res.status(400).json({ success: false, error: 'Bu tarih ve saatte daha önce randevu oluşturulmuştur. Lütfen başka bir tarih seçin' });
        }

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


const randevulariGoruntule=async(req,res)=>{
    try {
        const {personnel,date}=req.query;
        const randevular=await Randevu.find({personnel,data});
        res.status(200).json({success:true,data:randevular})
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}



const musaitSaatleriGoruntule=async(req,res)=>{
    try {
        const {personnel,date}=req.params;
        const randevular=await Randevu.find({personnel,date});
        const musaitSaatler=['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'].filter(saat=>!randevular.some(randevu=>randevu.time ===saat));
        res.status(200).json({success:true,data:musaitSaatler});
        
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}

const musaitSaatlerGetir=async(req,res)=>{

    try {
        const { personnel, date } = req.query;
        const randevular = await Randevu.find({ personnel, date });
        const doluSaatler = randevular.map(randevu => randevu.time);
        // burada tüm saatleri belirleyin
        const tumSaatler = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00'];
        const musaitSaatler = tumSaatler.filter(saat => !doluSaatler.includes(saat));
        res.json(musaitSaatler);
        
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}




module.exports={
    randevuOlustur,
    randevulariGetir,
    randevuAra,
    randevuGuncelle,
    randevuIptal,
    randevulariGoruntule,
    musaitSaatleriGoruntule,
    musaitSaatlerGetir,
 
};