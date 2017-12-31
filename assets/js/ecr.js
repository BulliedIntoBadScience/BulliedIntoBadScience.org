$(document).ready(function() {
    var ecr = $("#sign").DataTable({
	data: sign,
	ordering: false,
	columns: [
	    { data: 'Title and Name' },
	    { data: 'Title' },
	    { data: 'Department and Institution' }
	]
    });

    // var necr = ecr.column().data().length;
    // document.querySelector('#necr').innerHTML = necr;
});
