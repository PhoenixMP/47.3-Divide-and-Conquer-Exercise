function findRotatedIndex(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let pivotIdx = findPivot(arr, leftIdx, rightIdx)

    if (pivotIdx > 0 && arr[0] <= val && arr[pivotIdx - 1] >= val) {
        return binarySearch(arr, leftIdx, pivotIdx - 1, val);
    } else {
        return binarySearch(arr, pivotIdx, rightIdx, val);
    }

}

function binarySearch(arr, leftIdx, rightIdx, val) {

    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal < val) {
            // middleVal is too small, look at the right half
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            // middleVal is too large, look at the left half
            rightIdx = middleIdx - 1;
        } else {
            // we found our value!
            return middleIdx;
        }
    }

    // left and right pointers crossed, val isn't in arr
    return -1;
}

function findPivot(arr, leftIdx, rightIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2);
    let midVal = arr[midIdx];


    if (midIdx === leftIdx || midIdx === rightIdx) return 0;
    if (arr[midIdx + 1] > midVal && arr[midIdx - 1] > midVal) {
        return midIdx;
    } else if (midVal < arr[rightIdx]) {
        return findPivot(arr, leftIdx, rightIdx = midIdx)
    } else {
        return findPivot(arr, leftIdx = midIdx, rightIdx);
    }

}



module.exports = findRotatedIndex