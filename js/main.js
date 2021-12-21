const pacientes = [];

let count = 0;

bnt_normal.addEventListener('click', function () {
    let name = pacient.value
    if (!name) return;
    pacientes.push({
        name,
        count: ++count,
        type: 'normal'
    })
    focusInput()
    loadArray()
})

bnt_prefe.addEventListener('click', function () {
    let name = pacient.value
    if (!name) return;
    let lastPref = pacientes.filter(p => p.type === 'preferencia').length

    const obj = {
        name,
        count: ++count,
        type: 'preferencia'
    }
    if (lastPref) {
        pacientes.splice(lastPref, 0, obj)
    } else {
        pacientes.unshift(obj)

    }
    focusInput()
    loadArray()
})

const createElement = (type = 'li', id, content = '') => {
    let element = document.createElement(type);
    element.textContent = `${id+1}º - ${content}`;

    return element;
}

const loadArray = () => {
    const list = document.querySelector('section#lista');
    if (pacientes.length) {
        let isExistsUl = document.querySelector('#lista ul');
        let isExistsP = document.querySelector('#lista p');
        
        if(isExistsUl) list.removeChild(isExistsUl)
        if(isExistsP) list.removeChild(isExistsP)

        let ul = document.createElement('ul')
        pacientes.forEach((v, k) => {
            ul.appendChild(createElement('li', k, `${v.name} - ${v.type}`))
        })
        list.appendChild(ul)
    } else {
        let p = document.createElement('p');
        p.textContent = 'Sem pacientes'
        list.appendChild(p)
    }
}

window.addEventListener('load', function(){
    loadArray()
})


const focusInput = () => {
    pacient.value = ''
    pacient.focus()
}