function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if (arr[0] > arr[1]) {
        return 1
    } else if (arr[rightIdx] < arr[rightIdx - 1]) {
        return rightIdx
    } else {

        let pivotIdx = findPivot(arr, leftIdx, rightIdx)
        return pivotIdx
    }
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


module.exports = findRotationCount