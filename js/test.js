
function HandleData(){
    var data = returndata();
    console.log(data);
    var arr = new Array();
    var reformattedArray = data[0].rootTarget.views.map(obj =>{ 
        var RowTarg = obj.targets.map(obx =>{
          rObx = 0;
          rObx += obx.marketValue;
          console.log("val: "+obx.marketValue);
          return rObx;
         })
      console.log("Values : "+RowTarg);
     var total =  RowTarg.reduce(function (a, b) {
        return a + b;
      }, 0);
      return total;
   })
     console.log("Returning: "+reformattedArray);
     arr = reformattedArray;
   return arr;
}