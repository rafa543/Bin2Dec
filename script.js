const numero = document.querySelector('input') 
const decimal = document.querySelector('#decimal')

numero.addEventListener('input', function() {
  let digitoUsuario = this.value
  let binario = bin2Dec(digitoUsuario)
  decimal.value = binario
})

function bin2Dec(binario) {
  let decimal = 0

  

  for(let index = binario.length - 1; index >= 0; index--){
    if(binario[index] !== '1' && binario[index] !== '0'){
      numero.value = ''
      return decimal = 'Não e um binario'
    }
    decimal += parseInt(binario[index]) * Math.pow(2,binario.length - 1 - index)
  }

  // if(decimal === undefined){
  //   console.log('isso nao e um binario',decimal)
  //   decimal = 'Não e um binario'
  // }
 
  return decimal
}