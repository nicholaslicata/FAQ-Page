const openBtns = document.querySelectorAll('.open-btn');
const questionContainers = document.querySelectorAll('.question-container');
const pContainers = document.querySelectorAll('.p-container');

openBtns.forEach(btn => btn.addEventListener('click', showContent));

function showContent(e) {
    if (e.target.classList.contains('one')) {
    pContainers[0].classList.toggle('p-active');
    changeButtonText(pContainers[0], openBtns[0]);
    } else if (e.target.classList.contains('two')) {
        pContainers[1].classList.toggle('p-active');
        changeButtonText(pContainers[1], openBtns[1])
    } else if (e.target.classList.contains('three')) {
        pContainers[2].classList.toggle('p-active');
        changeButtonText(pContainers[2], openBtns[2]);
    }
  
}

function changeButtonText(pContainer, btn) {
    if (pContainer.classList.contains('p-active')) {
        btn.textContent = 'x';
    } else {
        btn.textContent = '+';
    }
}
