// const mongoose = require('mongoose');

// const PersonnelSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   workingHours: [{
//     day: {
//       type: String,
//       enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//       required: true
//     },
//     start: {
//       type: String,
//       required: true
//     },
//     end: {
//       type: String,
//       required: true
//     }
//   }]
// });

// const Personnel = mongoose.model('Personnel', PersonnelSchema);

// module.exports = Personnel;

// // const personnel = new Personnel({
// //     name: 'Personnel1',
// //     workingHours: [
// //       { day: 'Monday', start: '09:00', end: '21:00' },
// //       { day: 'Tuesday', start: '09:00', end: '21:00' },
// //       { day: 'Wednesday', start: '09:00', end: '21:00' },
// //       { day: 'Thursday', start: '09:00', end: '21:00' },
// //       { day: 'Friday', start: '09:00', end: '21:00' },
// //       { day: 'Saturday', start: '09:00', end: '21:00' }
// //     ]
// //   });
  
// //   await personnel.save();
  








const mongoose = require('mongoose');

const personelSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String
});

module.exports = mongoose.model('Personel', personelSchema);