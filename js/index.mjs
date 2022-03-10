'use strict';

const d = document;

const form = d.getElementById('info')

const anclaHome = d.getElementById('home')
const anclaHtml = d.getElementById('htmll')
const anclaCss = d.getElementById('csss')
const anclaJS = d.getElementById('jss')

let url = 'http://127.0.0.1:5500/assets/home.html'
let urlHtml = 'http://127.0.0.1:5500/assets/html.html'
let urlCss = 'http://127.0.0.1:5500/assets/css.html'
let urlJs = 'http://127.0.0.1:5500/assets/js.html'
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


const getDataHtml = async () => {
    try{
        let response = await fetch(urlHtml)
        console.log(response)
        let text = await response.text()
        main.innerHTML = text
    }
    catch(err){

    }
}


d.addEventListener('click', e => {
    e.preventDefault()
    if(e.target === anclaHtml){
        getDataHtml()
    }
})


const getDataCss = async () => {
    try{
        let response = await fetch(urlCss)
        let text = await response.text()
        main.innerHTML = text
    }
    catch(err){
        console.log(err)
    }
    finally{
    }
}


d.addEventListener('click', e => {
    e.preventDefault()
    if(e.target === anclaCss){
        getDataCss()
    }
})

//js
const getDataJs = async () => {
    try{
        let response = await fetch(urlJs)
        let text = await response.text()
        main.innerHTML = text
    }
    catch(err){
        console.log(err)
    }
    finally{
    }
}


d.addEventListener('click', e => {
    e.preventDefault()
    if(e.target === anclaJS){
        getDataJs()
    }
})