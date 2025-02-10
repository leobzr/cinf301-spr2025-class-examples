/*
 * See https://stackoverflow.com/questions/45656949/how-to-return-the-row-and-column-index-of-a-table-cell-by-clicking
 * which includes a Jquery solution too.
 */

window.onload = function () {
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('click', () =>
            elems_exchange(cell.closest('tr').rowIndex, cell.cellIndex));
    });
}

function elems_exchange(i, j) {
    const table = document.querySelector('table');
    const val1 = table.rows[i].cells[j].innerHTML;

    let k = j + 1;
    let numRows = table.rows.length; // not used, but this gets num rows
    if (k > table.rows[i].cells.length - 1) {
        k = 0;
    }
    const val2 = table.rows[i].cells[k].innerHTML;

    table.rows[i].cells[j].innerHTML = val2.toString();
    table.rows[i].cells[k].innerHTML = val1.toString();
}

