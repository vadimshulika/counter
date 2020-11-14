var num = 0;
var i = 1;
$('.output').append(num);

function i_index() {
	if ($('input[id="radio_1"]').is(':checked')) {
		i = 1;
	}
	if ($('input[id="radio_2"]').is(':checked')) {
		i = 2;
	}
	if ($('input[id="radio_3"]').is(':checked')) {
		i = 3;
	}
	if ($('input[id="radio_5"]').is(':checked')) {
		i = 5;
	}
	if ($('input[id="radio_10"]').is(':checked')) {
		i = 10;
	}
	if ($('input[id="radio_15"]').is(':checked')) {
		i = 15;
	}
	if ($('input[id="radio_other"]').is(':checked')) {
		i = $('.input_value_i').val();
		i = parseInt(i);
	}
}

function counter_add(){
	num = num + i;
	$('.output').empty();
	$('.output').append(num);
}

function counter_remove(){
	num = 0;
	$('.output').empty();
	$('.output').append(num);
}

function counter_subtract(){
	num = num - i;
	$('.output').empty();
	$('.output').append(num);
}
