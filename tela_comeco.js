// Animação da tela inicial

document.querySelector('#tela_comeco').addEventListener('click',()=>{
    document.querySelector('#tela_comeco').classList.add("subir")
})

// Animação do Menu Lateral
document.querySelector('#promocoes').addEventListener('click',()=>{
    document.querySelector('#promocoes').classList.add("crescer")
    document.querySelector('#hamburgueres').classList.remove("crescer")
    document.querySelector('#acompanhamentos').classList.remove("crescer")
    document.querySelector('#bebidas').classList.remove("crescer")
    document.querySelector('#sobremesas').classList.remove("crescer")
})

document.querySelector('#hamburgueres').addEventListener('click',()=>{
    document.querySelector('#promocoes').classList.remove("crescer")
    document.querySelector('#hamburgueres').classList.add("crescer")
    document.querySelector('#acompanhamentos').classList.remove("crescer")
    document.querySelector('#bebidas').classList.remove("crescer")
    document.querySelector('#sobremesas').classList.remove("crescer")
})

document.querySelector('#acompanhamentos').addEventListener('click',()=>{
    document.querySelector('#promocoes').classList.remove("crescer")
    document.querySelector('#hamburgueres').classList.remove("crescer")
    document.querySelector('#acompanhamentos').classList.add("crescer")
    document.querySelector('#bebidas').classList.remove("crescer")
    document.querySelector('#sobremesas').classList.remove("crescer")
})

document.querySelector('#bebidas').addEventListener('click',()=>{
    document.querySelector('#promocoes').classList.remove("crescer")
    document.querySelector('#hamburgueres').classList.remove("crescer")
    document.querySelector('#acompanhamentos').classList.remove("crescer")
    document.querySelector('#bebidas').classList.add("crescer")
    document.querySelector('#sobremesas').classList.remove("crescer")
})

document.querySelector('#sobremesas').addEventListener('click',()=>{
    document.querySelector('#promocoes').classList.remove("crescer")
    document.querySelector('#hamburgueres').classList.remove("crescer")
    document.querySelector('#acompanhamentos').classList.remove("crescer")
    document.querySelector('#bebidas').classList.remove("crescer")
    document.querySelector('#sobremesas').classList.add("crescer")
})