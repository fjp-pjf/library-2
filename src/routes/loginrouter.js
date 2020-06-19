const express = require('express');
const loginRouter = express.Router();

loginRouter.use(express.static('./public'));

 function router(navs){
    
    loginRouter.get('/',(req,res)=>{
        res.render('login',{
            navs,
        });
    });

 return loginRouter;
}

module.exports = router;