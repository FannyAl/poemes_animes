var ETAT = 0;
var next_ETAT = saison_poem;


/******************************/
/******* Gestion saisons ******/
/******************************/
$(function () 
{
	function affiche_page()
	{

		switch(ETAT)
		{
			// Affichage intro
			case 0:
			affichage_style_intro();
			affichage_page_intro();
			ETAT = "0_fin";
			break;
			
			// Affichage Poème - saison : Frétillement
			case 1:
			affichage_style_fretillement();
			$('#all_flower').fadeIn('slow');
			affichage_poeme_fretillement();
			ETAT = "1_fin";
			break;
			
			// Affichage Poème - saison : Aux portes de la vie 
			case 2:
			ETAT = "2_fin";
			break;
			
			// Affichage Poème - saison : Croissance 
			case 3:
			ETAT = "3_fin";
			break;
			
			// Affichage Poème - saison : Eclosion 
			case 4:
			ETAT = "4_fin";
			break;
			
			// Affichage Présentation
			case 5:
			affichage_style_presentation();
			affichage_presentation();
			ETAT = "5_fin";
			break;
				
			default:
			break;
		}
	}
	
	setInterval(affiche_page, 2000);
})