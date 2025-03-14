function numberGenerator() {
    let number = parseInt(Math.random() * 100000)
    
    if(number <= 9) {
        return `0000${number}`;
    } else if(number <= 99) {
        return `000${number}`;
    } else if(number <= 999) {
        return `00${number}`;
    } else if(number <= 9999) {
        return `0${number}`;
    } else {
        return number
    }
}

export default numberGenerator;
