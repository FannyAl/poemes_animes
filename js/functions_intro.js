/******************************/
/********** Variables *********/
/******************************/
//var audio1 = document.getElementById("introduction_sound");


/******************************/
/** Affichage animation page **/
/******************************/
$(function () 
{
	$("#play_animation").click(function() {
		lance_son_introduction();
		lance_animation_intro();
	});
	
	function lance_animation_intro()
	{
		$("#play_animation").remove();
		
		/*Application des animations css*/
		$('#flower_1').css(
		{
			'-o-animation-name': 'shaking, growing, growing_ret',
			'-webkit-animation-name': 'shaking, growing, growing_ret',
			'-moz-animation-name': 'shaking, growing, growing_ret',
			'animation-name': 'shaking, growing, growing_ret',
		});
		
		$('#flower_2').css(
		{
			'-o-animation-name': 'openingPart1_right, openingPart1_right_ret',
			'-webkit-animation-name': 'openingPart1_right, openingPart1_right_ret',
			'-moz-animation-name': 'openingPart1_right, openingPart1_right_ret',
			'animation-name': 'openingPart1_right, openingPart1_right_ret',
		});
		
		$('#flower_3 ').css(
		{
			'-o-animation-name': 'openingPart1_left, openingPart1_left_ret',
			'-webkit-animation-name': 'openingPart1_left, openingPart1_left_ret',
			'-moz-animation-name': 'openingPart1_left, openingPart1_left_ret',
			'animation-name': 'openingPart1_left, openingPart1_left_ret',
		});
		
		$('#flower_4').css(
		{
			'-o-animation-name': 'openingPart2_right, openingPart2_right_ret',
			'-webkit-animation-name': 'openingPart2_right, openingPart2_right_ret',
			'-moz-animation-name': 'openingPart2_right, openingPart2_right_ret',
			'animation-name': 'openingPart2_right, openingPart2_right_ret',
		});
		
		$('#flower_5').css(
		{
			'-o-animation-name': 'openingPart2_left, openingPart2_left_ret',
			'-webkit-animation-name': 'openingPart2_left, openingPart2_left_ret',
			'-moz-animation-name': 'openingPart2_left, openingPart2_left_ret',
			'animation-name': 'openingPart2_left, openingPart2_left_ret',
		});
		
		$('.flower_spine').css(
		{
			'-o-animation-name': 'spin_moove, spin_moove_ret',
			'-webkit-animation-name': 'spin_moove, spin_moove_ret',
			'-moz-animation-name': 'spin_moove, spin_moove_ret',
			'animation-name': 'spin_moove, spin_moove_ret',
		});
		
		$('#all_flower').css(
		{
			'-o-animation-name': 'flower_top, flower_top_ret',
			'-webkit-animation-name': 'flower_top, flower_top_ret',
			'-moz-animation-name': 'flower_top, flower_top_ret',
			'animation-name': 'flower_top, flower_top_ret',
		});
		
		$('#titre_DALP, #vous_presente').css(
		{
			'-o-animation-name': 'affich_titre',
			'-webkit-animation-name': 'affich_titre',
			'-moz-animation-name': 'affich_titre',
			'animation-name': 'affich_titre',
		});
		
		
		$('#content_page').fadeIn('slow');
		setTimeout(function(){$('#left_courbe').animate({left:0, opacity:1},2000);}, 23000);
		setTimeout(function(){$('#ses_PoemesA').animate({left:'32%', opacity:1},500);}, 24500);
		setTimeout(function(){$('#poemes_PoemesA').animate({left:'40%', opacity:1},500);}, 25000);
		setTimeout(function(){$('#animes_PoemesA').animate({left:'55%', opacity:1},500);}, 25500);
		setTimeout(function(){$('#right_courbe').animate({right:0, opacity:1},2000);}, 26000);
		setTimeout(effacer_intro, 32000);
	}
})