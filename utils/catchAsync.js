<<<<<<< HEAD
module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}
||||||| empty tree
=======
module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
};
>>>>>>> 970cf6f8706313214d0ca9bc24bd26c288d5e916
