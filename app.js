const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'miNegocio'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

//   connection.query('SELECT * FROM Clientes', function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//     showData(results)
//   });

  const querySql = `INSERT INTO Clientes (nombre, RFC, ciudad, CP, email) VALUES
  ('Juan Pérez', 'AAA010101AAA', 'Ciudad de México', '12345', 'juan.perez@email.com')`

  connection.query(querySql, function (error, results, fields) {
    if (error) throw error;
    showData(results)
  });
connection.end();


function showData(results) {
   console.log(results)
}