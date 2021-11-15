## Aplicação Web: COVID19

---
>Esta aplicação é o projeto final do curso de Desenvolvedores de softwares (DEVs) - Nível 3, conforme edital 7/2021/PROEX - a, ofertado pela Universidade Federal de Santa Catarina (UFSC).

Vamos chamar de COVID-19 uma aplicação real onde pesquisadores da UFSC poderão obter informações sobre o estado da doença COVID-19 na cidade de Florianópolis.
O objetivo aqui é armazenar dados disponibilizados pela Secretaria de Saúde de Florianópolis. Os dados serão armazenados em um banco de dados.

*As informações que queremos armazenar estão relacionadas as pessoas que realizaram testes para COVID-19. As informações são:*

- *a data da notificação;*
- *a data dos primeiros sintomas;*
- *a data do teste;*
- *a data de nascimento;*
- *a faixa etária;*
- *o sexo (M, F, N - Não deseja informar);*
- *a cor (AMARELA, BRANCA, PARDA ou PRETA);*
- *o bairro onde mora;*
- *a cidade onde mora;*
- *o Centro de Saúde;*
- *o tipo do teste realizado;*
- *dor de garganta (SIM, NÃO);*
- *dispneia (SIM, NÃO);*
- *febre (SIM, NÃO);*
- *tosse (SIM, NÃO); e*
- *internado na UTI (SIM, NÃO);*
- *se houve óbito.*

---

### Banco de dados
Como solução de banco de dados, para este projeto foi utilizado o **[PostgreSQL](https://www.postgresql.org)**.
</br>

### Dependências Requeridas
As seguintes dependências são necessárias no frontend:
- axios
- bootstrap
- leaflet
- react-leaflet
- react
- react-dom
- react-router-dom
- react-icons
- styled-components

Para instalar as dependências, utilize o comando:
### `npm install <nome da dependência>`

As seguintes dependências são necessárias no backend:
- cors
- dotenv
- express
- express-validator
- multer
- nodemon
- pg
- sequelize
- uuid

Para instalar as dependências, utilize o comando:
### `npm install <nome da dependência>`

---

### Ações Necessárias
Crie um arquivo `.env` na pasta Backend do projeto, em que é preciso configurar as informações do banco de dados conforme se verifica no arquivo dbConfig.js em src/config, a saber:
`username password database host port`

Ainda em Backend, dentro do diretório `src`, crie um diretório `tmp` que terá, por sua vez, um diretório `uploads` dentro, a fim de que o arquivo enviado pelo usuário seja tratado.
A árvore de diretórios após a criação deve ficar assim:
`Backend / src / tmp / uploads`

---

### Scripts Disponíveis

### `npm install`

Vai instalar todas as dependências exigidas, conforme o arquivo `package.json` (este comando vale para os diretórios Backend e Frontend).

### `npm start`
Inicia a aplicação React

### `nodemon server.js`
Inicia o servidor (deve ser executado dentro de Backend)