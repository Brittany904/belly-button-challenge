// reading in the file, parsing the data, and printing it pretty

d3.json("samples.json").then(function(data){

    // creating variable to print data more clearly
    var prettyData = JSON.stringify(data, null, 2);

    // print data
    console.log(typeof prettyData);

    // create horizontal bar chart w/ dropdown for top 10 OTUs
        //create label, values, and hovertext
     
        //loop through

        //make chart

});
