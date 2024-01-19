let emojis = [
"🐝", "🐝",
"🐱", "🐱",
"🐼", "🐼",
"🐰", "🐰",
"🐸", "🐸",
"🐢", "🐢",
"🐥", "🐥",
"🐺", "🐺"
];

let cardPair = [];

let shuffleEmojis = emojis.sort(
	() => (Math.random() > 0.5 ? 2 : -1)
);

for (let i = 0; i < emojis.length; i++) {
	let card = document.createElement("div");

	card.className = "item";
	card.innerHTML = shuffleEmojis[i];
	card.onclick = handleClick;

	document.querySelector(".game").appendChild(card);
}

let checkingCardPair = false;

function handleClick() {
	if (checkingCardPair ||
		this.classList.contains("cardOpen")
	) {
		return ;
	}

	cardPair.push(this);
	this.classList.add("cardOpen");

	if (cardPair.length == 2) {
		checkingCardPair = true;

		setTimeout(checkCardPair, 500);
	}
}

function checkCardPair() {
	if (cardPair[0].innerHTML !== cardPair[1].innerHTML) {
		cardPair[0].classList.remove("cardOpen");
		cardPair[1].classList.remove("cardOpen");
	}
	cardPair = [];

	if (document.querySelectorAll(".cardOpen").length == emojis.length) {
		alert("You win!");
	}
	checkingCardPair = false;
}
