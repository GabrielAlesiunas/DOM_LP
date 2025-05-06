document.getElementById('btn1').addEventListener('click', function() {
    document.getElementById('titulo').textContent = 'Novo Título';
    document.getElementById('titulo').style.color = 'blue';
  });
  
  document.getElementById('btn2').addEventListener('click', function() {
    document.getElementById('imagem').src = 'img2.png';
    document.getElementById('imagem').style.width = '200px';
  });
  
  document.getElementById('btn3').addEventListener('click', function() {
    document.getElementById('texto1').textContent = 'Texto e cor de fundo Alterado';
    document.getElementById('texto1').style.backgroundColor = 'orange';
  });
  
  document.getElementById('btn4').addEventListener('click', function() {
    document.getElementById('texto2').textContent = this.textContent;
  });
  
  document.getElementById('btn5').addEventListener('click', function() {
    document.getElementById('texto2').textContent = this.textContent;
  });
  
  document.getElementById('btn6').addEventListener('click', function() {
    document.getElementById('texto2').textContent = this.textContent;
  });
  