
$(document).ready(function() {
    var table = $('#dataTable').DataTable({
        "paging": true,
        "pageLength": 10 // Display maximum 10 rows per page
    });

    $('#uploadBtn').on('click', function() {
        var fileInput = document.getElementById('fileInput');
        var file = fileInput.files[0];
        if (file) {
            Papa.parse(file, {
                header: true,
                complete: function(results) {
                    displayData(results.data);
                }
            });
        } else {
            alert('Please select a file.');
        }
    });

    $('#nextBtn').on('click', function() {
        table.page('next').draw('page');
    });
});

function displayData(data) {
    var table = $('#dataTable').DataTable();
    table.clear().draw();
    for (var i = 0; i < data.length; i++) {
        table.row.add([
            data[i].Name,
            data[i].Email
            // Add more columns as needed
        ]).draw();
    }
}
