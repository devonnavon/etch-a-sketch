main()

function main(){
    const container = document.querySelector('.container');
    createGrid(100, container)
    const reset = document.querySelector('#reset');
    const set = document.querySelector('#set');
    const random = document.querySelector('#random');
    applyReset(reset);
    applySet(set, container);
}

function addElement(container){
    const gridElement = document.createElement('div');
    gridElement.classList.add('element');
    gridElement.addEventListener('mouseenter', (e) => {
        gridElement.classList.add('draw')
    });
    container.appendChild(gridElement);
}

function createGrid(n, container){
    //add evenly sized columns based on n
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
    container.style.cssText = `
        grid-template-columns: repeat(${n}, ${100/n}%);
        grid-auto-rows: ${100/n}%;`;
    [...Array(n*n).keys()].forEach(e => {
        addElement(container)
    });
}

function applyReset(reset){
    reset.addEventListener('click', (e) =>{
        document.querySelectorAll('.element').forEach((element) => {
            element.classList.remove('draw');
        });
    }); 
}

function applySet(set, container){
    set.addEventListener('click', (e) =>{
        res = prompt("Enter Resolution", 100);
        createGrid(res, container)
    }); 
}
