const { createblog,createblogmultiple,getallblogs ,getallauthors,getalltags,getwithtag,getwithauthor,getwithid,getrandomblog,updateblog,deleteblog} = require('../controllers/datacontroller.js');
const express =require('express');

const router=express.Router();

router.post('/createblog',createblog);
router.post('/createblogmultiple',createblogmultiple)
router.get('/getallblogs',getallblogs)
router.get('/getallauthors',getallauthors)
router.get("/getalltags",getalltags)
router.get('/getwithtag',getwithtag)
router.get('/getwithauthor',getwithauthor)
router.get('/getwithid',getwithid)
router.get('/getrandomblog',getrandomblog)
router.patch('/updateblog',updateblog)
router.delete('/deleteblog',deleteblog)
module.exports=router;

// 66427d6477f9fc1e75a24543