import {projects} from './data.js'
window.addEventListener('load', (e)=>{
   /*Cargando el texto */
    var id = localStorage.getItem('id')
    let left = document.querySelector('#left')
    let right = document.querySelector('#right')
    loadData(id);

     left.addEventListener('click',()=>{
         loadData(id-2)
    
     })

     right.addEventListener('click',()=>{
       loadData(id)
     })



})




const loadData = (id) =>{
    document.querySelector('#project-name h1').innerHTML = projects[id-1].name
    document.querySelector('#arq').innerHTML = projects[id-1].diseñador
    document.querySelector('#tipo').innerHTML = projects[id-1].tipo
    document.querySelector('#acabados').innerHTML = projects[id-1].acabados
    document.querySelector('#desc').innerHTML = projects[id-1].descripcion
    document.querySelector('#area').innerHTML = projects[id-1].area
    document.querySelector('#fecha').innerHTML = projects[id-1].fecha
    document.querySelector('#contact-form textarea').innerHTML = `Estoy Interesado en el  ${projects[id-1].name}.`
                                                                                
    /*Cargando las imagenes */
    let imgs = document.querySelectorAll('#gallery img')
    imgs.forEach((val, key)=>{  
        val.setAttribute('src', projects[id-1].img[key])
    })

    /*Actualizando el paginator */
    // try{
    //     let ant = document.querySelector('#left')
    //     if(projects[id-1].name === 'Modelo Comfort'){
    //         ant.style.opacity = '0.2'
    // //     }else{
    // //         ant.style.opacity = '1'
    // //         ant.innerHTML = `${projects[id-2].name}`
    // //     } 
          
    //     document.querySelector('#next').innerHTML = `${projects[id].name}`
    // }catch(e){
    //     console.log(e)
    // }
    
}