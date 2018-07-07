/****************************************/
/**** Intégration fichiers CSS et JS ****/
/****************************************/
function ajout_stylesheet(tagN, typeN, linkCss, classFile, elemInte, elemBefore)
{
	var link_elem = document.createElement(tagN);
	link_elem.type = typeN;
	link_elem.className = classFile;
	
	if(tagN == "link")
	{
		link_elem.rel = "stylesheet";
		link_elem.media = "screen";
		link_elem.href = linkCss;
	}
	else
	{
		link_elem.src = linkCss;
	}
		
	elemInte.insertBefore(link_elem, elemBefore);
}

/********************************************/
/**Fonction pour lancer le son sur androïd **/
/********************************************/
var audio1 = document.getElementById("introduction_sound");
var audio3 = document.getElementById("vent_sound");

function lance_son_introduction()
{
	audio1.play();
}


/*****************************************/
/***** Retrait page intro sauf fleur *****/
/*****************************************/
function effacer_intro()
{
	$('#titre_DALP').fadeOut('slow');
	$('#vous_presente').fadeOut('slow');
	$('#poeme_dansant').fadeOut('slow');
	$('#all_flower').fadeOut(5000);
	
	// Retrait des scripts de l'introduction
	setTimeout(function()
	{
		$('#all_flower').addClass('fixed_position');
		$('#titre_DALP').remove();
		$('#vous_presente').remove();
		$('#poeme_dansant').remove();
		$('#flower_5, #flower_4, #flower_3, #flower_2').css('visibility','hidden');
		$(".file_intro").remove();
	}, 4000);
	
	// Application nouvel Etat : choix page suivant l'intro
	setTimeout(function(){ETAT = next_ETAT;}, 6000);
}


$(function () 
{
	/*************************************/
	/******** Action play / pause ********/
	/*************************************/
	$("#btn_pause").click(function() {
		$('#btn_pause').fadeOut('slow');
		$('#btn_play').fadeIn('slow');
		clearInterval(setAfficheStrophe);
	});
	
	$("#btn_play").click(function() {
		$('#btn_play').fadeOut('slow');
		$('#btn_pause').fadeIn('slow');
		setAfficheStrophe = setInterval(affiche_strophe, 12000);
	});
	
});