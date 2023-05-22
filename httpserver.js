const http = require('http')

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200 ;
    console.log(req.url);
    res.setHeader('Content-Type','text/html')
    res.end('<h1 > This is Jubair Ahmsssed </h1>')
})

server.listen(port,()=>{
 console.log(`Server started Listening on port ${port}`)
});