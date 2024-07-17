textContent:
    define ou retorna o texto de um nó e de todos os seus descendentes. Ele não interpreta HTML, ou seja, qualquer tag HTML será tratada como texto simples.

<div id="example">Olá, <b>mundo</b>!</div>

<script>
var element = document.getElementById("example");
console.log(element.textContent); // Saída: "Olá, mundo!"
</script>

innerHTML:
    define ou retorna o conteúdo HTML de um elemento. Ele interpreta e processa qualquer marcação HTML contida na string.

<div id="example">Olá, <b>mundo</b>!</div>

<script>
  var element = document.getElementById("example");
  console.log(element.innerHTML); // Saída: "Olá, <b>mundo</b>!"
  element.innerHTML = "Olá, <i>mundo</i>!";
</script>
