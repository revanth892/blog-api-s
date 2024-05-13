const { createblog,createblogmultiple } = require('../controllers/datacontroller.js');
const express =require('express');

const router=express.Router();

router.post('/createblog',createblog);
router.post('/createblogmultiple',createblogmultiple)
module.exports=router;