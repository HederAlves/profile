# SELEÇÃO

Gostariamos de conhecer um pouco mais sobre a sua forma de codificação, entender como você pensa, e, também, conseguirmos conversar sobre um projeto seu desenvolvido.

Então, queremos propor um projeto para desenvolvimento, utilizando Node e React, no qual você será livre para estruturá-lo.

## AVALIAÇÃO

A nossa avaliação se baseará na forma como você disponibiliza o produto, bem como na forma como você o documentou, garantindo que esteja aderente a nossa matriz de pensamento e que todos possam contribuir constantemente na posterioridade.

O intuito da avaliação não é o desenvolvimento completo de todas as _features_, mas sim a forma como você se porta neste desenvolvimento. Trazemos aqui um escopo amplo e de certa forma complexo, permitindo que você aplique sua criatividade e também justifique as tomadas de decisão no desenvolvimento. Portanto não se prenda no desenvolvimento de todas as _features_, mas sim na estruturação do sistema (:

Revisaremos seu código, nos atentando à:
* Organização
* Arquitetura
* Coesão
* Clareza
* Documentação - Instruções claras para execução
* Versionamento
* Testes Automatizados
* Consumo da API RESTful - GraphQL
* Estruturação dos componentes
* Princípios de desenvolvimento

Ainda, pretendemos durante a nossa conversa pessoal, avaliar também:
* Sua posição sobre o código desenvolvido
* Postura de comunicação
* Argumentação

Temos como objetivo desta avaliação compreender a sua prática e vivência no desenvolvimento, avaliando não somente aspectos técnicos mas também comportamentais, tentando trazer uma aproximação de uma experiência de trabalho com você.

Não queremos que você perca tempo estudando tecnologias ou estruturas nas quais você não possua familiaridade, gostariamos que você fosse honesto consigo mesmo e trabalhe dentro do limite de seu conhecimento, se não estiver confortável com a abordagem acima, proponha algo diferente que avaliaremos durante a entrevista pessoal. Qualquer dúvida que tenha durante o desenvolvimento, não deixe de nos contatar.

Gostariamos que você nos retorna-se no prazo de até uma semana, porém, se não for possível, podemos combinar um prazo mais agradável.

## O PROJETO

### PERIÓDICO DE NOTÍCIAS

Jornal é um dos meios de comunicação mais antigos da humanidades, sendo um produto derivado do conjunto de atividades denominado jornalismo. Atualmente, os jornais online tem sido a principal fonte de notícias consumidas pelos usuários.

#### CASO DE USO

Precisamos de um sistema para gerenciar as principais notícias veiculadas mundialmente. Para isso, os usuarios precisaram se cadastrar, onde será permitindo pesquisar as notícias, favoritar elas e cadastrar comentários sobre as notícias. As notícias poderão ser buscadas do The Guardian, através de sua API [https://open-platform.theguardian.com/]

#### REQUISITOS

Deve-se criar uma aplicação web onde podemos:

* Autenticação e autorização de usuário;
* Registrar as notícias lidas;
* Buscar todas as notícias;
* Gerenciar as notícias favoritas e seus comentários;

#### SERVIÇO
* Deverá ser criado um Serviço em NodeJS que irá prover as informações das entidades;
* Este serviço deverá ser acessível via REST ou GraphQL (recomendamos GraphQL);
* O banco de dados pode ser a sua escolha (recomendamos Postgres);
* A utilização de ORM é opcional, porém recomendada;

#### ENTIDADES
* Usuário
    * id
    * email
    * senha
* Notícias
    * id
    * referência
    * data da leitura
    * favorito
* Comentários
    * id
    * data do comentário
    * descricao

#### HISTÓRIAS DE USUÁRIO

1. Autenticação de usuário

> Gostaria que os usuários pudessem se cadastrar e fazer login no sistema. A visualização de notíficas deve ser por interesse e leitura, sendo exibido na parte superior as últimas notícias.

Você pode criar a sua autenticação de usuário ou utilizar alguma outra, como do Facebook, por exemplo.

2. Buscar notícias e marcar como lida

> Ao acessar a tela principal, gostaria de pesquisas as notícias por categoria e sumário, de maneira a filtrar as principais informações de meu interesse. Ao final quero marcar como lida.

A forma de pesquisa deve funcionar com seqüências de caracteres, ou seja, ao digitar `ba`, deverá aparecer tanto `Basquete` quanto `Softball`.

Deverá haver a opçã do usuário marcar como lida a notícia em questão.

Deve ser criado um serviço que permita a busca e registro dessas informações destas informações, lembrando que as informações devem ser trazidas conforme o usuário autenticado.

Você pode utilizar tanto os verbos HTTPS com RESTful ou utilizar a comunicação com o GraphQL.

3. Adicionar notícias favoritas

> Durante a leitura, os usuários podem favoritar as notícias lidas.

As informações podem ser ações de botão ou registro;

4. Gerenciamento dos comentários

> Os usuários poderão alterar e excluir comentários das notíficas.

Poderão ser alteradas as informações já cadastradas em um comentário e/ou excluir os comentários, bem como cadastrar novos.

Lembrando que somente serão desmarcadas como lidas as notícias sem comentários (:

Caso tenha alguma outra ideia ou até um projeto já pronto semelhante a isto, compartilhe conosco!

## COMO COMPARTILHAR O PROJETO CONOSCO

1. Crie um repositório privado no Github e compartilhe com nossa conta do [Github](https://github.com/nginformatica), se não conseguir, pode nos responder por e-mail que entraremos em contato para solicitar o compartilhamento;
2. Abra um PR apontando para a branch master deste repositório;
3. Você pode nos solicitar a revisão sempre que quiser;
4. Ao final, coloque todas as considerações que julgar importante sobre seu código.