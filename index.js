/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps

//global variable

let div = null;

// Step 1 - create onload handler
window.onload = () => {
	main();
};

function main() {
	const root = document.getElementById('root');
	const btn = document.getElementById('change-btn');
	const input = document.getElementById('input');
	const copy = document.getElementById('copy');

	btn.addEventListener('click', function () {
		

		
			//check is it 6 digit hexa
			const bgColor = generateHXColor();

			if( `${bgColor.length}` == 5){
				root.style.backgroundColor = `#0${bgColor}`;
				input.value = `#0${bgColor}`;

			}
			else{
				root.style.backgroundColor = `#${bgColor}`;
				input.value = `#${bgColor}`;

			}


	
	});
//copy button handler
    copy.addEventListener('click', function(){

            navigator.clipboard.writeText(input.value);
//check div is null??

		if( div !== null ){
			div.remove();
			div= null;
			}
// show a tox msg 
    toastMeassage(`${input.value} copied`);

    })

}

// step 2 - random color generator function


function generateHXColor() {
	// rgb(0, 0, 0), rgb(255, 255, 255)
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function toastMeassage(msg){
 div = document.createElement('div');

div.innerText = msg;
div.className ='toastMsg toastMsg-slide-in';

document.body.appendChild(div);

	div.addEventListener('click', function(){
		div.classList.remove('toastMsg-slide-in');
		div.classList.add('toastMsg-slide-out');

		div.addEventListener('animationend', function(){
			div.remove();
			div = null;
		})
	
	})

}

// step 3 - collect all necessary references

// step 4 - handle the click event