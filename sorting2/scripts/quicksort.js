async function partition(arr, low, high) {
    const pivotValue = parseInt(arr[high].innerHTML);
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (parseInt(arr[j].innerHTML) < pivotValue) {
            i++;
            await swap(arr, i, j);
        }
    }

    await swap(arr, i + 1, high);
    return i + 1;
}

async function swap(arr, i, j) {
    const temp = arr[i].innerHTML;
    arr[i].innerHTML = arr[j].innerHTML;
    arr[j].innerHTML = temp;
    arr[i].style.background = '#f9259d';
    arr[j].style.background = '#f9259d';
    await animate(waitTime);
    arr[i].style.background = '#25f9eb';
    arr[j].style.background = '#25f9eb';
    await animate(waitTime);
}

async function quickSort(arr, low, high) {
    if (low < high) {
        const pivotIndex = await partition(arr, low, high);
        await quickSort(arr, low, pivotIndex - 1);
        await quickSort(arr, pivotIndex + 1, high);
    }
}

async function quick_sort() {
    console.log("Quick Sort running");
    disableInputs();
    let arr = document.querySelectorAll('.bar');
    await quickSort(arr, 0, arr.length - 1);
    for (let k = arr.length - 1; k >= 0; k--) {
        arr[k].style.background = '#f98125';
        await animate(100 / randomArray.length);
    }
    enableInputs();
}
