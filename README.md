Baixar a imagem da aplicação no Docker Hub:
docker pull rodrigofmonteiro/atividades4docker:latest

Baixar a imagem do Postgres no Docker Hub:
docker pull postgres

Instanciar o container do banco de dados Postgres:
docker run --name postgres -e POSTGRES_PASSWORD=01234 -d -p 5432:5432 postgres

Executar o seguinte comando para acessar o Powershell do Postgres: docker exec -it postgres psql -U postgres

Criar estrutura do banco de dados e povoar:
CREATE TABLE "alunos" (nome varchar(40) NOT NULL, 
			idade varchar(2) NOT NULL, 
   			cpf varchar(14) PRIMARY KEY);

INSERT INTO alunos (cpf, nome, idade) VALUES ('435.584.747-10','André', '30');
INSERT INTO alunos (cpf, nome, idade) VALUES ('254.587.747-20','Rodrigo', '29');
INSERT INTO alunos (cpf, nome, idade) VALUES ('195.694.257-30','Lígia', '26');

\q para sair do Powershell

Instanciar o container da aplicação, :
docker run --name consulta-alunos -p 3000:3000 rodrigofmonteiro/atividades4docker

Aplicação estará rodando na URL: http://localhost:3000/alunos
