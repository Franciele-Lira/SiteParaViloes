function verificarResposta() {
    var respostaInput = document.getElementById('respostaInput').value.toLowerCase();

    // Se a resposta estiver correta, redirecionar para a página de empregos
    if (respostaInput === 'muahaha') {
      window.location.href = 'paginaemprego.html';
    } else {
      alert('Resposta incorreta. Você não é um vilão!');
    }
  }