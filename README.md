# Podcast Manager

## Descrição
Projeto de uma api que centraliza episódios de podcasts, separados por categoria, de modo a facilitar o acesso aos episódios.

## Features
- Lista os episódios em categorias
- Filtra episódios por nome do podcast, permitindo pesquisas por um determinado nome.


**Formato:**
O arquivo JSON possui as seguintes propriedades do exemplo abaixo:

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  }
]
``` 

## Como usar

- Baixe o repositório deste projeto;
- Instale as dependências com `npm install`
- Inicie o servidor com `npm run start:dev`;
- Utilize os endpoints indicados para acessar os resultados:

  - **Endpoint:** `GET /list`. **Descrição:** Retorna uma lista de episódios de podcasts organizados por categorias.

  - **Endpoint:** `GET /episode?podcastName={nome}`. **Descrição:** Retorna uma lista de episódios de podcast com base no nome do podcast fornecido.



