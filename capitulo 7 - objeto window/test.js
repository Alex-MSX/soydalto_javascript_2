let pantalla = window.screen
let alto = pantalla.height
let ancho = pantalla.width
let respuesta

document.write(`Resolucion: ${ancho} x ${alto}`)

if (alto >= 1080 && ancho >= 1920) {
  respuesta = confirm("La pantalla es FHD, desea realizar la compra?")
} else {
  respuesta = confirm("La pantalla no es FHD, aun así desea realizar la compra?")
}

if (respuesta) {
  document.write("<br>Compra realizada")
} else {
  document.write("<br>Compra cancelada")
}

let href = window.location.href
let pathname = window.location.pathname
let hostname = window.location.hostname
let protocol = window.location.protocol

document.write(`<br><br>
                Protocolo: ${protocol}<br>
                Hostname: ${hostname}<br>
                Pathname: ${pathname}<br>
                URL Completa: ${href}<br>
                `)
