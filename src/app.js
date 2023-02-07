/*
* File: app.js
* Author: Németh Ottó
* Copyright: 2023, Németh Ottó
* Group: Szoft I/2/E"
* Date: 2023-02-06
* Github: https://github.com/otto/
* Licenc: GNU GPL
*/

const surfacewrite=document.getElementById("felszín");
const volumewrite=document.getElementById("térfogat");


var r = 5;

var volume = (4 * Math.pow(r, 3) * Math.PI)/3;


var surfaceArea = 4 * Math.PI * Math.pow(r, 2);

function calculateVolume() {
    const diameter = parseFloat(document.getElementById('diameter').value);
    const volume = (4/3) * Math.PI * (diameter/2)**3;
    document.getElementById('result').innerHTML = `A gömb térfogata ${volume.toFixed(2)}`;
    volumewrite.value=volume;
}

function calculateVolume() {
    const surfaceArea = parseFloat(document.getElementById('surfaceArea'));
    const surface = (A=4 *Math.PI * r^2);
    document.getElementById('result').innerHTML = `A gömb felszíne ${volume.toFixed(2)}`;
    surfacewrite.value=surface;
}


console.log('A gömb térfogata ' + volume + ' és a felszíne ' + surfaceArea + '.');