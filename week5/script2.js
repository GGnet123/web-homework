function bigImg(){
	document.getElementsByTagName("img")[0].src = event.currentTarget.src;
}
	
	const image = document.querySelectorAll("img");
	var i;
	for (i = 0; i < 6; i++) { 
		image[i].addEventListener("click",bigImg);
		}
		