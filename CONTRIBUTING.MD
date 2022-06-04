A galera que estiver livre e interessada em contribuir para algum repositório eu ofereço um que estou fazendo com alguns amigos, chama-se link-share (www.linkshare.com.br) um site que armazena seus links de outras plataformas, estamos precisando adicionar novas linguagens no site. no momento só temos o inglês e português. fique a vontade para adicionar novas traduções.

## TRADUÇÕES

PASSOS:

1. Crie um fork do repositório ( https://github.com/ArthurMaciel95/link-share-react )
2. Rode no comando `npm i` para baixar as dependências.
3. Na pasta <strong>./i18n/translations</strong> crie um novo arquivo chamando {{Idioma}}.json ( ex: fr.json ).
4. copie a estrutura json de um idioma já existente e altere somente os valores do lado direito para a respectivo idioma.
5. Vá a pasta i18n/index.js
   5.1. e importe o json adicionando o nome da variável somente duas letras para o respectivo idioma.
   ![traductions_index](https://user-images.githubusercontent.com/62079236/172022181-614705d0-74a4-4ff7-af77-7712870a0bfe.png)

6. Agora vá em "src/components/navbar/index.jsx".
   6.1 Adicione um objeto com as informações de name e lng ( lng precisa ser igual a variável ao que foi criando na importação).
   ![adicionando_idioma_em_navbar](https://user-images.githubusercontent.com/62079236/172022327-ded9925f-2934-44d4-ab00-5487f665225c.png)

7. Depois de pronto crie um PR com as alterações feitas.

### PRONTO :D
