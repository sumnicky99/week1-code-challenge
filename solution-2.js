// Function to calculate the demerit points
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
        return 0;
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`You've exceeded the speed limit. Demerit points: ${demeritPoints}`);
        return demeritPoints;
    }
}

// Trying it out:
const carSpeed = 160;
const demeritPoints = calculateDemeritPoints(carSpeed);
console.log("Total demerit points:", demeritPoints);



