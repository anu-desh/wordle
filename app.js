console.log('Wordle');
let currentBox = 0;

function buildBoard(){
    for (let i = 0; i < 30; i++){
        let box = document.createElement('div');
        box.className = 'items'
        box.id = 'item'+i;
        document.getElementById('game-board').append(box);
    }
}

function buildKeys(){
    let rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

    board = document.getElementsByClassName('keyboard')[0];
    for (let j = 0; j < 3; j++){
        let row  = document.createElement('div');
        row.className = row+j;
        if(j==2){
            let key = document.createElement('button');
            key.className = 'keys'
            key.id = 'submit'
            key.innerHTML = 'ENTER'
            row.append(key)
        }
        for (let i = 0; i < rows[j].length; i++){
            let key = document.createElement('button');
            key.className = 'keys'
            key.id = 'key_'+rows[j][i];
            key.innerHTML =  rows[j][i]
            keyPress(key,rows[j][i])
            row.append(key);
        }
        if(j==2){
            let key = document.createElement('button');
            key.className = 'keys'
            key.id = 'delete'
            key.innerHTML = 'DELETE'
            deleteLetter(key);
            row.append(key)
        }
        board.append(row);
    }
}

function deleteLetter(button){
    button.addEventListener('click',function(){
        if(currentBox>0){
            let num = 'item'+(currentBox-1);
            document.getElementById(num).innerHTML = '';
            currentBox--;
        }
    }) 
}

function keyPress(button, letter){
    button.addEventListener('click', function(){
        let num = 'item'+currentBox;
        document.getElementById(num).innerHTML = letter;
        currentBox++;
    }) 
}

buildBoard();
buildKeys();