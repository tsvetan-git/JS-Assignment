function addRow() {
    var table = document.getElementById("table");
    var tr = document.getElementsByTagName("tr");
    var count = tr.length;
    var row = table.insertRow(count);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "new cell";
    cell2.innerHTML = "new cell";
}
