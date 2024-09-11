var turn = 0
var TL_checked = false
var TC_checked = false
var TR_checked = false
var CL_checked = false
var CC_checked = false
var CR_checked = false
var BL_checked = false
var BC_checked = false
var BR_checked = false
let board = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
];


function Master_Function(Box_Pos) {

    switch (turn) {
        case 0:
            switch(Box_Pos) {
            case 'TL':
                var img_ID = document.getElementById('Box_TL')
                if (TL_checked == false) {
                    change_Box_X(img_ID)
                    TL_checked = true
                    board[0][0]=0
                    checkWinner(turn)
                    turn = 1;

                }

                break;
            case 'TC':
                var img_ID = document.getElementById('Box_TC')
                if (TC_checked == false) {
                    change_Box_X(img_ID)
                    TC_checked = true
                    board[0][1]=0
                    checkWinner(turn)
                    turn = 1;

                }                
                break;
            case 'TR':
                var img_ID = document.getElementById('Box_TR')
                if (TR_checked == false) {
                    change_Box_X(img_ID)
                    TR_checked = true
                    board[0][2]=0
                    checkWinner(turn)
                    turn = 1;

                }
                break;
            case 'CL':
                var img_ID = document.getElementById('Box_CL')
                if (CL_checked == false) {
                    change_Box_X(img_ID)
                    CL_checked = true
                    board[1][0]=0
                    checkWinner(turn)
                    turn = 1;

                }
                break;
            case 'CC':
                var img_ID = document.getElementById('Box_CC')
                if (CC_checked == false) {
                    change_Box_X(img_ID)
                    CC_checked = true
                    board[1][1]=0
                    checkWinner(turn)
                    turn = 1;

                }
                break;
            case 'CR':
                var img_ID = document.getElementById('Box_CR')
                if (CR_checked == false) {
                    change_Box_X(img_ID)
                    CR_checked = true
                    board[1][2]=0
                    checkWinner(turn)
                    turn = 1;

                }
                break;
            case 'BL':
                var img_ID = document.getElementById('Box_BL')
                if (BL_checked == false) {
                    change_Box_X(img_ID)
                    BL_checked = true
                    board[2][0]=0
                    checkWinner(turn)
                    turn = 1;

                }
                break;
            case 'BC':
                var img_ID = document.getElementById('Box_BC')
                if (BC_checked == false) {
                    change_Box_X(img_ID)
                    BC_checked = true
                    board[2][1]=0
                    checkWinner(turn)
                    turn = 1;

                }
                break;
            case 'BR':
                var img_ID = document.getElementById('Box_BR')
                if (BR_checked == false) {
                    change_Box_X(img_ID)
                    BR_checked = true
                    board[2][2]=0
                    checkWinner(turn)
                    turn = 1;
                }
                break;
            }
            console.log(board)


            break;

        
        case 1:
            switch(Box_Pos) {
                case 'TL':
                    var img_ID = document.getElementById('Box_TL')
                    if (TL_checked == false) {
                        change_Box_O(img_ID)
                        TL_checked = true
                        board[0][0]=1

                        checkWinner(turn)
                        turn = 0;

                    }                    
                    break;
                case 'TC':
                    var img_ID = document.getElementById('Box_TC')
                    if (TC_checked == false) {
                        change_Box_O(img_ID)
                        TC_checked = true
                        board[0][1]=1
                        checkWinner(turn)
                        turn = 0;

                    }             
                    break;
                case 'TR':
                    var img_ID = document.getElementById('Box_TR')
                    if (TR_checked == false) {
                        change_Box_O(img_ID)
                        TR_checked = true
                        board[0][2]=1
                        checkWinner(turn)
                        turn = 0;

                    }             
                    break;
                case 'CL':
                    var img_ID = document.getElementById('Box_CL')
                    if (CL_checked == false) {
                        change_Box_O(img_ID)
                        CL_checked = true
                        board[1][0]=1
                        checkWinner(turn)
                        turn = 0;

                    }             
                    break;
                case 'CC':
                    var img_ID = document.getElementById('Box_CC')
                    if (CC_checked == false) {
                        change_Box_O(img_ID)
                        CC_checked = true
                        board[1][1]=1
                        checkWinner(turn)
                        turn = 0;

                    }             
                    break;
                case 'CR':
                    var img_ID = document.getElementById('Box_CR')
                    if (CR_checked == false) {
                        change_Box_O(img_ID)
                        CR_checked = true
                        board[1][2]=1
                        checkWinner(turn)
                        turn = 0;

                    }             
                    break;
                case 'BL':
                    var img_ID = document.getElementById('Box_BL')
                    if (BL_checked == false) {
                        change_Box_O(img_ID)
                        BL_checked = true
                        board[2][0]=1
                        checkWinner(turn)
                        turn = 0;

                    }             
                    break;
                case 'BC':
                    var img_ID = document.getElementById('Box_BC')
                    if (BC_checked == false) {
                        change_Box_O(img_ID)
                        BC_checked = true
                        board[2][1]=1
                        checkWinner(turn)
                        turn = 0;

                    }             
                    break;
                case 'BR':
                    var img_ID = document.getElementById('Box_BR')
                    if (BR_checked == false) {
                        change_Box_O(img_ID)
                        BR_checked = true
                        board[2][2]=1
                        checkWinner(turn)
                        turn = 0;

                    }             
                    break;
            }
            console.log(board)

            break;
    
    
    }

}

function change_Box_X(img_ID) {
    img_ID.src="TTT_Images/istockphoto-1362671957-100x100.jpg"
}
function change_Box_O(img_ID) {
    img_ID.src="TTT_Images/O_icon.png"
}

function checkWinner(turn){
    var in_a_row = 0;



    for (var row = 0; row < board.length; row++) {
        in_a_row = 0;
        for (var col = 0; col < board.length; col++) {
            if (board[row][col] == turn) {
                in_a_row++
            }
        }

    }
    for (var row = 0; row < board.length; row++) {
        in_a_row = 0;
        for (var col = 0; col < board.length; col++) {
            if (board[col][row] == turn) {
                in_a_row++
            }
        }
        
    }



    /*console.log(turn)
    var win = true
    for(var i=0; i < board.length; i++){
        for(var j=0; j < board.length; j++){
            if (board[i][j] != turn){
                win= false
                break;
            }
        }
        if (win){
            return true;
        }
    }

    console.log(win)

    for(var i=0; i < board.length; i++){
        for(var j=0; j < board.length; j++){
            if (board[j][i] != turn){
                win= false
                break;
            }
        }
        if (win){
            return true;
        }
    }
win = true
    for(var i=0; i < board.length; i++){
            if (board[i][i] != turn){
                win= false
                break;
            }
    }
    if (win){
        return true;
    }

    for(var i=0; i < board.length; i++){
        if (board[i][board.length - 1 - i] != turn){
            win= false
            break;
        }
    }
    if (win){
        return true;
    }
    console.log(win)
    return false;
    */
}
