Baixar a imagem da aplicação no Docker Hub:
docker pull rodrigofmonteiro/atividades4docker:1.2

Baixar a imagem do Postgres no Docker Hub:
docker pull postgres

Instanciar o container para a banco de dados postgres:
docker run --name postgres -e POSTGRES_PASSWORD=01234 -d -p 5432:5432 postgres

Executar o comando para acessar o powershell do postgres: docker exec -it postgres psql -U postgres

Criar estrutura do banco de dados e povoar:
CREATE TABLE "alunos" (nome varchar(40) NOT NULL, 
			idade varchar(2) NOT NULL, 
   			cpf varchar(14) PRIMARY KEY);

INSERT INTO alunos (cpf, nome, idade) VALUES ('439.564.847-00','Rodrigo1, 29);
INSERT INTO alunos (cpf, nome, idade) VALUES ('145.358.147-10','Lucas', 25);
INSERT INTO alunos (cpf, nome, idade) VALUES ('481.154.824-20', 'André', 30);

Instanciar o container para a aplicação, :
docker run --name consulta-alunos -p 3000:3000 rodrigofmonteiro/atividades4docker

Aplicação está rodando na URL: http://localhost:3000/alunos
