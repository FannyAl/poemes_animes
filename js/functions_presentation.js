/******************************/
/********** Variables *********/
/******************************/
var setAfficheSaison;
var setAfficheStrophe;

// Son transition
var audio1 = document.getElementById("fretillement_sound"); 
var audio2 = document.getElementById("bol_generique_sound");
var msg_interaction_fleur = document.getElementById('msg_interaction_1');
var div_generique_affiche = document.getElementById('div_generique');


/******************************/
/** Affichage animation page **/
/******************************/
$(function () 
{
	$('#top_affiche').fadeIn('slow');
	$('#bottom_affiche').fadeIn('slow');
	
	lecture_automatique_poeme();
	
	
	/*************************************/
	/***** Ajout bande son sur hover *****/
	/*************************************/
	$("#flower_1").mouseenter(function() {
	  audio1.play();
	});
	
	/*************************************/
	/**** Affichage strophe sur click ****/
	/*************************************/
	$("#flower_1").click(function() {
	  affiche_strophe();
	});
	
	
	/*************************************/
	/******* Gestion affichage ***********/
	/***** message intéraction hover *****/
	/*************************************/
	$("#flower_1").mouseover(function() {
		if((msg_interaction_fleur.style.display == 'none')&&
		   (div_generique_affiche.style.display != 'block'))
		{
			 cache_msg_interaction();
		}
	});
	
	$("#flower_1").mouseout(function() {
		if((msg_interaction_fleur.style.display == 'none')&&
		   (div_generique_affiche.style.display != 'block'))
		{
			affiche_msg_interaction();
		}
	});
	
	
	/*************************************/
	/****** Action icône Integrale *******/
	/*************************************/
	$("#integrale").click(function() {
	  affiche_poeme();
	});
	
	$("#ico_integrale").click(function() {
	  affiche_poeme();
	});
	
	
	/*************************************/
	/******* Action icône Rejouer ********/
	/*************************************/
	$("#rejouer").click(function() {
	  rejouer_poeme();
	});
	
	$("#ico_rejouer").click(function() {
	  rejouer_poeme();
	});
	
	
	/*************************************/
	/******** Action icône Fermer ********/
	/*************************************/
	$("#quitter").click(function() {
	  quitter_poeme();
	});
	
	$("#ico_quitter").click(function() {
	  quitter_poeme();
	});
})


/******************************/
/***** Affichage générique ****/
/******************************/
function affiche_generique()
{
	audio2.play();
	$('#contenu_poeme').fadeOut();
	$('#div_generique').fadeIn('slow');
	$('#msg_interaction_2').fadeOut();
	$('#msg_interaction_2').css({'visibility':'hidden'});
	$('#btn_play').fadeOut('slow');
	$('#btn_pause').fadeOut('slow');
	clearTimeout(setAfficheStrophe);
}


/******************************/
/****** Affichage poème *******/
/******************************/
function affiche_poeme()
{
	// Retrait du générique
	$('#div_generique').fadeOut('slow');
	$('#contenu_poeme').fadeIn('slow');
	
	// Récupération de toutes les strophes du poèmes
	$('.currentStrophe').removeClass('currentStrophe');
	$('.strophe').addClass('currentStrophe');
	
	// intégration génrique à la fin du poème intégrale 
	$('#generique_integrale').css({'visibility':'visible'});
	$('#generique_integrale').find('h3').css({'visibility':'visible'});
	$('#generique_integrale').find('a').css({'visibility':'visible'});
	
	// Affichage du poème intégrale
	$('.strophe').delay(500).fadeIn('slow');
	$('#bottom_affiche').css({'overflow-y':'scroll', 'overflow-x': 'hidden'});
	$('.AnimSpan').css({'font-size':'18px'});
	$('.strophe span').css({'visibility':'visible', 'opacity':'1'});
	$('span').css({'visibility':'visible', 'opacity':'1'});
}


/******************************/
/******* Rejouer poème ********/
/******************************/
function rejouer_poeme()
{
	$('#bottom_affiche').remove();
	ETAT = 5;
}


/*************************************/
/***** Affichage nom de la saison ****/
/*************************************/
function affich_saison()
{
	$('#nom_saison').textillate(
	{
		in:
		{ 
			effect: 'tada',
			callback: function() {
				$('#nom_saison').textillate('out');
			}
		},
		out:{ 
				effect: 'tada',
				delayScale: 1,
				reverse: true,
				callback: function() 
				{
					$('#nom_saison').fadeOut('slow');
				}
			}
	});
}
		
