let url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"; //URL links to the same data in the samples.json folder

//function that populates the metadata
function demoInfo(sample)
{
    //console.log(sample); tested data output here

        //load the data from the URL 
    d3.json(url).then(data => {
        //grab the metadata
        let metaData = data.metadata;
        
        //filter based on the value of the sample (should return 1 result in an array based on the dataset)
        let result = metaData.filter(sampleResult => sampleResult.id == sample);

        //access index 0 from the array
        let resultData = result[0];


        //clear the metadata out
        d3.select("#sample-metadata").html(""); //clears out the HTML, so that one sample's data is shown at a time

        // use Object.entries to get the key-value pairs
        Object.entries(resultData).forEach(([key, value]) =>{
            //add to the sample data/demographics section
            d3.select("#sample-metadata"). append("h5").text(`${key}: ${value}`)
    
    })});
};

//-----------------------------------------------------------------------------------------------------------
//function that builds the bar chart
function buildBarChart(sample)
{

    d3.json(url).then(data => {
    //grab  all of the samples
    let sampleData = data.samples;
    //console.log(sampleData); tested data output here
     

    //filter based on the value of the sample (should return 1 result in an array based on the dataset)
    let result = sampleData.filter(sampleResult => sampleResult.id == sample);
        
    //access index 0 from the array
    let resultData = result[0];

        
    //get the otu_ids otu_labels, and sample_values
    let otu_ids = resultData.otu_ids;
    let otu_labels = resultData.otu_labels;
    let sample_values = resultData.sample_values;


    //build the bar chart
    //get the y tickmarks, x values, and text labels, slice to get the top 10 results
    let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`);
    let xvalues = sample_values.slice(0, 10);
    let textlabels = otu_labels.slice(0, 10);

    //assemble the chart
    let barChart = {
        y: yticks. reverse(), //.reverse() will order from greatest to least
        x: xvalues.reverse(),
        text: textlabels.reverse(),
        type: "bar",
        orientation : "h"
        };

    let layout = {
        title: "Top 10 Belly Button Bacteria"
        };

    Plotly.newPlot("bar", [barChart], layout)
    });
};

//-------------------------------------------------------------------------------------------------------------
//function that builds bubble chart
function buildBubbleChart(sample)
{
    d3.json(url).then(data => {
        //grab  all of the samples
        let sampleData = data.samples;
        //console.log(sampleData); tested data output here
         
    
        //filter based on the value of the sample (should return 1 result in an array based on the dataset)
        let result = sampleData.filter(sampleResult => sampleResult.id == sample);
            
        //access index 0 from the array
        let resultData = result[0];
    
            
        //get the otu_ids otu_labels, and sample_values
        let otu_ids = resultData.otu_ids;
        let otu_labels = resultData.otu_labels;
        let sample_values = resultData.sample_values;
    
    
        //build the bubble chart
        
        let bubbleChart = {
            y: sample_values,
            x: otu_ids,
            text: otu_labels,
            mode: "markers",
            marker:{
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };
    
        let layout = {
            title: "Bacteria Cultures Per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
            yaxis: {title: "Number of Bacteria"}
        };
    
        Plotly.newPlot("bubble", [bubbleChart], layout)
        });
}

//------------------------------------------------------------------------------------------
//function that initializes the dashboard
function init(){

    //load the data from the URL 
d3.json(url).then(data => 
    {
        //console.log(data); tested data output here

        //get the names key using the d3.json
        let sampleNames = data.names;
        //console.log(sampleNames); tested data output here

        //to access the dropdown, can use D3 to select the select tag with the "#selDataset" id
        let selector = d3.select("#selDataset");

        //use the list of sample names to populate the dropdown
        for(var i = 0; i < sampleNames.length; i++)
        {
            selector.append("option").text(sampleNames[i]).property("value", sampleNames[i]);
        }

        /*
        <select id="selDataset" onchange="optionChanged(this.value)"></select>
            <option value="940">940</option>
            <option value="941">941</option>
            <option value="940">943</option>
        */

        let sample1 = sampleNames[0];

        //call the function to build the metadata
        demoInfo(sample1);
        //call the function to build the bar chart
        buildBarChart(sample1);
        //call the function to build the bubble chart
        buildBubbleChart(sample1);
}
);
};

//-----------------------------------------------------------------------
//function that updates the dashboard
function optionChanged(item){
    //call the update to the metadata
    demoInfo(item);
    //call function to build the bar chart
    buildBarChart(item);
    //call function to build the bubble chart
    buildBubbleChart(item);

};



init();




