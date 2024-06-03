
// =============================================== PROJECTS

let portfolio_projects

function load_projects_let(value) {
    
    portfolio_projects = value

}

let show_specify = () => document.getElementById('project__specify').classList.add('active')

let hide_specify = () => document.getElementById('project__specify').classList.remove('active')

function load_project(name) {

    const project = portfolio_projects['portfolio'].find(project => project['name'] == name)

    document.querySelector('.project__specify__name').innerText = name

    document.querySelector('.project__specify__img').firstElementChild.src = `img/proj/${project['img_name']}`

    document.querySelector('.project__specify__buttons').querySelector('.secondary').setAttribute('data-target', project['source_url'])
    document.querySelector('.project__specify__buttons').querySelector('.primary').setAttribute('data-target', project['site_url'])

    document.querySelector('#status_card').innerText = project['status']
    document.querySelector('#version_card').innerText = project['version']
    document.querySelector('#start_date_card').innerText = project['start_date']
    document.querySelector('#last_update_card').innerText = project['last_update']

    document.querySelector('#user_description').innerText = project['user_desc']
    document.querySelector('#tech_description').innerText = project['tech_desc']

    show_specify()

}

function load_projects_thumbnails() {
    
    const projects = portfolio_projects['portfolio']
    const parent = document.querySelector('.projects__container')

    for(const project of projects) {

        const container = document.createElement('div')
        container.classList.add('projects__project', 'reveal', 'left')

        const img = document.createElement('img')
        img.classList.add('project__img')
        img.src = `img/proj/${project['img_name']}`
        img.onclick = () => load_project( project['name'] )

        const footer = document.createElement('div')
        footer.classList.add('project__footer')
        
        const dot = document.createElement('div')
        dot.classList.add('project__footer__dot')
        
        const line = document.createElement('div')
        line.classList.add('project__footer__line')

        const name = document.createElement('p')
        name.classList.add('project__footer__name')
        name.innerText = project['name']

        footer.appendChild(dot)
        footer.appendChild(line)
        footer.appendChild(name)
        container.appendChild(img)
        container.appendChild(footer)

        parent.appendChild(container)

    }

}

function load_projects_json(url) {

    const xhr = new XMLHttpRequest()

    xhr.open('GET', url)

    xhr.onreadystatechange = data => {

        if(xhr.readyState == 4){

            if(xhr.status != 200) console.log('Error - XMLHttpRequest status: ' + xhr.status)

            const result = JSON.parse(data.currentTarget.response)
            
            load_projects_let(result)

            load_projects_thumbnails()

        }

        console.log(`Callback - ${url} loaded`)

    }

    xhr.send()
}

load_projects_json('json/portfolio.json')

// =============================================== LISTENER FUNs

function add_links_listener(class_name, link='target', new_page=false) {

    const elements = document.getElementsByClassName(class_name)
    
    for (const element of elements) {

        element.onclick = () => {

            let this_link = link
            
            if (link == 'target') this_link = element.getAttribute('data-target')

            this_link = element.getAttribute('data-target')

            new_page ? window.open(this_link) : location.href = this_link

        }

    }

}

function add_link_listener(query, link='target', new_page=false) {

    const element = document.querySelector(query)

    if (link == 'target') link = element.getAttribute('data-target')

    try {

        element.onclick = () => {
            
            new_page ? window.open(link) : location.href = link
            
        }
        
    } catch {
        return false
    }
    
}

// =============================================== LISTENERS

add_links_listener('hero__social-icon', 'target', true)

add_link_listener('.hero__scroll-down')

document.querySelector('.project__specify__back-button').onclick = () => hide_specify()

add_links_listener('project__specify__button', 'target', true)

document.onkeydown = e => e.key === "Escape" || e.key === "Esc" ? hide_specify() : 0  

// =============================================== NAVBAR

let show_project = e => e.parentElement.parentElement.classList.remove('hide')

let hide_project = e => e.parentElement.parentElement.classList.add('hide')

function search_project() {

    input = document.querySelector('.projects__searchbar').value.toLowerCase().trim()
    
    const project_name_elements = document.getElementsByClassName('project__footer__name')

    if (!input) {

        for(const project_name_element of project_name_elements) show_project(project_name_element)

    }

    for(const project_name_element of project_name_elements) {

        if( project_name_element.innerText.toLowerCase().includes(input) ) show_project(project_name_element)
        
        else hide_project(project_name_element)

    }

}

// =============================================== REVEAL

const element_visible = 100

const reveal = () => {

    document.querySelectorAll('.reveal').forEach(element => {

        const element_top = element.getBoundingClientRect().top;

        element.classList.toggle('reveal-active', element_top < window.innerHeight - element_visible);

    })
}

window.addEventListener('scroll', reveal)

reveal()
