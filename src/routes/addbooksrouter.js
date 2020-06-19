const express = require('express');
const addbooksRouter = express.Router();

function router(nav){
    
    
    addbooksRouter.get('/',(req,res)=>{
        res.render('addbooks',{
            nav,
            title:'Add Books'
        });
    });


    return addbooksRouter;
}

module.exports = router;