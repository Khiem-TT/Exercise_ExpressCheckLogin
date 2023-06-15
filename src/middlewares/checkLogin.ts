import e from "express";

export const checkLogin = async (req, res, next) => {
    let {username, password} = req.body;
    if (username === 'admin' && password === 'admin') {
        next();
    } else {
        res.status(401).json({message: 'Unauthorized!'});
    }
}