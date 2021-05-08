const vals = [7, 24,3,4,5,544,6,7,8];


const bubbleSort = (arr) => {
    for (let i = 0 ; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] < arr[j - 1]) {
                var temp = arr[j - 1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    console.log(arr);
    return;
}

bubbleSort(vals);