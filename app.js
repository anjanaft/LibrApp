const Express=require('express');
var app=new Express();
books=[
    {
        'title':'Turning points',
        'author':'A.P.J.Abdul Kalam',
        'publisher':'HarperCollins',
        'date_of_publication':'8/9/2012',
        'distributor':'HarperCollins',
        'price':225,
        'Description':'Turning points'


    },
    {
        title:"Randamoozham",
        author:"M.T.Vasudevan Nair",
        publisher:"DC Books",
        date_of_publication:"December 1984",
        distributor:"DC Books",
        price:225,
        Description:"Malayalam novel"

    },
    {
        title:"Aarachaar",
        author:"K.R.Meera",
        publisher:"DC Books",
        date_of_publication:"1 November 2012",
        distributor:"DC Books",
        price:225,
        Description:"Novel"
    },
    {
        title:"Pathummayude Aadu",
        author:"Vaikom Muhammad Basheer",
        publisher:"DC Books",
        date_of_publication:"April 1959",
        distributor:"DC Books",
        price:225,
        Description:"Novel"

    },
    {
        title:"Oru Desathinte Katha",
        author:"S. K. Pottekkatt",
        publisher:"DC Books",
        date_of_publication:"1971",
        distributor:"DC Books",
        price:225,
        Description:"Novel"

    },
    {
        title:"Oru Sankeerthanam Pole",
        author:"Perumbadavam Sreedharan",
        publisher:"DC Books",
        date_of_publication:"September 1993",
        distributor:"DC Books",
        price:225,
        Description:"Novel"
    },
    {
        title:"Naalukettu",
        author:"M. T. Vasudevan Nair",
        publisher:"DC Books",
        date_of_publication:"1958",
        distributor:"DC Books",
        price:225,
        Description:"Novel"

    },
    {
        title:"Ente Katha",
        author:"Kamala Suraiyya",
        publisher:"DC Books",
        date_of_publication:"1 February 1973",
        distributor:"DC Books",
        price:225,
        Description:"Novel"

    },
    {
        title:"Balyakalasakhi",
        author:"Vaikom Muhammad Basheer",
        publisher:"DC Books",
        date_of_publication:"1944",
        distributor:"DC Books",
        price:225,
        Description:"Novel"
    },
    {
        title:"Ini Njan Urangatte",
        author:"P. K. Balakrishnan",
        publisher:"DC Books",
        date_of_publication:"1973",
        distributor:"DC Books",
        price:225,
        Description:"Novel"
    }];


author=[{
    name:"A.P.J.Abdul Kalam",
    DOB:"13/09/1941",
    place:"Tamil Nadu",
    im:"/image/index.jpeg"
    
},
{
    name:" M.T.Vasudevan Nair",
    DOB:"14/09/1945",
    place:"Kerala",
    im:"/image/index2.jpeg"
    
},
{
    name:"K.R.Meera",
    DOB:"09/06/1960",
    place:"Kerala",
    im:"/image/index3.jpeg"
},
{
    name:"Vaikom Muhammad Basheer",
    DOB:"30/02/1955",
    place:"Kerala",
    im:"/image/index4.jpeg"
},
{
    name:"S. K. Pottekkatt",
    DOB:"13/12/1950",
    place:"Kerala",
    im:"/image/index5.jpeg"
},
{
    name:"Perumbadavam Sreedharan",
    DOB:"23/10/1949",
    place:"Kerala",
    im:"/image/index6.jpeg"
},
{
    name:"M. T. Vasudevan Nair",
    DOB:"11/05/1951",
    place:"Kerala",
    im:"/image/index2.jpeg"
},
{
    name:"Kamala Suraiyya",
    DOB:"03/07/1950",
    place:"Kerala",
    im:"/image/index7.jpeg"
},
{
    name:"Vaikom Muhammad Basheer",
    DOB:"16/04/1941",
    place:"Kerala",
    im:"/image/index4.jpeg"
},
{
    name:"P. K. Balakrishnan",
    DOB:"25/09/1956",
    place:"Kerala",
    im:"/image/index8.jpeg"

}
]

nav=[{
    link:"/books",
    title:"books"

},
{
    
        link:"/author",
        title:"author"
}
];

app.set('view engine','ejs');
app.use(Express.static(__dirname+"/public"));

app.get('/index',(req,res)=>{
    res.render('index',{nav:nav,title:"Library"});
});
app.get('/books',(req,res)=>{
    res.render('books',{nav:nav,title:"Books",books:books});
});
app.get('/author',(req,res)=>{
    res.render('author',{nav:nav,title:"Author",author:author});
});
app.get('/readmore/:id',(req,res)=>{

    const x=req.params.id;
    res.render('readmore',{nav:nav,title:"Books","books":books[x]});
});
app.get('/more/:id',(req,res)=>{

    const y=req.params.id;
    res.render('more',{nav:nav,title:"author","author":author[y]});
});


app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running on http://localhost:3000/index")
    });
