function affichage_presentation()
{
	$('#content_page').fadeIn('slow');
	
	var div_content_page = document.getElementById("content_page");

	/************** Image encre ***************/
	var img_encre = document.createElement('img');
	img_encre.id = 'img_dalp';
	img_encre.src = 'images/estampe.png';
	
	
	/******** Bouton lecture / pause *********/
	$('#btn_pause').fadeIn();
	
	
	/*---------------------------------------*/
	/*------------- Présentation ------------*/
	/*---------------------------------------*/
	
	$('#all_flower').css('visibility', 'hidden');
		
	/*---------------------------------------*/
	/*----- Affichage partie inférieure -----*/
	/*---------------------------------------*/
				
	var div_bottom_affiche = document.createElement('div');
	div_bottom_affiche.id = "bottom_affiche";
					
	var div_contenu_poeme = document.createElement('div');
	div_contenu_poeme.id = "contenu_poeme";	
				
	var i=0;
	/* Function pour générer les div strophes */
	function genereStrophe(texte_poeme, elemInte, classN)
	{
		var ind = i;
		var p_poeme = document.createElement('p');
		p_poeme.id = "Strophe_"+ind;
		p_poeme.className = "strophe";
		
		if(classN)
		{
			p_poeme.className += " " + classN;
		}
		
		p_poeme.innerHTML = texte_poeme;			
		elemInte.appendChild(p_poeme);	
		i++;
	}
				
	genereStrophe(strophes_poem[0],div_contenu_poeme);
	genereStrophe(strophes_poem[1],div_contenu_poeme);
	genereStrophe(strophes_poem[2],div_contenu_poeme);
	genereStrophe(strophes_poem[3],div_contenu_poeme);
	genereStrophe(strophes_poem[4],div_contenu_poeme);
	genereStrophe(strophes_poem[5],div_contenu_poeme);
	genereStrophe(strophes_poem[6],div_contenu_poeme, 'lastStrophe');
				
	
	/*---------------------------------------*/
	/*-------------- Générique --------------*/
	/*---------------------------------------*/
						
	var div_generique_integrale = document.createElement('div');
	div_generique_integrale.id = "generique_integrale";
						
	var h3_text_animation = document.createElement('h3');
	h3_text_animation.id = "text_animation";
	h3_text_animation.innerHTML = "Texte : Thierry LEMOINE";
						
	/* Générer liste de boutons icones */					
	function genere_li_elem_generique(idLI, eventLI, txt_lgd, elemInte)
	{
		var li_elem_g = document.createElement('li');
		li_elem_g.id = idLI;
		li_elem_g.className = "li_icone";
							
		var img_elem_g = document.createElement('img');
		img_elem_g.id = 'ico_'+ idLI;
		img_elem_g.className = "img_icone";
		img_elem_g.src = "images/ico_"+ idLI +".png";
		
		switch(idLI)
		{
			case "integrale":
			li_elem_g.onclick = function() {affiche_poeme();};
			img_elem_g.onclick = function() {affiche_poeme();};
			break;
			
			case "rejouer":
			li_elem_g.onclick = function() {rejouer_poeme();};
			img_elem_g.onclick = function() {rejouer_poeme();};
			break;
			
			case "quitter":
			li_elem_g.onclick = function() {quitter_poeme();};
			img_elem_g.onclick = function() {quitter_poeme();};
			break;
		}
							
		var h6_elem_g = document.createElement('h6');
		h6_elem_g.id = "txt_" + idLI;
		h6_elem_g.className = "legende_icone";
		h6_elem_g.innerHTML = txt_lgd;
							
		li_elem_g.appendChild(img_elem_g);
		li_elem_g.appendChild(h6_elem_g);
		elemInte.appendChild(li_elem_g);
	}
						
	function genere_liste_icones_generique(elemInte)
	{
		var ul_liste_icones = document.createElement('div');
		ul_liste_icones.id = "liste_icones";
		
		var div_logo_generique = document.createElement('div');
		div_logo_generique.id = "div_logo_generique";
							
		var img_logo_generique = document.createElement('img');
		img_logo_generique.id = "logo_generique";
		img_logo_generique.className = "logo";
		img_logo_generique.src = "images/fleur_contour.png";
		
		var a_text_site_inernet = document.createElement('a');
		a_text_site_inernet.id = "text_site_inernet";
		a_text_site_inernet.href = "https://dialogueavecleprintemps.org/";
		a_text_site_inernet.innerHTML = "https://dialogueavecleprintemps.org/";
		a_text_site_inernet.target = "_blank";
							
		genere_li_elem_generique("integrale", "affiche_poeme()", "Integrale", ul_liste_icones);
		genere_li_elem_generique("rejouer", "rejouer_poeme()", "Rejouer", ul_liste_icones);
		genere_li_elem_generique("quitter", "quitter_poeme()", "Quitter", ul_liste_icones);
			
		elemInte.appendChild(ul_liste_icones);
		div_logo_generique.appendChild(img_logo_generique);
		elemInte.appendChild(div_logo_generique);
		elemInte.appendChild(a_text_site_inernet);
	}	
					
					
	var div_generique = document.createElement('div');
	div_generique.id = "div_generique";
						
	var h3_text_animation2 = document.createElement('h3');
	h3_text_animation2.id = "text_animation";
	h3_text_animation2.innerHTML = "Animation : Fanny ALLIAUME<br>Texte : Thierry LEMOINE";				
	/*-------------- Fin - Générique --------------*/
				
		
		
	/*---------------------------------------*/
	/*------- Insertion des éléments --------*/
	/*---------------------------------------*/
	
		
	div_generique_integrale.appendChild(h3_text_animation);
	genere_liste_icones_generique(div_generique_integrale);
	div_contenu_poeme.appendChild(div_generique_integrale);
		
	div_generique.appendChild(h3_text_animation2);
	genere_liste_icones_generique(div_generique);
		
	div_bottom_affiche.appendChild(img_encre);
	div_bottom_affiche.appendChild(div_contenu_poeme);
	div_bottom_affiche.appendChild(div_generique);
		
	div_content_page.appendChild(div_bottom_affiche);
}


function affichage_style_presentation()
{
	var head_doc = document.getElementsByTagName('head')[0];
	var affichage_view_link = head_doc.getElementsByClassName('view_file')[0];
	
	ajout_stylesheet("link", "text/css", "css/styles/Style_presentation.css", "file_presentation", head_doc, affichage_view_link);
	ajout_stylesheet("link", "text/css", "css/styles/Style_adaptive_presentation.css", "file_presentation", head_doc, affichage_view_link);
	ajout_stylesheet("script", "text/javascript", "js/functions_presentation.js", "file_presentation", head_doc, affichage_view_link);
}