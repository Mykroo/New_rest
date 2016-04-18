function checaMesas(){
  var resp;
  $.ajax({
    url:'mesas.php',
    dataType:"json",
    async: false,
    //cache: false,
    success: function(data) {
      resp= data;
    }
  });
  console.log("fin cargaMesas");
  return resp;
}

function cargaCatego(){
 var resp;
 $.ajax({
  url:'catego.php',
  dataType:"json",
  async: false,
    //cache: false,
    success: function(data) {
      resp= data;
    }    
  });
 console.log("fin cargaCatego");
 return resp; 
}
function cargaProds(){
  var resp=null;
  $.ajax({
    url:'productos.php',
    dataType:'json',
    async: false,
    cache: false,
    success: function(data) {
      resp= data;
      console.log("oli");
    },always:function(){

    }
  });
  console.log("fin cargaProds");
  return resp; 
}


var app = angular.module('restComandas', []).
filter('capitalize', function() {
  return function(input, all) {
    var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
    return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
  }
});;
app.controller('ComandasController', function() { 
  //console.log(mesa_ajax);
  this.prods=cargaProds();
  this.mesas = checaMesas();
  this.categos=cargaCatego();
  
  this.getClaseMesa=function(in){
    
  }
});

function mesaclk(mes){
  //console.log("click en mesa ");
  //console.log(mes.id);
  $('#menu_comanda').css('display', 'inherit');
  $('#menu_comanda').animate({height: "1080px", width: "1920px",opacity: "0.99"}, 500);
}
$('#cancel_comanda').click(function(event) {
 $('#menu_comanda').css({
   display: 'none',
   height: '0px',
   opacity: '0'
 });;
});

//JSON datos ejemplo ************-Ignoralooooo*************
/*
var mesa = [{
  numMesa: 1,
  description: "Mesa en la esquina",
  numSillas: 8,
  pedidos: [182,52,33,55],  
  estado: "btn-danger"    
}, {
  numMesa: 2,
  description: "Mesa en la esquina",
  numSillas: 8,
  pedidos: [182,52,33,55],  
  estado: "btn-success"    
},{
  numMesa: 3,
  description: "Mesa en la esquina",
  numSillas: 8,
  pedidos: [182,52,33,55],  
  estado: "btn-danger"    
},{
  numMesa: 1,
  description: "Mesa en la esquina",
  numSillas: 8,
  pedidos: [182,52,33,55],  
  estado: "btn-danger"    
}, {
  numMesa: 2,
  description: "Mesa en la esquina",
  numSillas: 8,
  pedidos: [182,52,33,55],  
  estado: "btn-success"    
}];
*/
