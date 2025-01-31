let url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

function init(){
d3.json(url).then(data => 
    {
        console.log(data);

        //get the names key
        let sampleNames = data.names;
        console.log(sampleNames);

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
}
);
};

init();