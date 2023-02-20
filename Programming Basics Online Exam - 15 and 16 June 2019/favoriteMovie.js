function movie(input) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let bestMovie = '';
    for (let n = 1; n <= 7; n++) {
        let currentMovie = input.shift();
        let sum = 0;
        if (currentMovie == 'STOP') {
            console.log(`The best movie for you is ${bestMovie} with ${maxSum} ASCII sum.`);
            return;
        }
        let length = currentMovie.length;
        for (let i = 0; i < length; i++) {
            if (
                currentMovie.charCodeAt(i) >= 65 &&
                currentMovie.charCodeAt(i) <= 90
            ) {
                sum -= currentMovie.length;
            } else if (
                currentMovie.charCodeAt(i) >= 97 &&
                currentMovie.charCodeAt(i) <= 122
            ) {
                sum -= 2 * currentMovie.length;
            }
            sum += currentMovie.charCodeAt(i)
        }
        if (sum > maxSum) {
            maxSum = sum;
            bestMovie = currentMovie;
        }
    }
    console.log(`The limit is reached.`);
    console.log(`The best movie for you is ${bestMovie} with ${maxSum} ASCII sum.`);
}
movie((["Matrix",
"Breaking bad",
"Legend",
"STOP"]))
