$(document).ready(function() {

    var suptab = $("#supp").DataTable( {
	data: supp,
	columns: [
	    { data: 'Name' },
	    { data: 'Job Title' },
	    { data: 'Affiliation' },
	    { data: 'What actions will/do you take to better support ECRs?'},
	    { data: 'Any other comments?'}
	]
    });

    var ecr = $("#sign").DataTable({
	data: sign,
	ordering: false,
	columns: [
	    { data: 'Title and Name' },
	    { data: 'Title' },
	    { data: 'Department and Institution' }
	]
    });

    var win = window.location.pathname;
    
    if (win == '/supporters/') {
	document.getElementById('n').innerHTML = suptab.column(0).data().length;
	console.log(suptab.column(0).data().length);	
    } else if (win == '/signatories/') {
	document.getElementById('n').innerHTML = ecr.column(0).data().length;
	console.log(ecr.column(0).data().length);
    } 
    
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

});
