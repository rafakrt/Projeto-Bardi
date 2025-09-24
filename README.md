# Plataforma de Mentorias — Protótipo de Cadastro

## Visão Geral
Este é um protótipo funcional mínimo de cadastro de usuário para uma plataforma de mentorias, desenvolvido como parte de um mini-projeto SCRUM universitário. O sistema permite que usuários se cadastrem como Mentor ou Mentorado, com campos específicos para cada tipo de perfil.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript puro (vanilla)
- localStorage para persistência de dados

## Estrutura do Projeto
```
/
├── index.html           # Página inicial
├── cadastro.html        # Página de cadastro
├── sucesso.html         # Página de confirmação
├── css/
│   └── styles.css       # Estilos responsivos
├── js/
│   └── cadastro.js      # Lógica de validação e persistência
└── README.md            # Este arquivo
```

## Funcionalidades
- **Página inicial**: Apresentação do protótipo e contador de usuários cadastrados
- **Formulário de cadastro**: Validação em tempo real e campos condicionais
- **Pré-visualização**: Visualização dos dados em tempo real conforme preenchimento
- **Persistência local**: Dados salvos no localStorage do navegador
- **Design responsivo**: Otimizado para dispositivos móveis e desktop
- **Acessibilidade**: Labels associados, aria-live para mensagens de erro

## Como Executar no Replit

### Opção 1: Servidor Estático Simples
1. Execute o comando: `python -m http.server 5000`
2. Acesse a URL fornecida pelo Replit
3. Navegue para `/index.html`

### Opção 2: Usar Node.js
1. Execute: `npx serve -s . -l 5000`
2. Acesse a URL fornecida pelo Replit

## Instruções de Teste

### Teste 1: Cadastro como Mentor
1. Abra `/index.html`
2. Clique no botão "Criar conta"
3. Preencha o formulário:
   - Nome completo: "João Silva"
   - E-mail: "joao@exemplo.com"
   - Senha: "123456" (mínimo 6 caracteres)
   - Tipo de perfil: Selecione "Mentor"
   - Área de conhecimento: Selecione "Tecnologia"
4. Observe a pré-visualização sendo atualizada em tempo real
5. Clique em "Criar conta"
6. Verifique se foi redirecionado para a página de sucesso
7. Confirme se o e-mail aparece corretamente na página de sucesso

### Teste 2: Cadastro como Mentorado
1. Na página de sucesso, clique em "Criar outro cadastro"
2. Preencha o formulário:
   - Nome completo: "Maria Santos"
   - E-mail: "maria@exemplo.com"
   - Senha: "654321"
   - Tipo de perfil: Deixe "Mentorado" selecionado (padrão)
   - Interesses: Selecione "Primeiro emprego"
3. Observe as mudanças na pré-visualização
4. Envie o formulário
5. Verifique o redirecionamento e exibição do e-mail

### Teste 3: Validações
1. Tente enviar o formulário em branco
2. Verifique se as mensagens de erro aparecem
3. Teste com e-mail inválido (ex: "email@")
4. Teste com senha menor que 6 caracteres
5. Confirme que os campos ficam destacados em vermelho com erro

### Teste 4: Contador de Usuários
1. Volte para a página inicial (`/index.html`)
2. Clique no link "Total de usuários cadastrados"
3. Verifique se o contador mostra "2" (dos cadastros anteriores)
4. O número deve ser exibido tanto no link quanto no alerta

### Teste 5: Campos Condicionais
1. No formulário de cadastro, alterne entre "Mentor" e "Mentorado"
2. Verifique se o campo muda de "Área de conhecimento" para "Interesses"
3. Confirme se as opções do select são atualizadas corretamente
4. Teste se a pré-visualização reflete as mudanças

## Modelo de Dados
Os usuários são salvos no localStorage com a seguinte estrutura:
```json
{
  "id": "uuid-v4-string",
  "nome": "Nome Completo",
  "email": "email@exemplo.com", 
  "senha": "[PROTÓTIPO - SENHA NÃO ARMAZENADA]",
  "tipo": "mentor" | "mentorado",
  "areaConhecimento": "string | null",
  "interesses": "string | null",
  "criadoEm": "ISO-8601-timestamp"
}
```

## Limpeza de Dados
Para limpar todos os dados cadastrados:
1. Abra as ferramentas de desenvolvedor do navegador (F12)
2. Vá para a aba "Application" ou "Storage"
3. Encontre "Local Storage" → [sua-url-do-replit]
4. Remova a chave "mentorias:usuarios"
5. Atualize a página

### Alternativa via Console
1. Abra o console do navegador (F12 → Console)
2. Execute: `localStorage.removeItem('mentorias:usuarios')`
3. Atualize a página

## Critérios de Aceite Atendidos
- ✅ Layout responsivo sem comentários no código
- ✅ Validações funcionando com mensagens de erro visíveis
- ✅ Salvamento correto no localStorage com modelo definido
- ✅ Redirecionamento para sucesso.html com e-mail exibido
- ✅ Contador de usuários atualizado na página inicial
- ✅ Campos condicionais funcionando (Mentor/Mentorado)
- ✅ Pré-visualização em tempo real dos dados
- ✅ Acessibilidade com labels e aria-live
- ✅ README.md com instruções completas

## Versão
**Protótipo v1.0** - Setembro 2025