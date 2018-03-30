svg4everybody();

// @include('detect.js')
// @include('globals.js')


const _init = {
	initialization(){
		_init._eventBinding();
		_init._stopPreload();
	},
	_eventBinding(){
		const mobileBtn = document.querySelector('#mobile-btn');
		mobileBtn.addEventListener('click', ()=>{
			const fixedMenu = $('#mobile-menu');
			

			if(fixedMenu.is(":visible")){
				fixedMenu.fadeOut(600);
				$body.css('overflow', 'auto');
				mobileBtn.classList.remove('close');
			} else{
				fixedMenu.fadeIn(600);
				$body.css('overflow', 'hidden');
				mobileBtn.classList.add('close');
			}
		});


	},
	_stopPreload(){
		$(".preloader-container").css('display','none');
	}
}


$document.ready(_init.initialization); 