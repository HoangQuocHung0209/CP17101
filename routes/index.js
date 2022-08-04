var express = require('express');
var router = express.Router();


const userController = require('../components/users/User_controller');



// 1.Dang nhap
// https://localhost:2900/dang-nhap
// get: chay ra login
// post:thuc hien login
router.get('/dang-nhap', function (req, res, next) {
  if (req.session && req.session.user) {
    res.redirect('/san-pham')
  } else {
    res.render('login', { title: 'Login' });
  }
});

router.post('/dang-nhap', async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await userController.login(username, password);
    console.log(user);
    if (user) {
      req.session.user = user;
      res.redirect('/san-pham');
    } else {
      res.redirect('/dang-nhap');
    }
  } catch (error) {
    throw new Error('Error');
  }
});


//localhost:2900/dang-xuat
router.get('/dang-xuat', function (req, res, next) {
  req.session.destroy(function (err) {
    //nếu đăng xuất thành công chuyển sang đăng nhập
    res.redirect('/dang-nhap')
  })
});




















//   // req: request - gửi lên từ client 
//   // - body: thông tin gửi lên từ form
//   // query: là thông tin gửi lên từ url - sau dấu ?
//   // params: là thông tin gửi lên từ url


// /* GET home page. */
// //http://localhost:2900
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Hello World!', name: 'Hoang Quoc Hung' });
});

// //http://localhost:2900/hello
// router.get('/hello', function (req, res, next) {
//   // req: request - gửi lên từ client 
//   // - body: thông tin gửi lên từ form
//   // query: là thông tin gửi lên từ url - sau dấu ?
//   // params: là thông tin gửi lên từ url

//   // res: response - trả về server
//   // next : next - chuyển tiếp

//   let { name, age } = req.query;
//   res.render('greeting', { abc: 'i love NodeJs', name: name, age: age });
// });

// //http://localhost:2900/dien-tich?canh=10&cao=19
// router.get('/dien-tich', function (req, res, next) {
//   let { canh, cao } = req.query;
//   let dienTich = Number(canh) * Number(cao) / 2;
//   res.render('area', { canh, cao, dienTich });
// });

// //http://localhost:2900/dien-tich-hcn/dai/8/rong/6
// router.get('/dien-tich-hcn/dai/:dai/rong/:rong', function (req, res, next) {
//   let { dai, rong } = req.params;
//   let dienTich = Number(dai) * Number(rong);
//   res.render('area', { dai, rong, dienTich });
// });

// //http://localhost:2900/dien-tich-hv
// router.post('/dien-tich-hv', function (req, res, next) {
//   let { canh } = req.body;
//   let dienTich = Number(canh) * Number(canh);
//   res.render('area', { canh, dienTich });
// });

// //http://localhost:2900/dien-tich-tg?canh=10&cao=12
// router.get('/dien-tich-tg', function (req, res, next) {
//   let { canh, cao } = req.query;
//   let dienTich = Number(canh) * Number(cao) / 2;
//   res.render('area', { canh, cao, dienTich });
// });

// //http://localhost:2900/login
// router.get('/login', function (req, res, next) {
//   res.render('login');
// });

// //POST Home Page
// //http://localhost:2900/login
// router.post('/login', function (req, res, next) {
//   const { username, password } = req.body;
//   if (username == 'admin' && password == 'admin') {
//     res.redirect('/');
//   }
//   else {
//     res.redirect('/login');
//   }
// });

module.exports = router;
