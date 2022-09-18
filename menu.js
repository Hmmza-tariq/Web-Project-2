//****************************************************************************************************************** */
//****************************************************************************************************************** */
let preloader = document.querySelector(".load");
window.addEventListener('load', () => {
    preloader.style.display = 'none';
});
//****************************************************************************************************************** */
//****************************************************************************************************************** */

function openNav() {
    document.querySelector(".head").style.width = "300px";
    document.querySelector(".navmenu").style.marginLeft = "300px";
    document.querySelector('.home').innerHTML = 'Home<hr><span class="inner"><ul>Main Home </ul><ul>Home SAAS </ul><ul>Home Business </ul><ul>Home Political </ul><ul>Home Education </ul><ul>Home Event </ul><ul>Home Church </ul></span><hr>';
}

function closeNav() {
    document.querySelector(".head").style.width = "0";
    document.querySelector(".navmenu").style.marginLeft = "0";
    document.querySelector('.home').innerHTML = 'Home';
}

//****************************************************************************************************************** */
//****************************************************************************************************************** */

document.querySelector('.home').addEventListener('mouseenter', menu_in);
document.querySelector('.hm').addEventListener('mouseleave', menu_out);

function menu_in() {
    document.querySelector('.homesect').classList.remove('visible');
}

function menu_out() {
    document.querySelector('.homesect').classList.add('visible');
}

//****************************************************************************************************************** */
//****************************************************************************************************************** */

let sld = document.querySelector('.slider1sect');
let in_sld = document.querySelector('.ssInner');

let pressed = false;
let startX;
let w;

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
    w = e.offsetX;
    in_sld.style.left = `${w - startX}px`;
    checkBoundary();
});

function checkBoundary() {
    let outer = sld.getBoundingClientRect();
    let inner = in_sld.getBoundingClientRect();

    if (parseInt(in_sld.style.left) > 0) {
        in_sld.style.left = `0px`;
    }
    if (inner.right < outer.right) {
        in_sld.style.left = `-${inner.width - outer.width}px`;
    }
}

// ****************************************************************************************************************** */
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
let w_2;

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
    w_2 = e.offsetX;
    in_sld_2.style.left = (w_2 - startX_2);
    checkBoundary_2();
});

function checkBoundary_2() {
    let outer_2 = sld_2.getBoundingClientRect();
    let inner_2 = in_sld_2.getBoundingClientRect();

    if (parseInt(in_sld_2.style.left) > 0) {
        in_sld_2.style.left = `0px`;
    } else if (inner_2.right < outer_2.right) {
        in_sld_2.style.left = `-${inner_2.width - outer_2.width}px`;
    }
}
//****************************************************************************************************************** */
//****************************************************************************************************************** */

let mld = document.querySelector('.ms');

mld.addEventListener('mouseenter', () => {

})
//****************************************************************************************************************** */
//****************************************************************************************************************** */

function counter() {
    let i = 0, j = 0, k = 0, l = 0;
    const myInterval_1 = setInterval(() => {
        document.querySelector('.countgp1').innerText = `${i}+`;
        i += 100;
        if (i > 6000) {
            clearInterval(myInterval_1);
        }
    }, 10);

    const myInterval_2 = setInterval(() => {
        document.querySelector('.countgp2').innerText = `${j}+`;
        j++;
        if (j > 90) {
            clearInterval(myInterval_2);
        }
    }, 10)

    const myInterval_3 = setInterval(() => {
        document.querySelector('.countgp3').innerText = `${k}+`;
        k++;
        if (k > 10) {
            clearInterval(myInterval_3);
        }
    }, 50)

    const myInterval_4 = setInterval(() => {
        document.querySelector('.countgp4').innerText = `${l}%`;
        l++;
        if (l > 100) {
            clearInterval(myInterval_4);
        }
    }, 10)
}

let cnt = false;
window.addEventListener('scroll', reveal);
function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 70;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active_1')
            if (cnt === false) {
                counter();
                cnt = true;
            }

        }
    }
}
//****************************************************************************************************************** */
//****************************************************************************************************************** */
