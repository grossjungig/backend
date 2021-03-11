const jwt = require('jsonwebtoken');
const { TOKEN_PRIVATE_KEY } = process.env;

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error('Not Authenticated!');
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(' ')[1]; // arr[0] = "Bearer"
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, TOKEN_PRIVATE_KEY)
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }

    const invalidToken = !decodedToken;
    if (invalidToken) {
        const error = new Error('Not authenticated!');
        error.statusCode = 401;
        throw error;
    }

    req.userId = decodedToken.userId;
    next();
};