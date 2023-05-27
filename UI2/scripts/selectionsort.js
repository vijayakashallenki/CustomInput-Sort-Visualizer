async function selectionSort() {
    console.log("Selection Sort running");
    disableInputs();
    const arr = document.querySelectorAll(".bar");
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        arr[minIndex].style.background = '#f9259d';

        for (let j = i + 1; j < n; j++) {
            arr[j].style.background = '#f9259d';
            if (parseInt(arr[j].innerHTML) < parseInt(arr[minIndex].innerHTML)) {
                arr[minIndex].style.background = '#25f9eb';
                minIndex = j;
                arr[minIndex].style.background = '#f9259d';
            } else {
                arr[j].style.background = '#25f9eb';
            }
            await animate(waitTime);
        }

        if (minIndex !== i) {
            await swap(arr, i, minIndex);
        }

        arr[i].style.background = '#25f9eb';
        arr[minIndex].style.background = '#25f9eb';
        arr[n - i - 1].style.background = '#f98125';
        await animate(waitTime);
    }
    for (let k = 0; k < arr.length; k++) {
        arr[k].style.background = '#f98125';
        await animate(100 / randomArray.length);
    }

    enableInputs();
}
