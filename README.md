# swagger-node-example
Exemplo de documentação de APIs com swagger em projetos node.

#### 
Vamos precisar de:<br>
`swagger-autogen` para gerar a documentação em .json<br>
`swagger-ui-express` para interpretar o .json<br>
`Express.js` como application server<br>
Obs: documentação é gerada toda a vez que o projeto for iniciado.

### Steps:
* Criar arquivos: <br>
  `|-- package.json`<br> 
  `|-- swagger.js`: Chama o módulo `swagger-autogen` para gerar a documentação <br>
  `|-- index.js`: Arquivo raiz do projeto<br>
  `|-- endpoints.js`: contém as funções `.get()` `.post()` <br><br>

* Para que a documentação do swagger seja gerada automaticamente ao executar a aplicação 
temos que adicionar no `package.json` os `scripts` e dependência o `"swagger-autogen": "node swagger.js"`
<br> Ex: arquivo de `package.json`  
  
```
{
  "name": "swagger-node-example",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "swagger-autogen": "node swagger.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "swagger-autogen": "^2.6.3",
    "swagger-ui-express": "^4.1.4"
  }
}
```

* Exetucar comandos: 
  `npm install`
  `sudo npm run swagger-autogen`<br>
    Após execução do comando, sera gerado o arquivo `swagger_output.json`
  