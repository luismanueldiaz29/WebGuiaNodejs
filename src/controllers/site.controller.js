const site = require('../models/site');
const gallery = require('../models/gallery');

exports.get = (req, res) => {
    site.findAll({
        include: {
            model: gallery,
            as: 'galleries'
        }
    }).then(site => {
        res.json(site);
    });
}

exports.getId = (req, res) => {
    site.findAll({
        include: {
            model: gallery,
            as: 'galleries'
        },
        where: {
            id: req.params.id
        }
    }).then((site) => {
        res.status(200).json(site);
    });

    // site.findByPk(req.params.id).then.then((site) => {
    //     res.status(200).json({site});
    // });
}

exports.post = (req, res) => {
    site.create({
        name: req.body.name,
        description: req.body.description,
        infoInterest: req.body.infoInterest,
    }).then( site => {
        gallery.create({
            nameImg: req.body.nameImg,
            imgPath: req.body.imgPath
        }).then(galleryRes => {
            site.setGalleries(galleryRes).then(result => {
                res.json(site)
            })
        });
        // res.status("200").json(site);
    }).catch(error => {
        res.status("400").json(error);
    })
}

exports.update = (req, res) => {
    site.update({
        name: req.body.name,
        description: req.body.description,
        infoInterest: req.body.infoInterest,
        imgPath: req.body.imgPath
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.status(201).json({result});
    }).catch(error => {
        res.status("400").json(error);
    })
}

exports.delete = (req, res) => {
    site.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json({result});
    });
}

/**
 *status => https://developer.mozilla.org/es/docs/Web/HTTP/Status
*/