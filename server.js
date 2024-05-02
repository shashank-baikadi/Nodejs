// require('dotenv').config();
// const express =require('express');
// const app = express();
// const router = require('./router/auth-router');
// const connectDB = require('./utils/db');
// const cors = require('cors');


// app.use(cors());
// app.use(express.json());
// app.use('/api/auth', router);

// app.get('/', (req, res) => {
//     res.send('Hello World..')
// })




// connectDB().then(() => {
//     console.log('database connected');
//     app.listen(3000);
// })




// require('dotenv').config();
// const express = require('express');
// const app = express();
// const router = require('./router/auth-router');
// const connectDB = require('./utils/db');
// const cors = require('cors');
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');

// // Ensure uploads directory exists
// const uploadDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }


// // const storage = multer.diskStorage({
// //   destination: function(req, file, cb) {
// //     cb(null, uploadDir);
// //   },
// //   filename: function(req, file, cb) {
// //     cb(null, new Date().toISOString() + file.originalname);
// //   }
// // });

// // Multer configuration
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, uploadDir);
//     },
//     filename: function(req, file, cb) {
//       const date = new Date().toISOString().replace(/:/g, '-');
//       cb(null, date + file.originalname);
//     }
//   });
// const upload = multer({ storage: storage });

// app.use(cors());
// app.use(express.json());
// app.use('/api/auth', router);

// // New route for uploading photo
// app.post('/api/auth/register', upload.single('photo'), (req, res) => {
//   const { username, email } = req.body;
//   const photo = req.file.path;
//   // Save username, email, and photo path to database here
//   res.send({ username, email, photo });
// });

// app.get('/', (req, res) => {
//   res.send('Hello World..')
// });

// connectDB().then(() => {
//   console.log('database connected');
//   app.listen(3000);
// // });

// require('dotenv').config();
// const express = require('express');
// const app = express();
// const router = require('./router/auth-router');
// const connectDB = require('./utils/db');
// const cors = require('cors');
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');

// console.log('__dirname:', __dirname); // Log the value of __dirname

// // Ensure uploads directory exists
// const uploadDir = path.join(__dirname, 'uploads');
// console.log('uploadDir:', uploadDir); // Log the value of uploadDir

// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// console.log('Does uploads directory exist?', fs.existsSync(uploadDir)); // Check if uploads directory exists

// // // Multer configuration
// // const storage = multer.diskStorage({
// //     destination: function(req, file, cb) {
// //       cb(null, uploadDir);
// //     },
// //     filename: function(req, file, cb) {
// //       const date = new Date().toISOString().split('T')[0];
// //       const filename = date + '-' + file.originalname;
// //       console.log('Generated filename:', filename); // Log the generated filename
// //       cb(null, filename);
// //     }
// //   });

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads/");
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + path.extname(file.originalname));
//     },
//   });
// const upload = multer({ storage: storage });

// app.use(cors());
// app.use(express.json());
// app.use('/api/auth', router);

// // New route for uploading photo
// app.post('/api/auth/register', upload.single('photo'), (req, res) => {
//   const { username, email } = req.body;
//   const photo = req.file.path;
//   // Save username, email, and photo path to database here
//   res.send({ username, email, photo });
// });

// app.get('/', (req, res) => {
//   res.send('Hello World..')
// });

// connectDB().then(() => {
//   console.log('database connected');
//   app.listen(3000);
// });

require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router/auth-router');
const connectDB = require('./utils/db');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Ensure uploads directory exists
if (!fs.existsSync('uploads/')) {
  fs.mkdirSync('uploads/', { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log('Original filename:', file.originalname); // Log the original filename
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());
// app.use('/api/auth', router);

// New route for uploading photo
app.post('/register', upload.single('photo'), (req, res) => {
  const { username, email } = req.body;
  const photo = req.file.path;
  // Save username, email, and photo path to database here
  res.send({ username, email, photo });
});

app.get('/', (req, res) => {
  res.send('Hello World..')
});

connectDB().then(() => {
  console.log('database connected');
  app.listen(3000);
});