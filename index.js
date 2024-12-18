let timer = document.querySelector('.clock');
let child = document.createElement('div');

setInterval(() => {
    const sound =document.querySelector('audio');
    const time = new Date();
    const timeclicking = {

        timeZone: 'Asia/kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }
    child.textContent = time.toLocaleTimeString(timeclicking)
    sound.play();

}, 1000);
child.style.display = 'flex';
child.style.justifyContent = 'center';
child.style.alignItems = 'center';
child.style.position = 'relative';
child.style.top = '35%';
child.style.fontSize = '2em'
child.style.fontWeight = 'bold'
child.style.border = '5px  dotted black'
timer.appendChild(child)
let






