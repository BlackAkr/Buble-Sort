"use strict";
function BubleSort(arr) {
    if (arr.length == 1 || arr.length == 0)
        return arr;
    else {
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var t = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = t;
            }
        }
    }
    return arr;
}
var arr = [];
window.alert(BubleSort(arr));
