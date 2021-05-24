// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)


(() => {
    let tbl = document.createElement("TABLE");
    for (let i = 0; i < 10; i++) {
        tbl.insertRow(0).insertCell(0);  
    }
    console.log(tbl);
    document.getElementById('target').appendChild(tbl);
})();
