const mysql = require("mysql");
const inquirer = require('inquirer');
//Create table
const Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

// Username
  user: "root",

// Password
  password: "root",
  database: "bamazon_db"
});
//mysql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  bamazon();
 
});

//dislplays table query in terminal
function bamazon() {
  connection.query("SELECT * FROM products", function(err, result) {
    if (err) throw err;
    var table = new Table({
      head: ['ID', 'Product Name', 'Department Name', 'Price']
    });
    for (var i = 0; i < result.length; i++) {
      table.push([result[i].item_id, result[i].product_name, result[i].department_name, result[i].price])
    }
    console.log(table.toString());

  });

  customerBuy();
}

function customerBuy() {
  //    products table
  connection.query("SELECT * FROM products", function(err, results) {
    
    inquirer.prompt([{
      name: 'id',
      type: 'input',
      message: 'What is the ID of the product you would like to buy?',
      
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }, {
      name: 'quantity',
      type: 'input',
      message: 'How many do you want order?',
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    
    }]).then(function(order) {
     
      var productID = order.id;
      var quantity = order.quantity;
      //    connects to products table
      connection.query('SELECT * FROM products WHERE item_id=' + productID, function(err, res) {
        if (err) throw err;
        if (res[0].stock_quantity - quantity >= 0) {
          console.log('Great news! The product is in stock!');
          console.log('Your order for ' + quantity +
            " " + res[0].product_name + ' will be ' + (quantity * res[0].price + ' Thank you for shopping with us!'));
          connection.query('UPDATE products SET stock_quantity=? WHERE item_id=?', [res[0].stock_quantity - quantity, productID],
            function(err, bamazon) {
              if (err) throw err;
           
            });


        } else if (res[0].stock_quantity - quantity <= res[0].stock_quantity && res[0].stock_quantity !== 0) {
          console.log("Sorry, we were unable to complete your order because we only have " + res[0].stock_quantity + ' in stock, update your final amount.');
          bamazon();
        } else {
          console.log("We're sorry, we were unable to complete your order, the item is no longer in stock. Please check later :(");
          bamazon();
        }
      });

    });
  });
}