import User from "../modal/user.modal.js";

export const getUsers = (req, res) => {
    User.find().exec((err, user) => {
        if (err) {
            res.status(500).json(err);
        }
        res.status(200).json(user);
    });
}

export const getUsersByTitle = (req, res) => {
    User.find({
        title: req.query.title
    }).exec((err, user) => {
        if (err) {
            res.status(500).json(err);
        }
        res.status(200).json(user);
    });
}

export const getUserById = (req, res) => {
    User.findOne({ _id: req.params.id }).exec((err, user) => {
        if (err) {
            res.status(500).json(err);
        }
        res.status(200).json(user);
    });
}

export const deleteUsersById = (req, res) => {
    User.deleteOne({ _id: req.params.id }).exec((err, user) => {
        if (err) {
            res.status(500).json(err);
        }
        res.status(200).json(user);
    });
}

export const deleteAllUsers = (req, res) => {
    User.deleteMany({}).exec((err, user) => {
        if (err) {
            res.status(500).json(err);
        }
        res.status(200).json({
            message: "User deleted successfully"
        });
    });
}

export const editUserById = (req, res) => {
    User.updateOne({ _id: req.params.id }, { $set: req.body }).exec((err, user) => {
        if (err) {
            res.status(500).json(err);
        }
        res.status(200).json({ ...user, ...req.body });
    });
}

export const createUser = (req, res) => {
    const userData = new User(req.body);
    userData.save().then(() => {
        res.status(200).json(userData);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

