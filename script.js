const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const p1dis = document.querySelector('#p1dis');
const p2dis = document.querySelector('#p2dis');
const res = document.querySelector('#res');
const play = document.querySelector('#play');
let p1sc = 0;
let p2sc = 0;
let winsc = 3;
p1btn.addEventListener('click', function () {
    if (p1sc !== winsc & p2sc !== winsc) {
        p1sc += 1;
        p1dis.textContent = p1sc;
    }
    if (p1sc === winsc) {
        iswin1()
    }
})
p2btn.addEventListener('click', function () {
    if (p1sc !== winsc & p2sc !== winsc) {
        p2sc += 1;
        p2dis.textContent = p2sc;
    }
    if (p2sc === winsc) {
        iswin2()
    }
})
play.addEventListener('change', function () {
    winsc = parseInt(this.value);
    update();
})
res.addEventListener('click', function () {
    update();
})
function iswin1() {
    p1dis.classList.add('has-text-success')
    p2dis.classList.add('has-text-danger')
    p1btn.disabled = true;
    p2btn.disabled = true;
}
function iswin2() {
    p2dis.classList.add('has-text-success')
    p1dis.classList.add('has-text-danger')
    p1btn.disabled = true;
    p2btn.disabled = true;
}
function update() {
    p1sc = 0;
    p2sc = 0;
    p1dis.textContent = p1sc;
    p2dis.textContent = p2sc;
    p1dis.classList.remove('has-text-success', 'has-text-danger');
    p2dis.classList.remove('has-text-danger', 'has-text-success');
    p1btn.disabled = false;
    p2btn.disabled = false;
}
