$(document).ready(function() {
    var actab = $("#tab").DataTable({
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

    // var antab = $("#an").DataTable({
    // 	data: an,
    // 	pageLength: 5,
    // 	"lengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
    // 	columns: [
    // 	    { data: 'anecdote' }
    // 	]
    // });

    var ecr = $("#sign").DataTable({
	data: sign,
	ordering: false,
	columns: [
	    { data: 'Title and Name' },
	    { data: 'Title' },
	    { data: 'Department and Institution' }
	]
    });
    
    var necr = ecr.column(0).data().length;
    document.querySelector('#necr').innerHTML = necr;
    
});
