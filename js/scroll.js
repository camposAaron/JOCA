//Menu fixed
let header = document.querySelector('#header')



//desplazamiento de scroll y logica de menu de navegacion
let buttons = document.querySelectorAll('.navbar-nav a');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            let target = e.currentTarget.getAttribute('href');
            console.log(target)

            switch (target) {
                case 'nosotros.html':
                    window.location.href = target
                    break;

                case 'proyectos.html':{
                    window.Location.href = target
                }break;

                case '#footer':{
                    e.preventDefault()
                    document.querySelector(target).scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    }); 
                }break;

                default: {
                    let href = window.location.href
                    if(!href.includes('index.html')){
                        window.location.href = 'index.html'
                    }

                    e.preventDefault()
                    document.querySelector(target).scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });
                }
                    break;
            }
        } catch (err) {
            console.log(err)
        }
    });
});



