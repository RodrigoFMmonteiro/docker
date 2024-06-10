Baixar a imagem da aplicação do docker hub:
docker pull rodrigofmonteiro/atividades4docker:latest

Baixar a imagem do Postgres no docker hub :
docker pull postgres

Instanciar o container para a aplicação:
run rodrigofmonteiro/atividades4docker: latest

Instanciar o container para a banco de dados postgres:
docker run --name postgres -e POSTGRES_PASSWORD=01234 -d -p 5432:5432 postgres

Executar o comando para abrir o shell: docker exec -it postgres psql -U postgres

Criar estrutura do banco de dados e povoar:
CREATE TABLE 'alunos' (
	cpf varchar(14) PRIMARY KEY,
	nome varchar(40) NOT NULL,
	idade int NOT NULL,
);

INSERT INTO alunos (cpf, nome, idade) VALUES ('439.564.847-00','Rodrigo1, 29);
INSERT INTO alunos (cpf, nome, idade) VALUES ('145.358.147-10','Lucas', 25);
INSERT INTO alunos (cpf, nome, idade) VALUES ('481.154.824-20', 'André', 30);

Aplicação está rodando na URL: http://localhost:3000/alunos
