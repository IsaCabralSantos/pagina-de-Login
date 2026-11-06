# Login Expresso

Uma aplicação web moderna e responsiva de autenticação (Login) desenvolvida com foco em **UI/UX**, integração com **APIs REST** (obtenção e armazenamento de `access_token`) e animações customizadas utilizando **HTML5, CSS3 e JavaScript (Vanilla)**.

---

## Demonstração do Projeto

- **Layout Split-Screen:** Interface dividida entre área de destaque visual e formulário de autenticação.
- **Feedback Visual Dinâmico:** Animação customizada de uma caneca de café com fumaça (SVG + CSS Keyframes) durante a autenticação.
- **Tratamento de Erros:** Alinhamento preciso e amigável para mensagens de validação e credenciais incorretas.

---

## Funcionalidades

- [x] **Interface Responsiva:** Adaptável para desktops, notebooks e dispositivos móveis.
- [x] **Autenticação de Usuário:** Envio de dados de acesso para API REST via requisição HTTP assíncrona (`fetch` API / `async-await`).
- [x] **Gestão de Sessão (`access_token`):** Armazenamento seguro do token de acesso no `localStorage` do navegador para autorização em rotas protegidas.
- [x] **Tela de Carregamento (Loading State):** Animação interativa exibida durante o processamento da requisição na rede.
- [x] **Tratamento de Exceções:** Notificação clara em caso de falha de autenticação ou indisponibilidade de servidor.

---

## Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da página.
- **CSS3:** 
  - Layout Flexbox & Media Queries para responsividade.
  - Animação vetorial (`@keyframes`) para o efeito de fumaça na caneca de café.
  - Variáveis e resets modernos.
- **JavaScript (ES6+):** 
  - Manipulação do DOM.
  - Consumo de API REST utilizando `fetch` com `async/await`.
  - Gerenciamento do `localStorage`.
- **SVG & Graphics:** Elementos gráficos escaláveis e integrados ao tema.

---

## Estrutura de Arquivos

```text
Expresso/
├── login/
│   ├── index.html      # Estrutura HTML da página de login e loading
│   ├── style.css       # Estilização visual, animações e responsividade
│   ├── script.js      # Lógica de validação, animações e consumo da API
│   └── img/            # Imagens do projeto (fundo, logo, café)
└── README.md           # Documentação do repositório
```

---

## Como Executar o Projeto

### Pré-requisitos
Apenas um navegador web atualizado (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   ```

2. **Navegar até o diretório do projeto:**
   ```bash
   cd Expresso/login
   ```

3. **Abrir a aplicação:**
   - Dê um duplo clique no arquivo `index.html` ou abra-o utilizando a extensão **Live Server** no VS Code.

---

## Fluxo de Autenticação & Token (`access_token`)

1. O usuário preenche os campos **Usuário** e **Senha** e clica no botão **LOGIN**.
2. A aplicação dispara o estado de *loading* com a animação da caneca.
3. Uma requisição `POST` é enviada para o endpoint da API (`/api/login`).
4. Ao retornar status de sucesso (`200 OK`):
   - O `access_token` devolvido pela API é armazenado no `localStorage`:
     ```javascript
     localStorage.setItem("access_token", data.access_token);
     ```
   - O usuário é redirecionado para a aplicação principal (`home.html`).
5. Em caso de insucesso (`401 Unauthorized` ou erro de rede):
   - A tela de carregamento é oculta e a mensagem de erro é exibida dinamicamente.
