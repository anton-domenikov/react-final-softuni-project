const User = require('../models/User');
const Motorcycle = require('../models/Motorcycle');

const getAll = async () => {
    let result = await Motorcycle.find({}).lean()

    // if (result) {
    //     result = result.filter(x => x.creator == userId);
    // };

    return result;
};

const getMyBikes = async (username) => {
    let result = await Motorcycle.find({}).lean()
    let user = await User.findOne({username});
    let userId = user._id;

    if (result) {
        result = result.filter(x => x.creator == userId);
    };

    return result;
}

const getUser = (id) => {
    return User.findById(id).populate('motorcycles');
}

const getOne = (id) => Motorcycle.findById(id);

// const create = async (motorcycleData) => {
//     let motorcycle = new Motorcycle(motorcycleData);

//     return motorcycle.save();
// };

const create = async (motorcycleData, username) => {
    let user = await User.findOne({username});
    console.log(user);

    let motorcycle = new Motorcycle({...motorcycleData, creator: user._id});
    console.log(motorcycle);

    // if (!user.motorcycles) {
    //     user.motorcycles = []
    // } 
    // user.motorcycles.push(motorcycle);
    
    // user.save();

    return motorcycle.save();
};

function updateOne(bikeId, bikeData) {
    return Motorcycle.updateOne({_id: bikeId}, bikeData);
}

const deleteOne = (motorcycleId) => {
    return Motorcycle.deleteOne({_id: motorcycleId});
}


module.exports = {
    getAll,
    getMyBikes,
    getUser,
    getOne,
    create,
    updateOne,
    deleteOne,
};