// this script is to parse clicks on the board into selection vars

// anytime the board is clicked update the selection
function selection_update() {

    // if the new selection is not in the valid moves area don't update the last_selection var
    if (selection.row != '') {
        last_selection = selection;
    }

    $("#log").html("clicked: " + event.target.getAttribute("row") + "x" + event.target.getAttribute("column") + "<br />" + selection.piece);


};

function add_selected_class() {

    // remove the "selected" class from the last selection
    if (last_selector != '') {
        last_selector.removeClass("selected");
    }
    if (new_selector != '') {
        selector = new_selector;
    }
    // log piece as well as row X column
    console.log(selection.piece + " and " + selection.row + "x" + selection.col);


    //if selection is defined add the "selected" class to the div that was clicked
    if (selection.row != '') {
        selector = $("[column=" + selection.col + "][row=" + selection.row + "]");

        selector.addClass("selected");

        // how to update the piece on the newly clicked square
        // selector.attr("piece", "b_queen");

    }

    // update last selector to remove "selected" class
    last_selector = selector;

};