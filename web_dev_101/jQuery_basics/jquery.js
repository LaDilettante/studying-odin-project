var genGrid = function(num_grid) {
	var square = "<div class='square'></div>";
	var row = "<div class='row'></div>";
	var cell = "<div class='cell'></div>";

	for (var i = 1; i <= num_grid; i++) {
	    $(".grid_container").append($(row));
	}
	for (var i = 1; i <= num_grid; i++) {
		$(".row").append($(cell));
	}
	$(".cell").append($(square));

	$(".square").mouseenter(function() {
		$(this).addClass("blue");
	});
};


$(document).ready( function() {
	genGrid(4);

	$("button").click(function() {
		$(".grid_container").empty();
		var input_num = prompt("How many cells?");
		alert(input_num);
		genGrid(input_num);
	});
});


/*$(document).ready(function() {
	

	
});

*/