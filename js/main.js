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
    print()
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
    if(lastPref){
        pacientes.splice(lastPref, 0, obj)
    }else{
        pacientes.unshift(obj)
        
    }
    print()
})

const print = function () {
    console.log(pacientes);
}