var Xray = require('x-ray');
var x = Xray();

x('http://go.olx.com.br/veiculos-e-acessorios/carros', '.item', [{

    titulo: '.OLXad-list-title',
    cidade: '.detail-region',
    link: '.OLXad-list-link@href'

}]).paginate('.next a@href')
(function(err, obj) {
    var dados = [];
    obj.forEach(function(emprego){
        var dado = {};
        dado.titulo = emprego.titulo;
        dado.titulo = emprego.titulo.replace(/\t/g, '').replace(/\n/g,'').split('\r\n').toString();
        
        dado.cidade = emprego.cidade.replace(/\t/g, '').replace(/\n/g,'').split('\r\n').toString();
        dado.link = emprego.link;
        
        dados.push(dado);
    });
  console.log(dados);

});

