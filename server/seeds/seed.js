const db = require('../config/connection');
const {User, Puppy } = require('../models');
const userSeeds = require('./puppySeeds.json'); // Needs attention MUST be looked by TA
const puppySeeds = require('./puppySeeds.json');

db.once('open', async () => {
    try { 
        await Puppy.deleteMany({});
        await User.deleteMany({});
  
    const userList = await User.creat(userSeeds);

    for (let i = 0; i <userList.length; i++) {
        await Puppy.create({ ...puppySeeds[i], userId: userList[i]._id });
    }

    
    } catch (err) {
        console.error(err);
        process.exit(1);
    };
    
  
    console.log('Success!');
    process.exit(0);
  });
  