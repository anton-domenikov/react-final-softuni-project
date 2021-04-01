const User = require('../models/User');
const Motorcycle = require('../models/Motorcycle');

const getAll = async (userId) => {
    let result = await Motorcycle.find({}).lean()

    if (result) {
        result = result.filter(x => x.creator == userId);
    };

    return result;
};

const getUser = (id) => {
    return User.findById(id).populate('motorcycles');
}

const getOne = (id) => Motorcycle.findById(id);

const create = async (motorcycleData) => {
    console.log(motorcycleData);
    let motorcycle = new Motorcycle(motorcycleData);
    console.log(motorcycle);

    return motorcycle.save();
};

// const create = async (motorcycleData, userId) => {
//     let motorcycle = new Motorcycle({...motorcycleData, creator: userId});
//     console.log(motorcycle);
//     let user = await User.findById(userId);
//     user.motorcycles.push(motorcycle);
//     user.save();

//     return motorcycle.save();
// };

const deleteOne = (motorcycleId) => {
    return Motorcycle.deleteOne({_id: motorcycleId});
}


module.exports = {
    getAll,
    getUser,
    getOne,
    create,
    deleteOne,
};