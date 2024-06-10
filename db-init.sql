CREATE TABLE 'alunos' (
	cpf varchar(14) PRIMARY KEY,
	nome varchar(40) NOT NULL,
	idade int NOT NULL,
);


INSERT INTO alunos (nome, cpf, idade) VALUES ('André', '135.285.149-21', 25);
INSERT INTO alunos (cpf, nome, idade) VALUES ('481.154.824-20', 'André', 30);

