const database = require("./database");

// Total number followed
const numberFollowed = `SELECT COUNT(followers.followed_id) AS Followed FROM followers WHERE followers.follower_id = ?;`

// List of users followed with name
const listOfFollowed = `SELECT followers.followed_id, users.username AS Followed FROM followers INNER JOIN users ON followers.followed_id = users.user_id WHERE followers.follower_id = ?;`

// Total number of followers
const numberOfFollowers = `SELECT COUNT(followers.follower_id) Followers FROM followers WHERE followers.followed_id = ?;`

// List of followers
const listOfFollowers = `select followers.follower_id, users.username as Follower from followers inner join users on followers.follower_id = users.user_id where followers.followed_id = ?;`

const addFollower = async (follower, followed) => {
    const addFollowerQuery = `INSERT INTO followers(follower, followed) VALUES(?,?)`;
    return database.insertRow(addFollowerQuery,[follower,followed]);
}

const getAllFollowers = async (followed) => database.selectRow(listOfFollowers,followed);
const getListOfFollowed = async (follower) => database.selectRow(listOfFollowed, follower);

const countFollowers = async (followed) => database.selectRow(numberOfFollowers, followed);
const countFollowed = async (follower) => database.selectRow(numberFollowed, follower);


module.exports = {addFollower, getAllFollowers, getListOfFollowed, countFollowed, countFollowers};