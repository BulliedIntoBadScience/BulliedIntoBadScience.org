$(document).ready(function() {
    var tab = $("#supp").DataTable( {
	data: supp,
	columns: [
	    { data: 'Name' },
	    { data: 'Job Title' },
	    { data: 'Affiliation' },
	    { data: 'What actions will/do you take to better support ECRs?'},
	    { data: 'Any other comments?'}
	]
    });
    var nr = tab.column(0).data().length;
    document.querySelector('#nr').innerHTML = nr;
});

