// let firstArray = [1, 2, 3]
// let secondArray = [100, 2, 1, 10]

function findItems() {
    let firstArray = document.getElementById('firstArray').value.split(',').map(item => item.trim());
    let secondArray = document.getElementById('secondArray').value.split(',').map(item => item.trim());

    let converttoSet = new Set([...firstArray, ...secondArray]);

    let backtoArray = [...converttoSet];

    document.getElementById('items').textContent = backtoArray.join(', ');
}
