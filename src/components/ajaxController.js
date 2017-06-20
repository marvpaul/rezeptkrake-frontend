var ingredientsAndId;
var ingredients = new Array;
//TODO: Dont works the first char typing in a letter


//TODO: Delete all saved ingredients / restore them
function search(){
    dataModel.data.loading = true;
    url = "ingredientsSearch?";
    for(i = 0; i < dataModel.data.addedItems.length; i++){
        url += "ingredient=" + dataModel.data.addedItems[i][0].text + "&amount=" + dataModel.data.addedItems[i][2].text + "&";
    }
    $.ajax({url: url, success: function(result){
        dataModel.data.loading = false;
        dataModel.data.showProp = 1;
        console.log(result);
        //$("#results").append(result);
        viewResults(JSON.parse(JSON.stringify(result)));

    }});

}
