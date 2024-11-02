const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Impede o envio do formulário padrão
      // Aqui você colocaria a lógica para validar as credenciais e fazer o login

      // Exemplo de redirecionamento para outra página
      window.location.href = '#'; 
    });