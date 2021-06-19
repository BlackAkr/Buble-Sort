interface Comparable<T> {
  a: T;
  compare(b: T): number;
}

function BubleSort(arr: number[]): number[] {
  if (arr.length == 1 || arr.length == 0) return arr;
  else {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let t = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = t;
      }
    }
  }
  return arr;
}

let arr: number[]= [];
window.alert(BubleSort(arr));
