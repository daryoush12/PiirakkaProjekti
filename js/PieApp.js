


function RenderPie(data){ 
  //Kutsutaan komentoa tukiluokasta ja tallennetaan piirakan renderöintiin käytettävät arvot arraylistaan.
  ClearCanvas();
  console.log("MM");
  console.log("Array = "+data[0])
  var canvas = document.querySelector("canvas"),
      context = canvas.getContext("2d");    

  var width = canvas.width,
      height = canvas.height,
      radius = Math.min(width, height) / 2;
  
  var colors = [
    "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
    "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"
  ];
  
  var arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 70)
      .padAngle(0)
      .context(context);
  
  var pie = d3.pie();
  
  var arcs = pie(data);
  
  context.translate(width / 2, height / 2);
  
  context.globalAlpha = 0.5;
  arcs.forEach(function(d, i) {
    context.beginPath();
    arc(d);
    context.fillStyle = colors[i];
    context.fill();
  });
  
  context.globalAlpha = 1;
  context.beginPath();
  arcs.forEach(arc);
  context.lineWidth = 1.5;
  context.stroke();

}

function ReturnViews(){
    var data = returndata();
    console.log(data);
    var arr = new Array();
    data[0].rootTarget.views.map(obj =>{ 
      var button = "<button onclick=RenderPie(ReturnFilteredView('"+obj.view+"'))>"+obj.view+"</button>";
      document.getElementById("view_1").innerHTML += button; 
   })
     console.log("Returning: "+reformattedArray);
     arr = reformattedArray;
      var kokeilu = "currency";
      var button = "<button onclick=RenderPie(ReturnFilteredView('"+kokeilu+"'))>"+kokeilu+"</button>";
      document.getElementById("view_1").innerHTML += button; 
   return arr;
}

function ReturnFilteredView(target){
  var data = returndata();
  console.log("XX RETURNING VIEW:");
  var arr = new Array();
  var reformattedArray = data[0].rootTarget.views.filter((ob)=> ob.view == target);
  console.log(reformattedArray);
      var result = reformattedArray[0].targets.map(obj => {
          console.log("val: "+obj.marketValue);
          return obj.marketValue;
  
      })
      arr = result;
   console.log(result);
 return arr;
}

function NextView(){
  ClearCanvas();
  console.log("NEXT");
  RenderPie(ReturnCurrencyView("liquidity"));
}

function ClearCanvas(){
  var canvas = document.getElementById("piecan");
  var context = canvas.getContext("2d");
  canvas.width = canvas.width;
}

function build(){
  data = returndata();
  var reformattedArray = data[0].rootTarget.views.map(obj =>{ 
      return obj.view;
  })
 console.log(reformattedArray); 
//New Map loop to loop the sub classes into tree view:
}
