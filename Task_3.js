//The problem was that last then statement received Promise without value (value was 'undefined')

Promise.resolve(1)
 .then(value => { return (value + 1); } )
 .then(alert)