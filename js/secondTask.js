
let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.apply(age, ['Jonh', 'Smith']);

// Second Task
class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	cssText(text) {
		let div = document.createElement('div');
		div.style.height = this.height;
		div.style.width = this.width;
		div.style.background = this.bg;
		div.style.fontSize = this.fontSize;
		div.style.textAlign = this.textAlign;
		div.textContent = text;
		return div;
	}
}

let divElm = new Options('100px', '100px', 'red', '14px', 'right');
let divElmText = divElm.cssText('div text content');
let body = document.querySelector('body');
body.appendChild(divElmText);