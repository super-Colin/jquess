function piece_check(){
    // check what color piece is selected
    if (selection.piece.startsWith('w')){
        direction = 'plus';
    } else {
        direction = 'minus';
    }

    // check what piece is in the selected square

    switch (selection.piece) {

        case 'w_king':
        case'b_king':
            console.log('this is the king');
            break;

        case 'w_pawn':
        case 'b_pawn':
            pawn_moves();
            break;

        case 'w_rook':
        case 'b_rook':
            console.log('this is a rook');
            rook_moves()
            break;
    
        case 'w_knight': 
        case 'b_knight':
            console.log('this is a knight');
            break;

        case 'w_bishop':
        case'b_bishop':
            console.log('this is a bishop');
            break;

        case 'w_queen':
        case'b_queen':
            console.log('this is a queen');
            break;

    
        default:
            break;
    }
    // if (selection.piece === "b_pawn" || selection.piece === "w_pawn") {
    //     console.log("and this is a pawn!!!!")
    //     pawn_moves();
    // }
}

function moved_check() {
    if (selector.classList.contains('moved')){
        moved = true;
    }
}

function add_valid_moves() {
    for (i = 0; i < move_selector.length; i++){
        move_selector[i].addClass('valid_move');
        console.log(i + ' moves marked');
        last_move_selector[i] = move_selector[i];
    }
};

function remove_valid_moves(){
    for (i = 0; i < last_move_selector.length; i++){
        last_move_selector[i].removeClass('valid_move');
        console.log(i + ' moves un-marked');
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
        move_selector[1] = $("[row="+ new_row +"][column="+ selection.col +"]");
    }

    // move_selector[1] = $("[row="+ new_row +"][column="+ selection.col +"]");


    // how to update the piece on the newly clicked square
    // console.log(move_selector.length);
    // add_valid_moves();

}

function rook_moves() {

    let new_row = parseInt(selection.row);
    let new_col = parseInt(selection.col);

    console.log('starting with ' + new_row)
    console.log('direction is ' + direction)


    // if (direction == 'plus'){

        //rows up
        for (let i = selection.row; i <= ( 8 - selection.row ); i++) {
            
            move_selector[i] = $("[row="+ new_row +"][column="+ selection.col +"]");

            new_row ++;
        }
        // rows down
        for (let i = 1; i < selection.row; i++) {
            
            move_selector[(move_selector.length)] = $("[row="+ new_row +"][column="+ selection.col +"]");

            new_row --;
        }

        // columns left
        for (let i = selection.col; i <= ( 8 - selection.col ); i++) {
            
            move_selector[(move_selector.length)] = $("[row="+ selection.row +"][column="+ new_col +"]");

            new_col ++;
        }
        // columns right
        for (let i = selection.col; i <= selection.col; i++) {
            
            move_selector[(move_selector.length)] = $("[row="+ selection.row +"][column="+ new_col +"]");

            new_col --;
        }

    // }else{

        // rows down
        for (let i = 1; i < selection.row; i++) {
            
            move_selector[i] = $("[row="+ new_row +"][column="+ selection.col +"]");

            new_row --;
        }
    // }

    move_selector[0] = $("[row="+ new_row +"][column="+ selection.col +"]");

}