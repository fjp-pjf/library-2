const express = require('express');
const signupRouter = express.Router();

signupRouter.use(express.static('./public'));

 function router(navs){
    
    signupRouter.get('/',(req,res)=>{
        res.render('signup',{
            navs,
            //title:'Library',
            //signup
        });
    });

 return signupRouter;
}

module.exports = router;