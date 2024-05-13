const { createblog } = require('../controllers/datacontroller.js');
const express =require('express');

const router=express.Router();

router.post('/createblog',createblog);

module.exports=router;