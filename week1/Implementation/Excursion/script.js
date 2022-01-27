// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/excursion-2d080f3a/

const boys = 13 //number of boys in trip
const girls = 7 //number of girls in trip
const seats = 2 //number of seats available per room in hotel


function calculateRoom (){
    const boys = document.getElementById('Boys').value
    const girls = document.getElementById('Girls').value
    const seats = document.getElementById('Seats').value
    let totalRoom = 0;

    //calculation for boys 
    totalRoom += Math.trunc(boys/seats);
    boys%seats ===0 ? null : totalRoom += 1; //rest of the boys for one room

    //calculation for girls
    totalRoom += Math.trunc(girls/seats);
    girls%seats ===0 ? null : totalRoom += 1; //rest of the girls for one room

    document.getElementById('outputDiv').innerText = `total required room is ${totalRoom}`
    
}