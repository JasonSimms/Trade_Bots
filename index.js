const pool = {
MHK : 229.96,
COF : 157.85,
SNA : 252.40,
KMX : 129.93,
// SPG: 124.25
}

const capital = 5000;

const position = {};

const nextBuy = (availableCapital = 5000) => {
    const avg = availableCapital / Object.keys(pool).length;
    console.log('avg: ',avg);
    const output = {};
    let cost = 0;
    Object.keys(pool).forEach(el => {
        output[el] = Math.floor(avg / pool[el])
        cost += output[el] * pool[el];
    })
    console.log('Cost :',cost);
    console.log('Output1', output);
    const cheapest = Math.min(...Object.values(pool));

    if(availableCapital - cost > cheapest){
        const cheapestTicker = Object.fromEntries(
            Object.entries(pool).filter(([key, value]) => value === cheapest) )   
        console.log('cheapest:', cheapest, 'obj?',cheapestTicker);
        const extraShares = Math.floor((availableCapital - cost)/cheapest);
        console.log("extraShares", extraShares);
        const extraTicker = Object.keys(cheapestTicker)[0];

        output[extraTicker] = output[extraTicker] + extraShares
    console.log('Output2', output);
            
        }

}

nextBuy();