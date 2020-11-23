const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const materia = document.getElementById('materia');
const boton = document.getElementById('btn-enviar');
const resultado = document.getElementById('resultado');

boton.addEventListener('click', (e) => {
  e.preventDefault();

  let error = validarCampos();
  resultado.innerHTML = error[1];

  if (error[0]) {
    resultado.classList.add('red')
  } else {
    resultado.classList.add('green')
  }
})

document.querySelectorAll('input').forEach(function() {
  this.addEventListener('keydown', () => {
    resultado.classList.remove('red','green');
    resultado.innerHTML = "";
  })
})

const validarCampos = () => {
  if (nombre.value == "") {
    return [true, "El nombre del alumno es requerido"]
  } else if (correo.value == "") {
    return [true, "El correo elecrónito es requerido"]
  } else if (materia.value == "") {
    return [true, "La materia es requerida"]
  }

  return [false, "Formulario validado"]
}
