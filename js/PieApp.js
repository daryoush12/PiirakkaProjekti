function RenderPie(data) {
    //Kutsutaan komentoa tukiluokasta ja tallennetaan piirakan renderöintiin käytettävät arvot arraylistaan.
    ClearCanvas();
    console.log("DATA WE ARE SENDING:");
    console.log(data);
    sessionStorage.setItem(data[0].view, JSON.stringify(data[0]));

    if (PathIsEmpty() == true) {
        AddToPath(data[0].view);
        document.getElementById("piepath")
            .innerHTML += ("/<button onclick = 'RenderPie( ReturnPrevious(\"" + data[0].view + "\") )'>" + data[0].view + "</button>");
    }

    else if (PathIsEmpty() == false) {
        console.log("Not Empty Path");
        var Path = [];
        console.log("PATHHASOBJECT: "+PathHasObject(CallPath(),data[0].view) );
        if (PathHasObject(CallPath(),data[0].view) == false) {
            AddToPath(data[0].view);
            document.getElementById("piepath")
                .innerHTML += ("/<button onclick = 'RenderPie( ReturnPrevious(\"" + data[0].view + "\") )'>" + data[0].view + "</button>");
        }
        else {

        }
    }
    console.log(CallPath());
    //Kutsutaan data parametriä tässä ja luetaan painoprosentit, jonka jälkeen document.getelementbyid ja appendataan data tauluun.
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
        .style("fill", function (d) { return color(d.data.target); });

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
    d3.selectAll("table").remove("");
    //Table
    d3.selectAll("table")

        .select("tr")
        .data(pie(data[0].targets))
        .enter().append("tr")
        .append("table")
        .text(function (d) { return d.data.target + " : " + d.data.marketValue;})
    
        .style("border", "1px solid black")
        .style("padding", "5px")
        .style("text-align", "left")
        
        
        
    //Legend 
    var legendRectSize = 18;
    var legendSpacing = 4;
    
    var legend = svg.selectAll(".legend")
        .data(color.domain())
        .enter()
        .append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) {
            var height = legendRectSize + legendSpacing;
            var offset = height * color.domain().length / 2;
            var horz = 15 * legendRectSize;
            var vert = i * height - offset;
            return "translate(" + horz + "," + vert + ")";
        });

    legend.append("rect")
        .attr("width", legendRectSize)
        .attr("height", legendRectSize)
        .style("fill", color)
        .style("stroke", color);

    legend.append("text")
        .attr("x", legendRectSize + legendSpacing)
        .attr("y", legendRectSize - legendSpacing)
        .text(function (d) { return d; });

    
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
    if (Result[0].views == undefined) {
        alert("Sorry, there isnt more views under " + target);
        return this.data[0];
    }
    return Result[0].views;
}
function ReturnPrevious(view) {
    console.log("Path called");
    var data = [];
    data.push(JSON.parse(sessionStorage.getItem(view)));
    console.log(sessionStorage.getItem(view));
    console.log(data);
    return data;
}

function ClearCanvas() {
    //Taulukon tyhjennys tähän:
    var canvas = document.getElementById("body");
    console.log(canvas.getElementsByTagName("svg").length);
    var d = canvas.getElementsByTagName("svg")
    console.log(d);
    for (var i = 0; i < d.length; i++) {
        d[i].remove();
    }

    function notify(msg) {
        alert(msg);
    }
}

function PathIsEmpty() {
    if (sessionStorage.getItem("path") == "") {
        console.log("Is Empty");
        return true;
    }
    return false;
}

function AddToPath(addable) {
    var path = sessionStorage.getItem("path");
    if (path == undefined || path == null || path == "") {
        console.log("Null creating new..");
        path = [];
        path.push(addable);
        sessionStorage.setItem("path", JSON.stringify(path));
    }
    else {
        path = JSON.parse(path);
        path.push(addable);
        sessionStorage.setItem("path", JSON.stringify(path));
    }
}

function CallPath() {
    var path = JSON.parse(sessionStorage.getItem("path"));
    console.log("CALL PATH:");
    console.log(path);
    return path;
}

function PathHasObject(path, view) {

    console.log(path+" compared to : "+view);
    console.log(path);
    for (var i = 0; i < path.length; i++) {
        if (path[i] == view) {
            return true;
        }
    }
    return false;
}
