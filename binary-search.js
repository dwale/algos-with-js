const vals = [1, 2,3,4,5,5,6,7,8];

const binarySearch = (val, arr) => {
    let lower = 0;
    let upper = arr.length - 1;

    while (lower <= upper) {
        console.log('try')
        const middle = lower +  Math.floor((upper - lower)/ 2);

        if (val === arr[middle]) {
            return middle;
        }

        if ( val < arr[middle]) {
             upper = middle - 1
        }
        else {
            lower = middle + 1
        }



    }

    return -1
}


console.log('value found', binarySearch(10, vals));