const zone = document.querySelector('.gameBlock');
const test = document.querySelector('#test')



zone.ondragover = allowDrop;

function allowDrop (event) {
    event.preventDefault();
}

// zone.ondragstart = drag;
test.ondragstart = drag;
function drag (event) {
    event.dataTransfer.setData('id', event.target.id)
}

zone.ondrop = drop;

function drop (event) {
    let itemId = event.dataTransfer.getData('id');
    event.target.append(document.querySelector(itemId))
}