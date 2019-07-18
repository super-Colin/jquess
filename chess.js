let selection = {
    piece:'',
    row:'',
    col:''
};


let selector = '';
let move_selector = [];
let last_selector = '';
let side = false;

// piece movement
let direction = '';
let moved = false;


// anytime the board is clicked update the selection
$( "#chess_board").click(function( event ) {


    // updating the selection variable
    selection.piece = event.target.getAttribute("piece");
    selection.row = event.target.getAttribute("row");
    selection.col = event.target.getAttribute("column");


    $( "#log" ).html( "clicked: " + event.target.getAttribute("row") + "x" + event.target.getAttribute("column") + "<br />" + selection.piece);


    add_selected_class();
    piece_check();

});

$( "#super_btn").bind("click", add_selected_class);

    function add_selected_class() {

    // remove the "selected" class from the last selection
    if (last_selector != ''){
        last_selector.removeClass("selected");
    }
    // log piece as well as row X column
    console.log(selection.piece+ " and " + selection.row + "x" + selection.col);


    //if selection is defined add the "selected" class to the div that was clicked
    if (selection.row != ''){
        selector = $("[column="+ selection.col +"][row="+ selection.row +"]");

        selector.addClass("selected");

        // how to update the piece on the newly clicked square
        // selector.attr("piece", "b_queen");

    }

    // update last selector to remove "selected" class
    last_selector = selector;

};

//------------------Game Setup-----------------------------


function game_setup(){


    white_side_check()
    if (side = true){

    }


}


function white_side_check() {
    //checking that that white king is on the first row
    let side_check = $('[piece=w_king]').attr("row");
    if (side_check == '1') {side = true;}
    else {console.log('the white king should be on "row=1"')}

    console.log("white side is on 1 = " + side);
}



//------------------Movement Functions-----------------------------

function piece_check(){
    // check what color piece is selected
    if (selection.piece.startsWith('w')){
        direction = 'plus';
    } else {
        direction = 'minus';
    }

    // check what piece is in the selected square
    if (selection.piece === "b_pawn" || selection.piece === "w_pawn") {
        console.log("and this is a pawn!!!!")
        pawn_moves();
    }
}

function moved_check() {
    if (selector.classList.contains('moved')){
        moved = true;
    }
}


function pawn_moves() {

    let new_row = parseInt(selection.row);
    console.log('starting with ' + new_row)
    console.log(direction)


    if (direction == 'plus'){
        new_row ++;

    }else{
        new_row --;
    }

    move_selector[0] = $("[row="+ new_row +"][column="+ selection.col +"]");
    console.log(move_selector);
    
    
    if ( moved == false) {
        if (direction == 'plus'){
            new_row ++;
            console.log('enpassant white');
        } else {
            new_row --;
            console.log('enpassant black');
        }
    }

    move_selector[1] = $("[row="+ new_row +"][column="+ selection.col +"]");
    console.log(move_selector);


    // how to update the piece on the newly clicked square
    move_selector[0].addClass('valid_move');
    move_selector[1].addClass('valid_move');

}




//------------------ GO!!1! -----------------------------

// the game setup function call
$( document ).ready(function() {
    console.log( "ready!" );
    game_setup()
});