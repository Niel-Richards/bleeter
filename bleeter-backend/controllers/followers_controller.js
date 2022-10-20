const followers_tbl = require('../db/followers_db');

const getFollowersSummary = async (req, res) =>{
    console.log('Enetering the follow route');
    const loggedInUserId = 29;
    const countFollowers = await followers_tbl.countFollowers(loggedInUserId);
    const countFollowed = await followers_tbl.countFollowed(loggedInUserId);
    res.status(200).json([countFollowed,countFollowers]);
    console.log('Leaving the follow route');
};

module.exports = {getFollowersSummary};