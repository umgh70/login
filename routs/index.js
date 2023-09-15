const { config } = require('dotenv')
const express = require('express')
const router = express.Router()

router.use('/user',require('./user'))

router.all('*', async (req,res,next)=>{
    //console.log('404');
    try {
        let err = new Error('there is no this pg')
        err.status=404
        throw err
    } catch (err) {
        next(err)
    }
})

//modiriyate khataha 
router.use(async(err,req,res,next)=>{
    const code=err.status || "500"
    const message=err.message || ""
    const stack=err.stack || ""
    //this line for developer
    let debug=false
    //
    if(debug == true){
        return res.render('errors/developer',{message,stack})
    }else{
        return res.render(`errors/${code}`,{message,stack})
    }

})

module.exports = router