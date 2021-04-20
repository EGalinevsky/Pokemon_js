const $btn = document.getElementById('btn-kick')
const $btn_fatality = document.getElementById('btn-fatality')


const character ={
    name: 'Picachu',
    defaultHP: 100,
    damageHP: 100,
    elHp: document.getElementById('health-character'),
    elProgress: document.getElementById('progressbar-character')
}

const enemy ={
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHp: document.getElementById('health-enemy'),
    elProgress: document.getElementById('progressbar-enemy')
}

$btn.addEventListener('click' , ()=>{
    console.log('fefef')
    changeHP(random(20), character)
    changeHP(random(20), enemy)
    
})
$btn_fatality.addEventListener('click', ()=>{
    changeHP(fatalityRandom(20), enemy)
})

init = () =>{
    console.log('Start game')    
    renderHP(character)
    renderHP(enemy)
}

renderHP = (person) =>{
    renderHPLife(person)
    renderProgressBarHP(person)   
}

renderHPLife = (persone) =>{
    persone.elHp.innerText= persone.damageHP + '/' + persone.defaultHP
}

renderProgressBarHP = (person) => {
    person.elProgress.style.width = person.damageHP +'%'
}


changeHP = (count, persone) =>{

    if (persone.damageHP < count) {
        persone.damageHP = 0;
        alert('бедный ' + persone.name +' проиграл');
        $btn.disabled = true
    } else {
        persone.damageHP -= count
    }
    
    renderHP(persone)
}

random = (num) =>{
  return Math.ceil(Math.random() * num)
}
fatalityRandom = (num) =>{
    return Math.ceil(Math.random() * num*3)
}

init()