
export const $form = document.createElement('form');

export let texto = $form.innerHTML = `
<form class = "formulario">
<h2>CONTACT US</h2>
<p type="Name:"><input placeholder="Write your name here.." id = "name"></input></p>
<p type="Email:"><input placeholder="Let us know how to contact you back.." id = "email"></input></p>
<p type="Message:"><input placeholder="What would you like to tell us.." id = "message"></input></p>
<input type="submit" value="enviar">
<div>
  <span class="fa fa-phone"></span>001 1023 567
  <span class="fa fa-envelope-o"></span> contact@company.com
</div>
</form>`
$form.append(texto)
const url = 'http://localhost:8000/paginas'
console.log(texto)
document.addEventListener('submit',async e => {
  
  // poner el form con destructuracion
  if(e.target.matches('.formulario')){
    e.preventDefault();
    // va a ejecutar el metodo post (create)
    try{
              let options = {
                  method: 'POST',
                  headers: {
                      "Content-type": "application/json; charset=utf-8",
                  },
                  body: JSON.stringify({
                      name: e.target.name.value,
                      email: e.target.email.value,
                      message: e.target.message.value,
                  }),
              }
              let peticion = await fetch(url,options)
              let data = await peticion.json()
              location.reload()
              console.log(data)
          }
          catch(err){
              console.log(err)
          }
      }
  }
)