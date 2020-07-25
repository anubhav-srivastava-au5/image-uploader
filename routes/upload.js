const express = require('express')
const router = express.Router();
const Upload = require ('../models/Upload')
const auth = require('../middleware/auth')
router.post('/addimage',auth,async(req,res,next)=>{

    const {title,description,image_url}=req.body

    const upload= await Upload.create({title,description,image_url})
    res.json(upload)
    
})
router.get('/showimage',auth, async function (req, res) {
    try {
        let add = await Upload.findAll()
        res.send(add)
    } catch (error) {
        console.log(error)
    }
})

router.get('/all', async function (req, res) {
    try {
        let add = await Upload.findAll()
        res.send(add)
    } catch (error) {
        console.log(error)
    }
})

module.exports=router;