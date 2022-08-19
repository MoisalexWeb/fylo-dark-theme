// For Scroll Animations
 AOS.init();

const sendButton = document.querySelector('.newsletter-send');
const errorParagraph = document.querySelector('.newsletter-error');
const input = document.querySelector('.newsletter-input');
const emailExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

sendButton.addEventListener('click',(e)=> {
	e.preventDefault();
	if(!emailExpression.test(input.value)) errorParagraph.classList.add('newsletter-show-error')

	else errorParagraph.classList.remove('newsletter-show-error');
});