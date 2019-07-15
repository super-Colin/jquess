


let selection = {
    piece:'',
    row:'',
    column:''
};

let index = {
    x: '',
    y: ''
}

// anytime the board is clicked update the selection
$( "#chess_board").click(function( event ) {

    selection.piece = event.target.getAttribute("piece");
    selection.row = event.target.getAttribute("row");
    selection.column = event.target.getAttribute("column");


    $( "#log" ).html( "clicked: " + event.target.getAttribute("row") + "x" + event.target.getAttribute("column") + "<br />" + selection.piece);
    // console.log(selection.row);



});

$( "#super_btn").click(function() {


    console.log(selection.piece+ " and " + selection.row + "x" + selection.column);


    if (selection.piece === "b_pawn" || selection.piece === "w_pawn") {
        console.log("and this is a pawn!!!!")
    }


});

