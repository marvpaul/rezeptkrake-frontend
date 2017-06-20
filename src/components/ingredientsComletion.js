


/* Event handling for pressing enter
TODO: seems wo works not correctly
 */
$(".ui-autocomplete-input").keypress(function (e) {
    if (e.which == '13') {
        addItem();
    }
});
