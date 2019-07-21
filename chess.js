let selection = {
    piece:'',
    row:'',
    col:''
};
let last_selection = {
    piece:'',
    row:'',
    col:''
};

let new_selector = '';
let selector = '';
let move_selector = ['','',''];
let last_selector = '';
let side = false;

// piece movement
let direction = '';
let moved = false;


// this is run everytime the board is clicked
function run_chess(){
    
}


// anytime the board is clicked update the selection
$( "#chess_board").click(function( event ) {

    // spacer between click functions
    console.log('-----------')

    // updating the selection variable
    selection.piece = event.target.getAttribute("piece");
    selection.row = event.target.getAttribute("row");
    selection.col = event.target.getAttribute("column");


    selection_update();
    add_selected_class();
    piece_check();

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
    console.log('direction is ' + direction)


    if (direction == 'plus'){
        new_row ++;

    }else{
        new_row --;
    }

    move_selector[0] = $("[row="+ new_row +"][column="+ selection.col +"]");
    
    
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