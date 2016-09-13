$(document).ready(function(){
	window.checked_options = [];
	$('.info').on('click', function(){
		console.log($(this).attr('data-type'));

		if(window.checked_options.indexOf($(this).attr('data-type')) == -1){
			window.checked_options.push($(this).attr('data-type'));
			$(this).find('.fa').removeClass('hidden');
		}else{
			window.checked_options.splice(window.checked_options.indexOf($(this).attr('data-type')), 1);
			$(this).find('.fa').addClass('hidden');
		}
	});

	prevent_submit = true;

	$('.submitBtn').on('click', function(e){
		if (prevent_submit == true){
			e.preventDefault();
			input_value = "Interested In: "
			for(var i = 0; i < checked_options.length; i++){
				input_value += checked_options[i] + ', ';
				console.log(input_value);
			}
			console.log(input_value)
			prevent_submit = false;
			$('.submitBtn').trigger('click');
		}else{
			$('.hidden-input').val(input_value);
			$('.submitBtn').submit();		
		} 
	});

	$('.requestContainer').on('click', function(){
		$('.formContainer').show();
	});

	$('.exit').on('click', function(){
		$('.formContainer').hide()
	});


	var dateNow = new Date();
	var intYear = dateNow.getFullYear();
	document.getElementById("footer").innerHTML = "<p> &copy;" + intYear  + " &nbsp;&nbsp; | &nbsp;&nbsp; all rights reserved " +  "</p>";
});