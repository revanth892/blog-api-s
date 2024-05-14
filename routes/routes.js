const { createblog,createblogmultiple,getallblogs ,getallauthors} = require('../controllers/datacontroller.js');
const express =require('express');

const router=express.Router();

router.post('/createblog',createblog);
router.post('/createblogmultiple',createblogmultiple)
router.get('/getallblogs',getallblogs)
router.get('/getallauthors',getallauthors)
module.exports=router;