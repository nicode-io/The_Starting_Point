// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {

    let tbl = document.createElement("TABLE");
    for (let i = 0; i < 10; i++) {
        let row = tbl.insertRow(i);
        for (let j = 0; j < 10; j++) {
            let cell = row.insertCell(j);
            cell.innerHTML = (i + 1) * (j +1);
        } 
    }
    console.log(tbl);
    document.getElementById('target').appendChild(tbl);

})();
