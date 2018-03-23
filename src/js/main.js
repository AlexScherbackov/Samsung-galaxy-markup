svg4everybody();

// @include('detect.js')
// @include('globals.js')


const _init = {
	initialization(){
		_init._eventBinding();
	},
	_eventBinding(){
		const mobileBtn = document.querySelector('#mobile-btn');
		mobileBtn.addEventListener('click', ()=>{
			const fixedMenu = document.querySelector('#mobile-menu');
			fixedMenu.classList.toggle('open');
			mobileBtn.classList.toggle('close');
		});
	}
}


$(document).ready(_init.initialization);