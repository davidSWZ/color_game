//------------------------------------DECLARATION DE VARIABLES--------------------------------
var button = document.querySelectorAll(".color");
var btnNew = document.querySelector("button");
var btnEasy = document.getElementsByTagName("button")[1];
var btnHard = document.getElementsByTagName("button")[2];
var span = document.querySelector("span");
var text = document.getElementsByTagName ("p")[0];
var header = document.getElementsByTagName("header")[0];
var hard = true;
var baseColor = "rgb(44, 142, 153)";
var buttonClicked = document.querySelector(".clicked");

//------------------------------------DECLARATION DES FONCTIONS---------------------
function codeRGB() {
	var c1 = Math.round(Math.random()*255);
	var c2 = Math.round(Math.random()*255);
	var c3 = Math.round(Math.random()*255);
	var couleur = "rgb("+c1+", "+c2+", "+c3+")";
	return couleur;
};

function RGBaTrouver(){
	if (hard){
		var i = Math.round((Math.random()*5));
	}
	else{
		var i = Math.round((Math.random()*2));
	}
	var str = button[i].style.background
	const textColorCoupe = str.split(')');
	span.textContent = textColorCoupe[0] ;
	console.log(span.textContent);
};

function newColor (){
	for (i=0 ; i<button.length; i++){
		button[i].style.background = codeRGB();
	}
	text.textContent = "Devines la couleur du code ci-dessus";
	header.style.background = baseColor;
	btnNew.style.color = baseColor;
	if (hard){
		btnHard.style.background = baseColor;
		btnHard.style.color = "white";
		btnEasy.style.background = "none";
		btnEasy.style.color = baseColor;
	}
	else{
		btnHard.style.background = "none";
		btnHard.style.color = baseColor;
		btnEasy.style.background = baseColor;
		btnEasy.style.color = "white";
	}

	RGBaTrouver();
};

function test(){
	if (span.textContent == this.style.background){
		text.textContent = "Gagné!";
		header.style.background = this.style.background
		for (i=0 ; i<button.length; i++){
			// button[i].classList.add("color");
			button[i].style.background = this.style.background;
		}

		btnNew.style.color = this.style.background;
		if (hard){
			btnHard.style.background = this.style.background;
			btnHard.style.color = "white";
			btnEasy.style.background = "none";
			btnEasy.style.color = this.style.background;
		}
		else{
			btnHard.style.background = "none";
			btnHard.style.color = this.style.background;
			btnEasy.style.background = this.style.background;
			btnEasy.style.color = "white";
		}
	}
	else{
		text.textContent = "Retente ta chance...";
		this.style.background = "rgb(20, 20, 20)";
	}
};

function clicEasy(){
	this.style.background = baseColor;
	this.style.color = "white";
	btnHard.style.background = "none";
	btnHard.style.color = baseColor;
	// this.classList.add("clicked");
	btnHard.classList.remove("clicked");
	hard = false;
	for (i=3; i<6; i++){
	button[i].style.display = "none";
	};
	newColor();
};

function clicHard(){
	hard = true;
	this.style.background = baseColor;
	this.style.color = "white";
	btnEasy.style.background = "none";
	btnEasy.style.color = baseColor;
	// this.classList.add("clicked");
	btnEasy.classList.remove("clicked");
	for (i=3; i<6; i++){
	button[i].style.display = "flex";
	}
	newColor();
};

//-----------------------------------------EVENT----------------------------------
btnNew.addEventListener("click", newColor);
for (i=0; i<button.length; i++){
	button[i].addEventListener("click", test);
};
btnEasy.addEventListener("click", clicEasy);
btnHard.addEventListener("click", clicHard);
//--------------------------------------LAUNCH FUNCTION---------------------------
newColor();
