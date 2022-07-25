# desafioGitActions

Você está construindo uma API para inserir as informações de usuário, juntamente com um grupo. Como é de prática, nesse repositório vocês optaram por trabalhar com duas branchs: master e release. Sempre que alguém finaliza uma tarefa importante (como inserir um novo endpoint), o push é feito diretamente na branch release e um pull request é aberto manualmente para enviar essas alterações para a branch principal. 

A sua missão é automatizar essa prática utilizando o GitHub Actions, para acelerar o processo de teste e criação do pull request. 

Por tanto, o seu workflow deverá conter os seguintes jobs: 

    a. Inserção de informação na API. [ PARA VALIDAR ENDPOINT DE POST ] 
    b. Consulta de todos os dados inseridos. [ PARA VALIDAR O ENDPOINT DE GET] 

Passando nesses dois testes, a sua APP está pronta para subir para master, então podemos incluir um terceiro step: 

      c. Abrir um pull request entre master <> release 

Para seguir nesse raciocínio, alguns pontos devem ser considerados: 

    1- Para conseguir abrir o pull request, você precisará ter acesso a API do GitHub e ter definido um secret dentro do seu repositório, para fazer a autenticação. 
    2- Para testar os endpoints você pode criar uma docker-image, hospedá-la no DockerHub e abrir um novo serviço no seu workflow ou você pode fazer o deploy dessa aplicação utilizando o HEROKU. 
    3- Como estamos falando de uma API , precisamos fazer com que esses dados persistam, uma opção rentável é utilizar o cluster do MongoDB Atlas. Dessa forma você não precisará fazer o deploy do seu banco, porque utilizará um aglomerado já existente e gratuito.
    