function retrait_saison()
{
	$('#nom_saison').textillate(
	{
		out:{ effect: 'fadeOutDownBig'}
	});
}


/*************************************/
/********* Affichage strophe *********/
/*************************************/
function anime_affiche_strophe(stropheAffiche)
{
	$('.AnimSpan').css('font-size','24px');
	$('.strophe span').animate({left:'30%', opacity:1},1500);
	
	var spanStrophe = stropheAffiche.getElementsByTagName('span');
	var spanTextillate = spanStrophe.getElementsByClassName
	
	
	for(var i=0 ; i<spanStrophe.length ; i++)
	{
		if(spanStrophe[i].className == 'AnimSpan')
		{
			$(spanStrophe[i]).css('display','inline');
			$(spanStrophe[i]).textillate(
			{
					in:{ effect: 'flip'}
			});
		}
	}
	
	audio1.play();
}


/*************************************/
/********** Retrait strophe **********/
/*************************************/
function anime_retrait_strophe()
{
	$('.strophe span').textillate(
	{
		out:{ effect: 'fadeOut'}
	});
}


/******************************/
/***** Affichage strophe ******/
/******************************/
function affiche_strophe()
{
	// Retrait consigne interaction
	$('#msg_interaction_1').fadeOut();
	$('#msg_interaction_2').fadeOut();
	$('.strophe span').css('opacity', '0');
	
	var affi_generique = document.getElementById('div_generique');
	var affi_generique_integrale = document.getElementById('generique_integrale');
	var propr_affi_generique = affi_generique.style.display;
	var propr_affi_generique_integrale = affi_generique_integrale.style.visibility;
	
	// Actif uniquement si version non-intégrale, version en cours de lecture sans générique
	if(((propr_affi_generique == undefined)||(propr_affi_generique == "")||(propr_affi_generique == "none"))&&
	   ((propr_affi_generique_integrale == undefined)||(propr_affi_generique_integrale == "")||(propr_affi_generique_integrale == "hidden")))
	{
		// Arrêt animation : affichage d'une saison
		clearTimeout(setAfficheSaison);
		
		// Variables
		var nextStrophe, previousStrophe, newStrophe;
		var titrePoeme = document.getElementById('nom_poeme');
		var listeStrophe = document.getElementsByClassName('strophe');
		
		// Récupération strophe en cours de lecture //
		$('#contenu_poeme').fadeIn('slow');
		nextStrophe = document.getElementsByClassName('currentStrophe')[0];
		if(nextStrophe)
		{
			for(var i=0 ; i<listeStrophe.length-1 ; i++)
			{
				if(nextStrophe.id == "Strophe_"+String(i))
				{
					$(nextStrophe).fadeOut('slow');
					$(nextStrophe).removeClass('currentStrophe');
					newStrophe = listeStrophe[i+1];
				}
			}
			nextStrophe = newStrophe;
			
			// Affiche générique //
			if(nextStrophe == undefined)
			{
				affiche_generique();
			}
		}
		// Sélection de la première strophe du poème //
		else
		{
			nextStrophe = listeStrophe[0];
		}
		
		// Style apparition texte
		$(nextStrophe).addClass('currentStrophe');
		$(nextStrophe).fadeIn(2000, function()
		{
			anime_affiche_strophe(nextStrophe);
		});
	}
}


/*************************************/
/******** Lecture automatique ********/
/*************************************/
function lecture_automatique_poeme()
{
	$('#btn_pause').fadeIn('slow');
	affiche_strophe();
	setAfficheStrophe = setInterval(affiche_strophe, 15000);
}


/************************************************/
/***** cache / affiche message interaction ******/
/************************************************/
function cache_msg_interaction()
{
	//$('#msg_interaction_2').css({'visibility': 'hidden' , 'display':'none', 'opacity':'0'});
}

function affiche_msg_interaction()
{
	//$('#msg_interaction_2').css({'visibility': 'visible', 'display':'block', 'opacity':'1'});
}


/******************************/
/******* Quitter poème ********/
/******************************/
function quitter_poeme()
{
     window.close(); 
}