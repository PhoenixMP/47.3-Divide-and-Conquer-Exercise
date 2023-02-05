

function sortedFrequency(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if (arr[leftIdx] === val && arr[rightIdx] == val) return arr.length;
    if (arr[rightIdx] < val) return -1;

    leftIdx = findFirst(leftIdx, rightIdx, arr, val);
    if (leftIdx === -1) return -1;

    rightIdx = findLast(leftIdx, rightIdx, arr, val);
    return rightIdx - leftIdx + 1;
}


function findFirst(leftIdx, rightIdx, arr, val) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2);
    let midVal = arr[midIdx];

    if (midVal > val || (midVal === val && arr[midIdx - 1] === val)) {
        return findFirst(leftIdx, rightIdx = midIdx, arr, val);
    } else if (midVal < val) {
        if (arr[midIdx + 1] === val) {
            return midIdx + 1;
        } else {
            return findFirst(leftIdx = midIdx, rightIdx, arr, val);
        }
    } else if (midVal === val && arr[midIdx - 1] != val) {
        return midIdx;
    }
}


function findLast(leftIdx, rightIdx, arr, val) {
    if (arr[rightIdx] === val) return rightIdx;

    let midIdx = Math.floor((rightIdx + leftIdx) / 2);
    let midVal = arr[midIdx];

    if (midVal > val) {
        return findLast(leftIdx, rightIdx = midIdx, arr, val);
    } else if (midVal === val && arr[midIdx + 1] === val) {
        return findLast(leftIdx = midIdx, rightIdx, arr, val);
    } else {
        return midIdx;
    }
}

module.exports = sortedFrequency