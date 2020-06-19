const express = require('express');
const booksRouter = express.Router();

function router(nav){
    var books = [
        {
            title:"Origin",
            Author:"Dan Brown",
            Genre:"Science fiction",
            img:"origin.jpg"
        },
        {
            title:"A place called here",
            Author:"Cecelia Ahern",
            Genre:"Fantasy",
            img:"place.jpg"
        },
        {
            title:"The Alchemist",
            Author:"Paulo Coelho",
            Genre:"Fiction",
            img:"alchemist.jpg"
        },
        {
            title:"To kill a MockingBird",
            Author:"Harper Lee",
            Genre:"Novel",
            img:"bird.jpg"
        },
        {
            title:"11Hours",
            Author:"Daniel Paul Singh",
            Genre:"Science fiction",
            img:"11hours.jpg"
        }
    ]
    
    booksRouter.get('/',(req,res)=>{
        res.render('books',{
            nav,
            title:'Library',
            books
        });
    });
    
    
    booksRouter.get('/:id',(req,res)=>{
        const id = req.params.id
        res.render('book',{
            nav,
            title:'Library',
            book:books[id]
        });
    });
//adding new book
// const addBook = ()=>{

// let book = {
//      title:document.getElementById("inputTitle4").value,
//      author:document.getElementById("inputAuthor4").value,
//      genre:document.getElementById("inputGenre4").value
// }

// books.push(book);
// document.querySelector('#myform').reset();

// console.warn('added',(books));
//  return addBook();
// }


    return booksRouter;
}   

module.exports = router;