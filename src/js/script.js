const botaoTrailer = document.querySelector(".botao-trailer")
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.querySelector("#video")
const modal = document.querySelector(".modal")
const linkDoVideo = video.src


function abrirModal(){
    modal.classList.toggle("aberto")
}

function modalAberta(){
    abrirModal()
    video.setAttribute("src",linkDoVideo)
}

function modalFechada(){
    abrirModal()
    video.setAttribute("src","")
}
