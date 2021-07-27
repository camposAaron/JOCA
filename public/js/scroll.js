//Menu fixed
let header = document.querySelector('#header')


//Hamburguer button
const hamburguer = document.querySelector('#pull')
const main = document.querySelector('#main-container')

hamburguer.addEventListener('click', ()=> {
    const item = document.querySelector('#nav')
    
    if(item.style.zIndex == '3'){
        item.style.display =' none'
        item.style.zIndex = '-1' 
        main.style.display = 'none'
        main.style.background = 'rgba(102, 102, 102, 0.95);'
    }else{
        item.style.display ='block'
        item.style.zIndex = '3' 
        main.style.display = 'block'
    }   
})

//desplazamiento de scroll y logica de menu de navegacion
let buttons = document.querySelectorAll('#menu a');

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



