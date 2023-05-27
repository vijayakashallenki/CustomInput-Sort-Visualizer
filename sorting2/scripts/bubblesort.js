async function bubbleSort() {
    console.log("Bubble Sort running");
    disableInputs();
    const arr = document.querySelectorAll(".bar");
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            arr[j].style.background = '#f9259d';
            arr[j + 1].style.background = '#f9259d';
            if (parseInt(arr[j].innerHTML) > parseInt(arr[j + 1].innerHTML)) {
                await swap(arr, j, j + 1);
            }
            arr[j].style.background = '#25f9eb';
            arr[j + 1].style.background = '#25f9eb';
        }
        arr[arr.length - i - 1].style.background = '#f98125';
        await animate(waitTime);
    }

    for (let k = 0; k < arr.length; k++) {
        arr[k].style.background = '#f98125';
        await animate(100 / randomArray.length);
    }
    enableInputs();
}
