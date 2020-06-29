let input = document.getElementById('myinput');
let add1 = document.getElementById('add')
let log = document.getElementById('log');

add1.onclick = inputsave; // save data click on button

function inputsave() { //create a function to save data
    if (input.value == "") {
        alert('please enter some value') //checking if data is inserted or not
    } else {
        let newt = document.querySelector('body'); //save data to a new element
        let element = document.createElement('p');
        newt.appendChild(element);

        let stext = input.value;
        element.innerHTML = stext;

        let cb = document.createElement('input'); //create a new element checkbox
        cb.type = 'checkbox';
        element.appendChild(cb);
        cb.onclick = clickcb;
        let dbtn = document.createElement('button'); //create a delete button
        dbtn.innerHTML = "DELETE";
        element.appendChild(dbtn);
        dbtn.onclick = btnd;
    }

    function clickcb(perform) { //get the parent item
        let s = perform.target.parentNode;
        // cut a line text while click on check box
        s.style.textDecoration = 'line-through';
        // provide the text at last
        s.parentNode.appendChild(s);
    }

    function btnd(perform) {
        let s = perform.target.parentNode; //remove the task from list
        s.parentNode.removeChild(s);
    }






}