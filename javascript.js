$('.accordion').each(function(e) {
	// on stocke l'accordéon dans une variable locale
	var accordion = $(this);
	// on récupère la valeur data-speed si elle existe
	var toggleSpeed = accordion.attr('data-speed') || 100;

	// fonction pour afficher un élément   
	function open(item, speed) {
		// on récupère tous les éléments, on enlève l'élément actif de ce résultat, et on les cache
		accordion.find('.accordion-item').not(item).removeClass('active')
			.find('.accordion-content').slideUp(speed);
		// on affiche l'élément actif
		item.addClass('active')
			.find('.accordion-content').slideDown(speed);
	}

	// on initialise l'accordéon, sans animation 
	open(accordion.find('.active:first'), 0);

	// au clic sur un titre...
	accordion.on('click', '.accordion-title', function(ev) {
		ev.preventDefault();
		// ...on lance l'affichage de l'élément, avec animation
		open($(this).closest('.accordion-item'), toggleSpeed);
	});
});