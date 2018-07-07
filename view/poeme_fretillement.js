function affichage_poeme_fretillement()
{
	$('#content_page').fadeIn('slow');
	
	var div_content_page = document. getElementById("content_page");


	/*---------------------------------------*/
	/*------- Poème fretillement n° 1 -------*/
	/*---------------------------------------*/

	var div_top_affiche = document.createElement('div');
	div_top_affiche.id = "top_affiche";
	
	var h1_nom_poeme = document.createElement('h1');
	h1_nom_poeme.id = "nom_poeme";
	h1_nom_poeme.innerHTML = titre_poem;
				
	var h3_msg_interaction_2 = document.createElement('h1');
	h3_msg_interaction_2.id = "msg_interaction_2";
	h3_msg_interaction_2.className = "msg_interaction";
	h3_msg_interaction_2.innerHTML = "Touchez la fleur";
					
		
	/*---------------------------------------*/
	/*----- Affichage partie inférieure -----*/
	/*---------------------------------------*/
				
	var div_bottom_affiche = document.createElement('div');
	div_bottom_affiche.id = "bottom_affiche";
				
	var h3_nom_saison = document.createElement('h3');
	h3_nom_saison.id = "nom_saison";
	h3_nom_saison.innerHTML = "Frétillement n° " + numero_poem;
				
	var h3_msg_interaction_1 = document.createElement('h3');
	h3_msg_interaction_1.id = "msg_interaction_1";
	h3_msg_interaction_1.className = "msg_interaction";
	h3_msg_interaction_1.innerHTML = "Touchez la fleur";
					
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
	
	var strophes_poem_length = strophes_poem.length;
	
	for(var x=0 ; x<strophes_poem_length ; x++)
	{
		if(x == strophes_poem_length-1)
		{
			genereStrophe(strophes_poem[x], div_contenu_poeme, 'lastStrophe');
		}
		else
		{
			genereStrophe(strophes_poem[x], div_contenu_poeme);
		}
	}
				
	
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
		//li_elem_g.onclick = eventLI;
							
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
	div_top_affiche.appendChild(h1_nom_poeme);
	div_top_affiche.appendChild(h3_msg_interaction_2);
		
	div_generique_integrale.appendChild(h3_text_animation);
	genere_liste_icones_generique(div_generique_integrale);
	div_contenu_poeme.appendChild(div_generique_integrale);
		
	div_generique.appendChild(h3_text_animation2);
	genere_liste_icones_generique(div_generique);
		
	div_bottom_affiche.appendChild(h3_nom_saison);
	div_bottom_affiche.appendChild(h3_msg_interaction_1);
	div_bottom_affiche.appendChild(div_contenu_poeme);
	div_bottom_affiche.appendChild(div_generique);
		
	var div_all_flower = document.getElementById('all_flower');
	div_content_page.insertBefore(div_top_affiche, div_all_flower);
		
	div_content_page.appendChild(div_all_flower);
	div_content_page.appendChild(div_bottom_affiche);
		
	$('#all_flower').removeClass('fixed_position');
}


function affichage_style_fretillement()
{
	var head_doc = document.getElementsByTagName('head')[0];
	var affichage_view_link = head_doc.getElementsByClassName('view_file')[0];
	
	ajout_stylesheet("link", "text/css", "css/styles/Style_fretillement.css", "file_fretillement", head_doc, affichage_view_link);
	ajout_stylesheet("link", "text/css", "css/styles/Style_adaptive_fretillement.css", "file_fretillement", head_doc, affichage_view_link);
	ajout_stylesheet("link", "text/css", "css/animations/anim_titre_poeme.css", "file_fretillement", head_doc, affichage_view_link);
	ajout_stylesheet("script", "text/javascript", "js/functions_fretillement.js", "file_fretillement", head_doc, affichage_view_link);
}