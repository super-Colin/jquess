let selection = {
    piece:'',
    row:'',
    column:''
};


let selector = '';
let move_selector = '';
let last_selector = '';

// anytime the board is clicked update the selection
$( "#chess_board").click(function( event ) {


    // updating the selection variable
    selection.piece = event.target.getAttribute("piece");
    selection.row = event.target.getAttribute("row");
    selection.column = event.target.getAttribute("column");


    $( "#log" ).html( "clicked: " + event.target.getAttribute("row") + "x" + event.target.getAttribute("column") + "<br />" + selection.piece);

    add_selected_class();

});

$( "#super_btn").bind("click", add_selected_class);

    function add_selected_class() {

    // remove the "selected" class from the last selection
    if (last_selector != ''){
        last_selector.removeClass("selected");
    }

    // log piece as well as row X column
    console.log(selection.piece+ " and " + selection.row + "x" + selection.column);


    //if selection is defined add the "selected" class to the div that was clicked
    if (selection.row != ''){
        selector = $("[column="+ selection.column +"][row="+ selection.row +"]");

        selector.addClass("selected");
        // console.log("added class");
        selector.attr("piece", "b_queen");

    }


    if (selection.piece === "b_pawn" || selection.piece === "w_pawn") {
        console.log("and this is a pawn!!!!")
    }

    // update last selector to remove "selected" class
    last_selector = selector;


};


function get_sides() {
    $('[w_queen]').getAttribute('row')
}

//------------------Movement Functions-----------------------------


function pawn_moves() {

move_selector = "something";

}




