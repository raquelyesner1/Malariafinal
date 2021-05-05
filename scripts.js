// Constant variable for storing color hex values
const lineColors = {
    green: "#44bb66",
    red: "#bb4466",
    blue: "#4466bb",
    purple: "#9370DB",
    pink: "#FF00FF",
    yello: "#FFFF00"
}

// Setup Plotly config as a const as we will reuse it for all charts
const config = {
    displayModeBar: true,
    responsive: true
}

// Variables storing the DOM elements to be used for each of the plots
const plot1Div = document.getElementById('chart1');
const plot2Div = document.getElementById('text1');
const plot3Div = document.getElementById('chart2');
const plot4Div = document.getElementById('text2');

Plotly.d3.csv("MALARIABED.csv", function(rows){

    var trace0 = {
        type: "scatter",
        mode: "lines",
        name: 'Burkina Faso',
        x: unpack(rows, 'Year'),
        y: unpack(rows, 'Burkina Faso'),
        line: { color: lineColors.green }
    }
    console.log(trace0.x, trace0.y);

    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Congo',
        x: unpack(rows, 'Year'),
        y: unpack(rows, 'Congo'),
        line: { color: lineColors.red }
    }

    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Mozambique',
        x: unpack(rows, 'Year'),
        y: unpack(rows, 'Mozambique'),
        line: { color: lineColors.purple }
    }
    var trace3 = {
        type: "scatter",
        mode: "lines",
        name: 'Niger',
        x: unpack(rows, 'Year'),
        y: unpack(rows, 'Niger'),
        line: { color: lineColors.pink }
    }
    var trace4 = {
        type: "scatter",
        mode: "lines",
        name: 'Nigeria',
        x: unpack(rows, 'Year'),
        y: unpack(rows, 'Nigeria'),
        line: { color: lineColors.blue }
    }
    var trace5 = {
        type: "scatter",
        mode: "lines",
        name: 'Tanzania',
        x: unpack(rows, 'Year'),
        y: unpack(rows, 'Tanzania'),
        line: { color: lineColors.yellow }
    }

    var data1 = [trace0, trace1, trace2, trace3, trace4, trace5];

    var layout1 = {
        title: 'malaria beds',
        xaxis: {
            autorange: true,
            type: 'date'
        }

    }

    Plotly.newPlot(plot1Div,data1,layout1,config);




    function unpack(rows, key) {
        return rows.map(function(row) {return row[key];});
    }
})
