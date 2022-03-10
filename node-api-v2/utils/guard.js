const {getConnection} = require('../data/mongoClient');
const routeGuard = (accessMatrix) => {
    return async (req, res, next) => {

        const client = await getConnection();
        const {tid: tenantId, oid: userId} = req.authInfo;
        const user = await client.db('ADAuthPoC').collection('users').findOne({tenantId, userId});

        if (!user) {
            return res.status(403).json({error: 'Unauthorized'});
        }
    
        next();
    }
}

module.exports = routeGuard;