'use strict';
const d = document;

const anclaHome = d.getElementById('home')
const anclaAbout = d.getElementById('about')
const anclaContac = d.getElementById('contact')

let url = 'http://127.0.0.1:5500/assets/home.html'
let urlAbout = 'http://127.0.0.1:5500/assets/about.html'
let urlContact = 'http://127.0.0.1:5500/assets/contact.html'
let main = document.querySelector('main')



const getData = async () => {
    try{
        let response = await fetch(url)
        console.log(response)
        let text = await response.text()
        main.innerHTML = text
    }
    catch(err){

    }
}

d.addEventListener('DOMContentLoaded',getData)

d.addEventListener('click', e => {
    e.preventDefault()
    if(e.target === anclaHome){
        getData()
    }
})


const getDataAbout = async () => {
    try{
        let response = await fetch(urlAbout)
        console.log(response)
        let text = await response.text()
        /* console.log(text) */
        main.innerHTML = text
    }
    catch(err){

    }
}


d.addEventListener('click', e => {
    e.preventDefault()
    if(e.target === anclaAbout){
        getDataAbout()
    }
})


const getDataConatct = async () => {
    try{
        let response = await fetch(urlContact)
        console.log(response)
        let text = await response.text()
        main.innerHTML = text
    }
    catch(err){

    }
}


d.addEventListener('click', e => {
    e.preventDefault()
    if(e.target === anclaContac){
        getDataConatct()
    }
})
