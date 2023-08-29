const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const Admin=require('../models/Admin')
const Personel = require('../models/Personnel');
const Personnel = require('../models/Personnel');



const login=async(req,res)=>{

const  {username,password}=req.body;
const user=await Admin.findOne({ username }) || await Personel.findOne({ username });
if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).send('Kullanıcı adı veya şifre hatalı');

  const token = jwt.sign({ id: user.id, role: user.role }, 'secret-key');
  res.json({ token });
};



const changePassword = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).send('Erişim engellendi');
  
    try {
      const payload = jwt.verify(token, 'secret-key');
      const user = await Admin.findById(payload.id)|| await Personel.findById(payload.id);
      if (!user) return res.status(400).send('Kullanıcı bulunamadı');
  
      const { oldPassword, newPassword } = req.body;
      if (!(await bcrypt.compare(oldPassword, user.password)))
        return res.status(400).send('Eski şifre hatalı');
  
      user.password = await bcrypt.hash(newPassword, 10);
      await user.save();
      res.send('Şifre değiştirildi');
    } catch (err) {
      res.status(401).send('Erişim engellendi');
    }
  };



//   async function createAdmin() {
//     const hashedPassword = await bcrypt.hash('test', 10);
//     const admin = new Admin({
//       username: 'test',
//       password: hashedPassword,
//       role: 'admin'
//     });
//     await admin.save();
//     console.log('Admin kullanıcısı oluşturuldu');
//   }
  
//   createAdmin();

//   async function createPersonel() {
//     const hashedPassword = await bcrypt.hash('personel', 10);
//     const personel = new Personnel({
//       username: 'personel',
//       password: hashedPassword,
//       role: 'personel'
//     });
//     await personel.save();
//     console.log('perosneel kullanıcısı oluşturuldu');
//   }
  
//   createPersonel();



  module.exports={
    login,
    changePassword,
  }