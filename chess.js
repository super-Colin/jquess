let clicked = {};

let selection = {
    piece:'',
    row:'',
    col:''
};
let last_selection = {};


let new_selector = '';
let selector = '';
let last_selector = '';

let move_selector = [''];
let last_move_selector = [''];
let remove_moves = false;


let side = false;
let piece = false;


// piece movement
let direction = '';
let moved = false;



// anytime the board is clicked
$( "#chess_board").click(function( event ) {

    // spacer between click functions
    console.log('-----------')

    // updating the selection variable
    clicked.piece = event.target.getAttribute("piece");
    clicked.row = event.target.getAttribute("row");
    clicked.col = event.target.getAttribute("column");


    
    selection_update(); //deciding if the clicked square is a piece or not
    add_selected_class(); // if it is we add a class to it to highlight it

    if (remove_moves == true){
        remove_valid_moves(); //if there are already valid moves remove them
    }
    
    piece_check(); // check what piece and execute that piece's move function
    add_valid_moves(); // highlight the valid move squares

    // move_piece();


});

    


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



//------------------ GO!!1! -----------------------------

// the game setup function call
$( document ).ready(function() {
    console.log( "ready!" );
    game_setup()
});