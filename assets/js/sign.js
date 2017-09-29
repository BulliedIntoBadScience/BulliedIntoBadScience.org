$(document).ready(function() {
    $("#tab").DataTable( {
	data: tab,
	pageLength: 2,
	searching: false,
	info: false,
	ordering: false,
	paging: false,
	columns: [
	    { data: 'Action 1' },
	    { data: 'Action 2' },
	    { data: 'Action 3' },
	    { data: 'Action 4' },
	    { data: 'Action 5' },
	    { data: 'Action 6' },
	    { data: 'Action 7' },
	    { data: 'Action 8' }
	]
    });
});

