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
  contentType:'application/json; charset=UTF-8',
  async: false,
    //cache: false,
    success: function(data) {
      resp= data;
      //console.log(data);
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
    },always:function(){

    }
  });
  console.log("fin cargaProds");
  return resp; 
}
///////***************------------------------------- DATOS DE JSON FIIN---------------------------***********************************/////////////////////


var app = angular.module('restComandas', []).
filter('capitalize', function() {
  return function(input, all) {
    var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
    return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
  }
});;
app.controller('ComandasController', function(){ 
  //console.log(mesa_ajax);
  this.prods=cargaProds();
  this.mesas = checaMesas();
  this.categos=cargaCatego();
  this.resetCantidad=function(){
    for (var i = 0; i < this.prods.length; i++) {
      this.prods[i].cantidad=0;
    }
    console.log("Reseteando cantidad"+this.prods[0].cantidad);
  };
  this.resetCantidad();
  this.comanda=[{
    id:0,
    prods:[],
    cant:[]
  }];

  for (var i = 0; i < this.mesas.length; i++) {      
    this.comanda.push({
      id:this.mesas[i].id,
      prods:[],
      cant:[]
    });     
  }

  this.mandaComanda=function(){
    console.log("oliii");
    var aux_pos,aux_idprod, aux_cant;
    for (var i = 0; i < this.prods.length; i++) {
      aux_cant=this.prods[i].cantidad;
      if(aux_cant>0){
        console.log(this.n_mesa+1);
        aux_idprod=this.comanda[this.n_mesa+1].prods.indexOf(this.prods[i].idCategoria);
        if(aux_idprod>-1){
          this.comanda[this.n_mesa+1].prods.push(this.prods[i].idCategoria);        
          this.comanda[this.n_mesa+1].cant.push(aux_cant);        
        }else{
          this.comanda[this.n_mesa+1].cant[aux_idprod]+=aux_cant;
        }
      }
    }
    console.log(this.comanda[this.n_mesa]);
    //console.log(this.comanda);
  };
  this.mesaClk=mesaclk;   
  this.mesaClk=function(n_mesa){
    $('#menu_comanda').css({display: 'inherit',
      width: '100%' 
    });
    $('#menu_comanda').animate({height: "1080px", width: "1920px",opacity: "0.99"}, 500);
    this.n_mesa=n_mesa-1;
    //console.log(this.n_mesa);
    console.log(this.mesas[n_mesa-1].edo);
    //console.log(this.mesas);
  } 
  this.ingresaComanda=function(){    
    $('#menu_comanda').animate({
      width: "0px",
      opacity: "0.0"}, 1000);
    this.mesas[this.n_mesa].edo=2;
      //console.log(this.prods);
      this.resetCantidad(); 
    };
    this.cobraMesa=function(){
      $('#menu_comanda').animate({
        width: "0px",
        opacity: "0.0"}, 1000);
      this.mesas[this.n_mesa].edo=0;    
      this.resetCantidad(); 
    }
    this.cancelComanda=function(){    
      $('#menu_comanda').animate({
       width: "0px",
       opacity: "0.0"}, 500); 
      this.resetCantidad();
    };


    //console.log("Comanda enviada: ");
    //console.log(comanda);

  //console.log(this.categos);
  
//   this.cargaComanda=function() {
//   // body...
//   //console.log("oliiiiiiii");
//   var tam=$('table').find('span').eq().length;

//   $('table').find('span').eq(1).html();
// };
});
function mesaclk(){
  //console.log("click en mesa ");
  //console.log(mes.id);
  $('#menu_comanda').css({display: 'inherit',
    width: '100%'    
  });
  $('#menu_comanda').animate({height: "1080px", width: "1920px",opacity: "0.99"}, 500);  
}

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