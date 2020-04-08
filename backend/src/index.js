const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Métodos HTTP:
 *
 * GET: Buscar uma informação no servidor
 * POST: Criar uma informação no servidor
 * PUT: Alterar uma informação no servidor
 * DELETE: Deletar uma informação no servidor
 */

/**
 *
 * Tipos de parametros
 *
 * Query: Parâmetros nomeados enviados na roota após o "?"
 * geralemtne servem para filtros e paginação.
 *
 * ROUTE PARAMS: Parâmetro utilizados para identificar recursos
 * REQUEST BODY: Corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * Bando de dados
 *
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft
 * NoSQL: MongoDB, CouchDB e outros
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select('*').where()
 * Usaremos o QueryBuilder knex
 */
