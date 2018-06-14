function removeBannerAd() {
		console.log("function working");
		var AdDiv = document.getElementsByClassName('fe-blogs__top-ad-wrapper')[0];
	AdDiv.style.display = "none";
	AdDiv.classList.remove("fe-blogs__top-ad-wrapper");
}

removeBannerAd();