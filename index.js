const headquarters = 42;

function distanceFromHqInBlocks(blocks){
    return Math.abs(headquarters - blocks)
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, end){
    return Math.abs(end - start) * 264;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);

    if(distance < 400){
        return 0;
    } else if(400 <= distance && distance < 2000){
        return (distance-400)*.02;
    } else if(2000 <= distance && distance < 2500){
        return 25;
    } else{
        return 'cannot travel that far';
    }
}