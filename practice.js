function createBoard(width, height) {
    let board = [];
    for (let i=0; i<height; i++) {
        board[i] = [];
        for (let j=0; j<width; j++) {
            board[i][j] = 0;
        }
    }
    return board;
}

function new_empty_row(board) {
    let empty_row = [];
    for (let i = 0; i < board[0].length; i++) {
        empty_row[i] = 0;
    }
    return empty_row;
}

function expandBoardUp(board, amount) {
    const new_row = new_empty_row(board);
    for (let i = 0; i < amount; i++) {
        board.unshift(new_row);
    }
}
function expandBoardDown(board, amount) {
    const new_row = new_empty_row(board);
    for (let i = 0; i < amount; i++) {
        board.push(new_row);
    }
}
function expandBoardLeft(board, amount) {
    for (let i = 0; i < amount; i++) {
        for (row of board) {
            row.unshift(0);
        }
    }
}
function expandBoardRight(board, amount) {
    for (let i = 0; i < amount; i++) {
        for (row of board) {
        row.push(0);
        }
    }
}
function expandBoard(board, radius) {
    expandBoardUp(board, radius);
    expandBoardRight(board, radius);
    expandBoardDown(board, radius);
    expandBoardLeft(board, radius);
}

/**
 * 
 * @param {Array<Array>} board 
 * @param {int} x 
 * @param {int} y 
 * @param {int} target_value 
 * @returns {Map}
 */
function boardInARow(board, x, y, target_value) {
    const rows = board.length;
    const cols = board[0].length;
    
    /**
     * Trải qua tất cả giá trị của hướng trong bảng và trả lại điểm kết thúc giá trị liên tiếp
     * @param {int} dx hướng thay đổi hàng (x + dx, y)
     * @param {int} dy hướng thay đổi cột (x, y + dy)
     * @returns {Array<int,int>} điểm
     */
    function checkDirectionEnd(dx, dy) {
        for (let i = 1; i< Math.max(rows, cols); i++) {
            const nx = x + dx*i;
            const ny = y + dy*i;
            if (
                nx < 0 || nx >= cols ||
                ny < 0 || ny >= rows ||
                board[ny][nx] != target_value
            ) {
                return [x + dx*(i-1), y + dy*(i-1)];
            }
        }
    }

    const left_end = checkDirectionEnd(-1, 0);
    const u_left_end = checkDirectionEnd(-1, -1);
    const up_end = checkDirectionEnd(0, -1);
    const u_right_end = checkDirectionEnd(1, -1);
    const right_end = checkDirectionEnd(1, 0);
    const d_right_end = checkDirectionEnd(1, 1);
    const down_end = checkDirectionEnd(0, 1);
    const d_left_end = checkDirectionEnd(-1, 1);
    return {
        horizontal: [left_end, right_end],
        vertical: [up_end, down_end],
        diagonal_left: [u_left_end, d_right_end],
        diagonal_right: [u_right_end, d_left_end]
    }
}




