

exports.getProfile = (req, res) => {
    res.status(200).send({
        name: req.authInfo.name,
        email: req.authInfo.unique_name,
        tenantId: req.authInfo.tid
    });
}