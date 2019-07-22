let clicked = {};

let selection = {
    piece:'',
    row:'',
    col:''
};
let last_selection = {};


let new_selector = '';
let selector = '';
let move_selector = [''];
let last_selector = '';


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


    selection_update();
    add_selected_class();
    piece_check();

    if(piece= true){
        // add_valid_moves();
    }


});

    

$( "#super_btn").bind("click", add_selected_class);

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







//------------------ GO!!1! -----------------------------

// the game setup function call
$( document ).ready(function() {
    console.log( "ready!" );
    game_setup()
});