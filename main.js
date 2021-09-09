function Login() {
  var usuario = document.getElementsByName('matricula')[0].value
  var senha = document.getElementsByName('senha')[0].value
  var usuarios = [
    // Conjunto de usuários pré definidos
    { login: '123', senha: '123456' },
    { login: 'admin', senha: 'admin' },
    { login: 'usuario', senha: 'teste' }
  ]

  for (var u in usuarios) {
    // percorre todos os usuario pré definidos
    var us = usuarios[u]
    if (us.login === usuario && us.senha === senha) {
      window.location.href = 'http://www.google.com'
      alert('Pegou!')
      return true
    }
  }
  alert('Erro, tente novamente!')
  return false
}
