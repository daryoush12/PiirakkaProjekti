
function RenderPie(paramxy) {
    //Kutsutaan komentoa tukiluokasta ja tallennetaan piirakan renderöintiin käytettävät arvot arraylistaan.
    console.log(paramxy);
    ClearCanvas();
    var catchdata = returndata();
    catchdata = catchdata[0].rootTarget.views.filter((ob) => ob.view == paramxy);
    var data = catchdata[0].targets;
    console.log(data);

    var width = 960,
        height = 500,
        radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal()
        .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
            "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]);

    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var pie = d3.pie()
        .sort(null)
        .value(function (d) { return d.marketValue; });

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function (d) { return color(d.data.marketValue); });

    g.append("text")
        .attr("transform", function (d) { return "translate(" + labelArc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .text(function (d) { return d.data.target + " " + d.data.marketValue; });

}

function ReturnViews() {
    var data = returndata();
    console.log(data);
    var arr = new Array();
    data[0].rootTarget.views.map(obj => {
        var button = "<button onclick=RenderPie('" + obj.view + "')>" + obj.view + "</button>";
        document.getElementById("body").innerHTML += button;
    })
    return arr;
}

function ReturnFilteredView(target) {
    var data = returndata();
    console.log("XX RETURNING VIEW:");
    var arr = new Array();
    var reformattedArray = data[0].rootTarget.views.filter((ob) => ob.view == target);
    console.log(reformattedArray);
    var result = reformattedArray[0].targets.map(obj => {
        console.log("val: " + obj.marketValue);
        return obj.marketValue + obj.target;
    })
    arr = result;
    console.log(result);
    return arr;
}

function NextView() {
    ClearCanvas();
    console.log("NEXT");
    RenderPie(ReturnCurrencyView("liquidity"));
}

function ClearCanvas() {
    var canvas = document.getElementById("body");
    console.log(canvas.getElementsByTagName("svg").length);
      var d =  canvas.getElementsByTagName("svg")
      console.log(d);
      for(var i = 0; i < d.length; i++){
            d[i].remove();
      }
    
}

function build() {
    data = returndata();
    var reformattedArray = data[0].rootTarget.views.map(obj => {
        return obj.view;
    })
    console.log(reformattedArray);
    //New Map loop to loop the sub classes into tree view:
}
