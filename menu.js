//****************************************************************************************************************** */
//****************************************************************************************************************** */
var preloader = document.getElementById("loading");

function loadpage() {
    preloader.style.display = 'none';
};
//****************************************************************************************************************** */
//****************************************************************************************************************** */

let sld = document.querySelector('.slider1sect');
let in_sld = document.querySelector('.ssInner');
 sld.onmousedown()
let pressed = false;
let startX;
let d;

sld.addEventListener('mousedown', (e) => {
    pressed = true;
    startX = e.offsetX - in_sld.offsetLeft;
    sld.style.cursor = 'grabbing';
});

sld.addEventListener('mouseenter', () => {
    sld.style.cursor = 'grab';
});
sld.addEventListener('mouseup', () => {
    sld.style.cursor = 'grab';
    pressed = false;
});
sld.addEventListener('mousemove', (e) => {
    if (!pressed) return;
    e.preventDefault();
    d = e.offsetX;
    in_sld.style.left = (d - startX);
    console.log(d - startX);
    checkBoundary();
});
function checkBoundary() {
    let outer = sld.getBoundingClientRect();
    let inner = in_sld.getBoundingClientRect();

    if (parseInt(in_sld.style.left) > 0) {
        in_sld.style.left = `0`;
    } else if (inner.right > outer.right) {
        in_sld.style.left = `-(inner.width - outer.width)`;
    }
}
//****************************************************************************************************************** */
//****************************************************************************************************************** */

let rv = document.querySelector('.rws');
let x = 0, y = 1, z = 2;

function rwtoggleRight() {
    if (z < 5) {
        rv.children[x].classList.remove('rwactive');
        rv.children[z].classList.remove('a3');
        rv.children[y].classList.remove('a2');
        rv.children[x].classList.remove('a1');
        z++;
        y++;
        x++;
        rv.children[z].classList.add('rwactive');
        rv.children[z].classList.add('a3');
        rv.children[y].classList.add('a2');
        rv.children[x].classList.add('a1');
    }

}
function rwtoggleLeft() {
    if (x > 0) {
        rv.children[z].classList.remove('rwactive');
        rv.children[z].classList.remove('a3');
        rv.children[y].classList.remove('a2');
        rv.children[x].classList.remove('a1');
        z--;
        y--;
        x--;
        rv.children[x].classList.add('rwactive');
        rv.children[z].classList.add('a3');
        rv.children[y].classList.add('a2');
        rv.children[x].classList.add('a1');
    }
}
//****************************************************************************************************************** */
//****************************************************************************************************************** */

let sld_2 = document.querySelector('.slider2sect');
let in_sld_2 = document.querySelector('.ssInner_2');

let pressed_2 = false;
let startX_2;
let d_2;

sld_2.addEventListener('mousedown', (e) => {
    pressed_2 = true;
    startX_2 = e.offsetX - in_sld_2.offsetLeft;
    sld_2.style.cursor = 'grabbing';
});

sld_2.addEventListener('mouseenter', () => {
    sld_2.style.cursor = 'grab';
});
sld_2.addEventListener('mouseup', () => {
    sld_2.style.cursor = 'grab';
    pressed_2 = false;
});
sld_2.addEventListener('mousemove', (e) => {
    if (!pressed_2) return;
    e.preventDefault();
    d_2 = e.offsetX;
    in_sld_2.style.left = (d_2 - startX_2);
    checkBoundary_2();
});
function checkBoundary_2() {
    let outer_2 = sld_2.getBoundingClientRect();
    let inner_2 = in_sld_2.getBoundingClientRect();
    
    if (parseInt(in_sld_2.style.left) > 0) {
        in_sld_2.style.left = `0`;
    } else if (inner_2.right > outer_2.right) {
        in_sld_2.style.left = `-(inner_2.width - outer_2.width)`;
    }
}
//****************************************************************************************************************** */
//****************************************************************************************************************** */

let mld = document.querySelector('.ms');

mld.addEventListener('mouseenter',()=>{
    
})
