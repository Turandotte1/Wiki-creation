$(window).keydown(function (e){
	if ((e.metaKey || e.ctrlKey) && e.keyCode == 80) { // ctrl+p or command+p
		rename_page();
		//e.preventDefault();
		//return false;
	}
});

function rename_page(){

	var pdf_name = "";
	//var currentLanguage = $('html').attr('lang');
	var currentLanguage = window.location.pathname.substr(1,2);

	pdf_name += $("#article-header .article-author").text();
	pdf_name += "_";
	pdf_name += $("#article-header .article-title").text();
	pdf_name += "_";
	pdf_name += currentLanguage.toUpperCase();

	//Remove space
	pdf_name = pdf_name.replace(/\s/g, '');
	pdf_name = pdf_name.replace('&', '');

	//Remove Special Character
	var pdf_name = pdf_name.replace(/[èéêë]/g, 'e').replace(/[ç]/g, 'c').replace(/[àâä]/g, 'a').replace(/[ïî]/g, 'i').replace(/[ûùü]/g, 'u').replace(/[ôöó]/g, 'o');

	document.title = pdf_name;
	//window.print();
}
