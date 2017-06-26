/**
 * TODO: Add a routing for search --> http://router.vuejs.org/en/essentials/getting-started.html
 */
var nResult;
function viewResults(result){
    nResult = JSON.parse(result);
    for(i = 0; i < nResult["recipes"].length; i++){
        if(dataModel.data.recipes[0].length == 0){
            dataModel.data.recipes[i].push({text : nResult["recipes"][i]["name"] });
            dataModel.data.recipes[i].push(nResult["recipes"][i]["link"]);
            dataModel.data.recipes[i].push(nResult["recipes"][i]["imageLink"]);
        } else{
            dataModel.data.recipes.push([{text : nResult["recipes"][i]["name"] }, {text: nResult["recipes"][i]["link"]}, {text : nResult["recipes"][i]["imageLink"]}]);
        }
    }

}
