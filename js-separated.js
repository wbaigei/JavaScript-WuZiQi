var ended = false;
var zi = 0;
var color = 'black';
var colorNum = 1;
var qipan = $('#qipan');
// make 15*button.col_btn 15 * div.raw
for (var i = 0; i < 15; i++) {
            var raw = $('<div class="raw"></div>');
            for (var j = 0; j < 15; j++) {
                var col_btn = $('<button class="col_btn"></button>');
                col_btn.attr('id', i + '-' + j);
                col_btn.attr('onclick', 'chess(this)');
                raw.append(col_btn);
            }
            qipan.append(raw);
        }
var chess_arr = [
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
];
function win(arr) {
    var count_black = 0;
    var count_white = 0;
    // 横向
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            if ((arr[i][j] == 1) && (arr[i][j] == arr[i][j + 1]) && (arr[i][j] == arr[i][j + 2]) && (arr[i][j] == arr[i][j + 3]) && (arr[i][j] == arr[i][j + 4])) {
                count_black++;
            } else if ((arr[i][j] == 2) && (arr[i][j] == arr[i][j + 1]) && (arr[i][j] == arr[i][j + 2]) && (arr[i][j] == arr[i][j + 3]) && (arr[i][j] == arr[i][j + 4])) {
                count_white++;
            }
            if (count_black == 4) {
                end('黑子赢了');
                return true;
            } else if (count_white == 4) {
                end('白子赢了');
                return true;
            }
        }
    }
    count_black = 0;
    count_white = 0;
    // 纵向
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            if ((arr[i][j] == 1) && (arr[i][j] == arr[i + 1][j]) && (arr[i][j] == arr[i + 2][j]) && (arr[i][j] == arr[i + 3][j]) && (arr[i][j] == arr[i + 4][j])) {
                count_black++;
            } else if ((arr[i][j] == 2) && (arr[i][j] == arr[i + 1][j]) && (arr[i][j] == arr[i + 2][j]) && (arr[i][j] == arr[i + 3][j]) && (arr[i][j] == arr[i + 4][j])) {
                count_white++;
            }
            if (count_black == 4) {
                end('黑子赢了');
                return true;
            } else if (count_white == 4) {
                end('白子赢了');
                return true;
            }
        }
    }
    count_black = 0;
    count_white = 0;
    // 斜向
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            if ((arr[i][j] == 1) && (arr[i][j] == arr[i + 1][j + 1]) && (arr[i][j] == arr[i + 2][j + 2]) && (arr[i][j] == arr[i + 3][j + 3]) && (arr[i][j] == arr[i + 4][j + 4])) {
                count_black++;
            } else if ((arr[i][j] == 2) && (arr[i][j] == arr[i + 1][j + 1]) && (arr[i][j] == arr[i + 2][j + 2]) && (arr[i][j] == arr[i + 3][j + 3]) && (arr[i][j] == arr[i + 4][j + 4])) {
                count_white++;
            }
            if (count_black == 4) {
                end('黑子赢了');
                return true;
            } else if (count_white == 4) {
                end('白子赢了');
                return true;
            }
        }
    }
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            if ((arr[i][j] == 1) && (arr[i][j] == arr[i - 1][j + 1])) {
                count_black++;
                console.log(count_black);
            } else if ((arr[i][j] == 2) && (arr[i][j] == arr[i - 1][j + 1])) {
                count_white++;
            }
            if (count_black == 4) {
                end('黑子赢了');
                return true;
            } else if (count_white == 4) {
                end('白子赢了');
                return true;
            }
        }
    }
    count_black = 0;
    count_white = 0;
}
var chess = function(element) {
    if (!ended) {
        if (document.getElementById(element.id).innerHTML == '') {
            $(`#${element.id}`).append(`<div class="circle_${color}"></div>`);
            chess_arr[element.id.split('-')[0]][element.id.split('-')[1]] = colorNum;
            console.log(chess_arr);
            if (color === 'black') {
                color = 'white';
                colorNum = 2;
            } else {
                color = 'black';
                colorNum = 1;
            }
            zi++;
            $('#xiaqifang').html(`当前下棋方：${color === 'black' ? '黑子' : '白子'}`);
            $('#dinkezi').html(`第${zi}颗子`);
            if (win(chess_arr)) {
                return;
            }
        } else {
            message('该位置已有棋子！');
        }
    }
}
function end(m) {
    message(m);
    ended = true;
    $('#qipan').append(`<div class="cover">当前胜利方：${m.split('子赢了')[0]}<br>下子数：${zi}颗子</div>`);
}
// (C) BaiG 2022. All rights reserved.
