const express = require('express');
const authorRouter = express.Router();

function router(nav){
    var authors = [
        {
            name:"Dan Brown",
            Country:"American",
            Genre:"Science fiction",
            img:"dan.jpg"
        },
        {
            name:"Cecelia Ahern",
            Country:"Irish",
            Genre:"Science fiction",
            img:"cecelia.jpg"
        },
        {
            name:"Paulo Coelho",
            Country:"Brazilian",
            Genre:"Science fiction",
            img:"paulo.jpg"
        },
        {
            name:"Harper Lee",
            Country:"American",
            Genre:"Science fiction",
            img:"harper.jpg"
        },
        {
            name:"Daniel Paul Singh",
            Country:"Indian",
            Genre:"Science fiction",
            img:"daniel.jpg"
        }
    ]
    
    authorRouter.get('/',(req,res)=>{
        res.render('authors',{
            nav,
            title:'Authors',
            authors
        });
    });
    
    
    authorRouter.get('/:id',(req,res)=>{
        const id = req.params.id
        res.render('author',{
            nav,
            title:'Author',
            author:authors[id]
        });
    });

    return authorRouter;
}

module.exports = router;