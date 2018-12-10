function trocaBanner () {
	var banners = ['image1.jpeg','image2.jpeg'];
	var bannerAtual = 0;

	function animacao() {
		bannerAtual = (bannerAtual + 1) % 2;
		document.querySelector('#tela img').src = banners[bannerAtual];
	}

	setInterval(animacao, 4000);
}

trocaBanner();