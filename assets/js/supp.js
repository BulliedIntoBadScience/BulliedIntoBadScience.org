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
    
    var nsupp = suptab.column(0).data().length;
    document.querySelector('#nsupp').innerHTML = nsupp;
;
});

