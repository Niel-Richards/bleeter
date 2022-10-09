const sqlite3 = require('sqlite3').verbose();
const db =  new sqlite3.Database('./bleeterDB.db');

function selectAllBleets() {
    return new Promise((res, rej) => {
        db.all("SELECT * FROM bleets ORDER BY bleet_id DESC",(err,row) => {
            err ? rej(err):res(row);
        });
    });
    
}

function createBleet(newBleet) {
    const createQuery = `INSERT INTO bleets(bleet) VALUES(?)`;
    return new Promise((res, rej) => {
        db.run(createQuery, newBleet[0].bleet,function (err) {
            // console.warn("Inserted id:", this);
            err ? rej(err):res(this.lastID);
        });
    });

}
function deleteBleet(bleet_id) {
    const deleteQuery = `DELETE FROM bleets where bleet_id=?`;
    return new Promise((res, rej) => {
        db.run(deleteQuery, bleet_id, function (err) {
            err ? rej(err):res(this);
        });
    });

}

function selectBleet(bleet_id) {
    const selectQuery = `SELECT * FROM bleets where bleet_id=?`;
    return new Promise((res, rej) => {
        db.get(selectQuery, bleet_id,(err,row) => {
            err ? rej(err):res(row);
        });
    });

}

// function updateTask(bleet_id, task) {
//     //this has a bug. only the number of rows affected will be returned and no data.
//     return new Promise((res, rej) => {
//         db.run("UPDATE bleets SET description =?, isComplete = ? WHERE id = ?", [task[0].description, task[0].isComplete, task_id], function (err) {
//             err ? rej(err):res(this);
//         });
//     });

// }

module.exports = {selectBleet, createBleet, selectAllBleets, deleteBleet};

//TODO make this a DRY implementation!