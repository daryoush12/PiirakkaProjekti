
function RenderPie(data) {
    //Kutsutaan komentoa tukiluokasta ja tallennetaan piirakan renderöintiin käytettävät arvot arraylistaan.
    ClearCanvas();
    //var catchdata = returndata();
    //catchdata = catchdata[0].rootTarget.views.filter((ob) => ob.view == paramxy);
    //var data = catchdata[0].targets;
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
        .outerRadius(radius - 10)
        .innerRadius(radius - 70);

    var pie = d3.pie()
        .sort(null)
        .value(function (d) { return d.marketValue; });

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
        .data(pie(data[0].targets))
        .enter().append("g")
        .attr("class", "arc")
        .attr("id", function (d) { return d.data.target });

    g.append("path")
        .attr("d", arc)
        .style("fill", function (d) { return color(d.data.marketValue); });

    g.append("text")
        .attr("transform", function (d) { return "translate(" + labelArc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .text(function (d) { return d.data.target + " " + d.data.marketValue; });

    d3.selectAll("g")
        .filter(".arc")
        .on("click", function () {
            console.log(d3.select(this).attr("id"));
            RenderPie(ReturnNext(data, d3.select(this).attr("id")));
        })
}

function ReturnViews() {
    var data = returndata();
    console.log(data);
    var arr = new Array();
    data[0].rootTarget.views.map(obj => {
        var button = "<button onclick=RenderPie(ReturnFilteredView('" + obj.view + "','portfolio'))>" + obj.view + "</button>";
        document.getElementById("body").innerHTML += button;
    })
    return arr;
}

function ReturnFilteredView(view, target) {
    var data = returndata();
    console.log("Searching for target views:" + view + " " + target);
    var reformattedArray;
    if (target == "portfolio") {
        reformattedArray = data[0].rootTarget.views.filter((ob) => ob.view == view);
        return reformattedArray;
    }
    reformattedArray = data[0].rootTarget.views.filter((ob) => ob.view == view);
    var result = reformattedArray[0].targets.filter((obj) => obj.target == target);
    console.log(result);
    return result[0].views;
}

function ReturnNext(data, target) {
    var Result = data[0].targets.filter((ob) => ob.target == target);
    console.log("RESULT");
    console.log(Result)
    return Result[0].views;
}

function ClearCanvas() {
    var canvas = document.getElementById("body");
    console.log(canvas.getElementsByTagName("svg").length);
    var d = canvas.getElementsByTagName("svg")
    console.log(d);
    for (var i = 0; i < d.length; i++) {
        d[i].remove();
    }
}

