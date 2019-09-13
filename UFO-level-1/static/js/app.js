// Variables
var tableData = data;
var tbody = d3.select("tbody");
var inputField = d3.select("#datetime"); 
var filterButton = d3.select("#filter-btn");

//Exploring Data
//---------------------------------------------------------------

//Data Object
console.log("Data Object:")
console.log(tableData);

//Object's Arrays in seperate lines
console.log("Data's Arrays:");
tableData.forEach(function(ufoEvent) {
    console.log(ufoEvent);
}
);

//HTML Table Amendment - Display all UFO data
//------------------------------------------------------------

//Function to create HTML table to host data
function ufoTable(ufoEvent) {
    var row = tbody.append("tr");
    Object.entries(ufoEvent).forEach(function([key, value]) {
        console.log(key,value);
        //divide rows into cells, add values
        var cell = row.append("td");
        cell.text(value);
    }
    );

};

//Run function to display all data
tableData.forEach(ufoTable);

//Drop table contents (use during table filtration)
function ufoTableDelete (ufoEvent) {
    d3.select("tbody").selectAll("td").remove();
};

//HTML Table Amendment - Filter table based on date input. 
//--------------------------------------------------------------

//Display Date Input Event
inputField.on("change", function() {
  
    var dateSelected = d3.event.target.value;
    //tab after inputting date to display in console. 
    console.log("User Input Date:")
    console.log(dateSelected);
  
  }); 

// Filter Table Event
  filterButton.on("click", function() {
    //filter data by date inputted.
    function dateSelection (dateInput) {
        return dateInput.datetime === d3.select("#datetime").property("value");    
};

    tableData.forEach(ufoTableDelete);

    var filteredTable = tableData.filter(dateSelection);
    console.log("Data by Date Inputted:")
    console.log(filteredTable);

    filteredTable.forEach(ufoTable);
    
}); 

