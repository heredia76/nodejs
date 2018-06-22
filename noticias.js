var http = require('http');

var server = http.createServer( function(req, res){

    var categoria = req.url;

    if(categoria == '/Tecnologia'){
      res.end("<html><body>Noticias de Tecnologia</body></html>");

    } else if (categoria == '/moda'){
      res.end("<html><body>Noticias de Moda</body></html>");

    } else if (categoria == '/Beleza'){
      res.end("<html><body>Noticias de Beleza</body></html>");

    } else {
      res.end("<html><body>Protal de noticias</body></html>");
    }

});
server.listen(3000);
