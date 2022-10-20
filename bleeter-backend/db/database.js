const sqlite3 = require('sqlite3').verbose();
const db =  new sqlite3.Database('./db/bleeterDB.db');

const selectAll = (query) => {
    return new Promise((res, rej) => {
        db.all(query,(err,row) => {
            err ? rej(err):res(row);
        });
    });
}

const insertRow = (query, data) => {
    return new Promise((res, rej) => {
        db.run(query, data,function (err) {
            err ? rej(err):res(this.lastID);
        });
    });

}
const deleteRow = (query, _id) => {
    return new Promise((res, rej) => {
        db.run(query, _id, function (err) {
            err ? rej(err):res(this);
        });
    });

}

const selectRow = (query, _id) => {
    return new Promise((res, rej) => {
        db.get(query, _id,(err,row) => {
            err ? rej(err):res(row);
        });
    });

}

module.exports = {selectRow, insertRow, selectAll, deleteRow};

//TODO make this a DRY implementation!