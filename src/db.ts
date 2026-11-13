import mysql from 'mysql2/promise';
export let conexion= mysql.createPool({
    host: "127.0.0.1",
    user:"root",
    password:'l1ssoftware2026*',
    port:3306,
    database:"Gestion_academica"
})