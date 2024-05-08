
function playSound(e) {
    // console.log(e);
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // The [] is an attribute selector
    // console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // This accesses the class of key
    if (!audio) return;
    audio.currentTime = 0; // rewinds to the start
    audio.play();
    //console.log(key);
    key.classList.add('playing');
    // let x = getRandomColor(); // UNCOMMENT FOR FUN COLORS
    // key.style.borderColor = x; // Apply random color
    // key.style.boxShadow = `0 0 1rem ${x}`; // Apply random color
}

function removeTransition(e) {
    // console.log(e);
    if (e.propertyName !== 'transform') return; // skip if it's not a transform
    // console.log(e.propertyName);
    this.classList.remove('playing');

    // can always check what "this" is with a console log (console.log(this);) 
    // in this case, it's equal to the key
    // ( keys.forEach(key => addEventListener('transitionend'. removeTransition));)

    // this.style.borderColor = 'black'; // UNCOMMENT FOR FUN COLORS
    // this.style.boxShadow = 'none';

}

// document.addEventListener('DOMContentLoaded', function() {
//     const keys = document.querySelectorAll('.key');
//     const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'cyan', 'magenta', 'teal', 'lime'];

//     keys.forEach(key => {
//         const randomColor = colors[Math.floor(Math.random() * colors.length)];
//         key.style.backgroundColor = randomColor;
//     });
// });

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    // each key gets transitionend event listener and when the transition ends, we remove it

window.addEventListener('keydown', playSound);

