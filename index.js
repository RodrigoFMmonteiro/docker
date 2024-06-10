const express = require('express');
const { Pool } = require('pg');

const app = express();

// Configurações de conexão com o banco de dados PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '01234',
    port: 5432,
});

app.get('laviness', (req, res) => {
    res.send('API está disponível');
});

app.get('/readiness', async (req, res) => {
    try {
        const connection = await pool.connect();
        await connection.query('SELECT 1');
        res.status(200).json({ status: 'ready' });
        connection.release();
    } catch (error) {
        console.error('Erro ao verificar a disponibilidade do banco de dados:', error);
        res.status(500).send('Erro ao verificar a disponibilidade do banco de dados');
    }
});

app.get('/alunos', async (req, res) => {
    try {
       
        const query = 'SELECT * FROM alunos';
        pool.connect();

        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        res.status(500).json({ error: 'Erro ao buscar dados' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
