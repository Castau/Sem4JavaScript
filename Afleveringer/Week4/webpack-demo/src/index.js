import _ from 'lodash';
import './style.css';
import Icon from './pluto.png';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const myIcon = new Image();
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    myIcon.src = Icon;

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());