window.addEventListener('load',()=>{
    var cards = document.querySelectorAll('.project-card')
    let header = document.querySelector('#header')
    header.classList.add('fixed')
   
    
    



    cards.forEach((card, id) => {
        card.addEventListener('mouseover', (value) => {
            let projectType = card.children[0]
            projectType.style.transition = 'all 400ms'
            projectType.style.transform = 'translateY(200%)'

            let projectModel = card.children[1]
            projectModel.style.transition = 'all 400ms'
            projectModel.style.transform = 'translateY(350%)'

            let btn = card.children[2]
            btn.style.transition = 'all 400ms'
            btn.style.left = '30px'
            btn.style.transform = 'translateY(380%)'
        })

        card.addEventListener('mouseleave', (value) => {
            let projectType = card.children[0];
            projectType.style.transform = 'translateY(-200%)'

            let projectModel = card.children[1]
            projectModel.style.transform = 'translateY(-200%)'

            let btn = card.children[2]
            btn.style.left = '-90px'
            btn.style.transform = 'translateY(380%)'

        })
    })
    
})
   





