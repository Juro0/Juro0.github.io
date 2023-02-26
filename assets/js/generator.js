
let generateProj = proj => {

    let container = document.createElement('div')
    container.classList.add('proj-container', 'mobReveal')

    if(!proj.responsive){
        container.classList.add('mobile-hide')
    }

    let img = document.createElement('img')
    img.src = `assets/img/portfolio/${proj.img}.png`
    img.classList.add('proj-img')

    let right = document.createElement('div')
    right.classList.add('proj-right')

    let button = document.createElement('button')
    button.classList.add('proj-cta')

    button.addEventListener('click', ()=>{
        url(proj.link)
    })

    let i = document.createElement('i')
    i.classList.add('uil', 'uil-angle-right-b')

    let title = document.createElement('p')
    title.classList.add('proj-title')
    title.innerText = proj.displayName

    let desc = document.createElement('p')
    desc.classList.add('proj-desc')
    desc.innerText = proj.desc

    button.appendChild(i)
    right.appendChild(button)
    right.appendChild(title)
    right.appendChild(desc)
    container.appendChild(img)
    container.appendChild(right)
    document.getElementById('portfolio').appendChild(container)

}

for(const proj of portfolio){
    generateProj(proj)
}
