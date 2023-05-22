const http = require('http')
const port = process.env.PORT || 3000;
const fs = require('fs')


const server = http.createServer((req,res)=>{
    // console.log(req.url);
    res.setHeader('Content-Type','text/html')
    
    if(req.url== '/'){
        res.statusCode = 200 ;
        res.end('<h1 > This is Jubairasr AAhmed </h1>')
    }
    else if(req.url == '/about'){
        res.statusCode = 200 ;
        res.end('<h1 > I am A Very Good Byyy  </h1>')
    }
    else if(req.url == '/hello'){
        res.statusCode = 200 ;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }   
    else{
        res.statusCode = 404 ;
        res.end('<h1 > Page Not Found  </h1>')
    }
      
})


server.listen(port,()=>{
 console.log(`Server started Listening on port ${port}`)
});