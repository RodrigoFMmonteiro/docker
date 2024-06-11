Passo a passo para executar a aplicação:

1) Baixar a imagem da aplicação no Docker Hub:
docker pull rodrigofmonteiro/atividades4docker:latest

2) Baixar a imagem do Postgres no Docker Hub:
docker pull postgres

3) Instanciar o container do banco de dados Postgres:
docker run --name postgres -e POSTGRES_PASSWORD=01234 -d -p 5432:5432 postgres

4) Executar o seguinte comando para acessar o Powershell do Postgres: docker exec -it postgres psql -U postgres

5) Criar estrutura do banco de dados e povoar:
CREATE TABLE "alunos" (nome varchar(40) NOT NULL, 
			idade varchar(2) NOT NULL, 
   			cpf varchar(14) PRIMARY KEY);

INSERT INTO alunos (cpf, nome, idade) VALUES ('435.584.747-10','André', '30');
INSERT INTO alunos (cpf, nome, idade) VALUES ('254.587.747-20','Rodrigo', '29');
INSERT INTO alunos (cpf, nome, idade) VALUES ('195.694.257-30','Lígia', '26');

\q para sair do Powershell

6) Instanciar o container da aplicação, :
docker run --name consulta-alunos -p 3000:3000 rodrigofmonteiro/atividades4docker

Aplicação estará rodando na URL: http://localhost:3000/alunos

O link do GitHub é https://github.com/RodrigoFMmonteiro/docker e do DockerHub é https://hub.docker.com/repository/docker/rodrigofmonteiro/atividades4docker/tags
