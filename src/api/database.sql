CREATE DATABASE fabrica;

CREATE TABLE membros (
    idMembro INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    descricao VARCHAR(250) NOT NULL,
    PRIMARY KEY (idMembro)
) engine=innodb;


INSERT INTO membros (
    idMembro, nome, email, senha, descricao
) VALUES (
    1, 'Joao', 'joao@teste.com', 'teste123', 'menino legal'
);