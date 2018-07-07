function affichage_page_intro()
{
	var div_content_page = document. getElementById("content_page");
	
	/*---------------------------------------*/
	/*-------------- Introduction -----------*/
	/*---------------------------------------*/
			
	var div_all_flower = document.createElement('div');	
	div_all_flower.id = "all_flower";
	
	var div_flower_spine = document.createElement('div');	
	div_flower_spine.className = "flower_spine";
	
	/*************************************/
	/** Générer les pétales de la fleur **/
	/*************************************/
	function parts_fower(ind, elemInsert)
	{
		var div_flower_5 = document.createElement('div');	
		div_flower_5.id = "flower_" + ind;
		div_flower_5.className = "flower";
		
		var div_flower_part1 = document.createElement('div');	
		div_flower_part1.className = "flower_part1";
		
		var div_flower_part2 = document.createElement('div');	
		div_flower_part2.className = "flower_part2";
		
		div_flower_5.appendChild(div_flower_part1);
		div_flower_5.appendChild(div_flower_part2);
		elemInsert.appendChild(div_flower_5);
		
		if(ind == '0')
		{
			div_flower_5.appendChild(div_flower_spine);
		}
	}
	
	parts_fower('0', div_all_flower);
	parts_fower('5', div_all_flower);
	parts_fower('4', div_all_flower);
	parts_fower('3', div_all_flower);
	parts_fower('2', div_all_flower);
	parts_fower('1', div_all_flower);
	
			
	/*---------------------------------------*/
	/*----------------- Titres --------------*/
	/*---------------------------------------*/
			
	var h1_title_dialogue = document.createElement('h1');	
	h1_title_dialogue.id = "titre_DALP";		
	h1_title_dialogue.innerHTML = "Dialogue avec le Printemps";		
	
	var h3_vous_presente = document.createElement('h3');	
	h3_vous_presente.id = "vous_presente";		
	h3_vous_presente.innerHTML = "vous présente";	
	
	var div_poeme_dansant = document.createElement('div');	
	div_poeme_dansant.id = "poeme_dansant";
	
	
	/* Courbes sinueuses */
	var img_left_courbe = document.createElement('img');	
	img_left_courbe.id = "left_courbe";
	img_left_courbe.className = "courbes";
	img_left_courbe.src = "images/left_courbe.png";
	
	var img_right_courbe = document.createElement('img');	
	img_right_courbe.id = "right_courbe";
	img_right_courbe.className = "courbes";
	img_right_courbe.src = "images/right_courbe.png";
	
	
	/*---------------------------------------*/
	/*--------- Texte : Poèmes animés -------*/
	/*---------------------------------------*/
	function create_div_p(idDiv, pContent, insertElem)
	{
		var div_text = document.createElement('div');	
		div_text.id = idDiv;
		div_text.className = "anim_poeme_dansant";
		$(div_text).attr('data-in-effect', "rollIn");
		
		var p_text = document.createElement('p');
		p_text.innerHTML = pContent;
		
		div_text.appendChild(p_text);
		insertElem.appendChild(div_text);
	}
	
	create_div_p("ses_PoemesA", "ses", div_poeme_dansant);
	create_div_p("poemes_PoemesA", "poèmes", div_poeme_dansant);
	create_div_p("animes_PoemesA", "animés", div_poeme_dansant);
		
	/****************************/	
	/** Insertion des éléments **/
	/****************************/
	//div_all_flower.appendChild(div_flower_spine);
	div_content_page.appendChild(div_all_flower);
		
	div_content_page.appendChild(h1_title_dialogue);
	div_content_page.appendChild(h3_vous_presente);
		
	div_poeme_dansant.appendChild(img_left_courbe);
	div_poeme_dansant.appendChild(img_right_courbe);
	div_content_page.appendChild(div_poeme_dansant);
}


function affichage_style_intro()
{
	var head_doc = document.getElementsByTagName('head')[0];
	//var affichage_page_link = document.getElementById('affichage_page');
	var affichage_page_link = head_doc.getElementsByClassName('affichage_page')[0];
	
	ajout_stylesheet("link", "text/css", "css/styles/Style_introduction.css", "file_intro", head_doc, affichage_page_link);
	ajout_stylesheet("link", "text/css", "css/styles/Style_adaptive_introduction.css", "file_intro", head_doc, affichage_page_link);
	ajout_stylesheet("link", "text/css", "css/animations/anim_introduction.css", "file_intro", head_doc, affichage_page_link);
	ajout_stylesheet("script", "text/javascript", "js/functions_intro.js", "file_intro", head_doc, affichage_page_link);
}