# Belly-Button-Challenge
This repository contains my submission for the Module 14 Challenge due on 2/4. All of the work present has been created by myself, Molly Pfefferkorn. My instructor, Dr. Carl Arrington, provided troubleshooting feedback during the designated office hours of this class. Data for this dataset was generated by edX Boot Camps LLC, and is intended for educational purposes only.
-------------------------------
For this assignment, I created an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the various microbial species that colonize human navels. The goal was to build a dynamic web application that visualizes the microbial data in meaningful ways, allowing users to explore the diversity of microbial life within individual samples.

I used D3.js to read in the samples.json file and created a dashboard that consists of multiple components. The first visualization was a horizontal bar chart that displayed the top 10 Operational Taxonomic Units (OTUs) for a selected individual. I utilized sample_values as the values for the bar chart, otu_ids as the labels, and otu_labels as the hovertext to provide additional information on the chart. This chart dynamically updated when a new sample was selected from the dropdown menu, ensuring the data stayed relevant to the user's choice.

Next, I created a bubble chart that visualized each sample's microbial data. In this chart, I used otu_ids for the x-axis values, sample_values for the y-axis values and marker size, and otu_labels for the text values that appeared when hovering over the bubbles. The colors of the markers were also mapped to otu_ids, providing a visually distinct way to differentiate between the various OTUs. Like the bar chart, the bubble chart also updated dynamically when a new sample was selected.
In addition to the plots, I displayed metadata for each sample, including the individual's demographic information. I looped through the metadata JSON object to create a text string and appended it to the #sample-metadata panel, ensuring that the displayed information updated each time a new sample was selected.

The entire app was successfully deployed to GitHub Pages, allowing users to easily access the interactive dashboard. Throughout the process, I made sure to commit regularly to the repository, ensuring all changes were tracked. The final result is a fully interactive visualization of microbial data that updates dynamically based on user input, providing insights into the diversity of microbial species within human navels.
This project helped me deepen my understanding of working with JSON data, building interactive visualizations with D3.js and Plotly, and deploying web applications through GitHub Pages.

