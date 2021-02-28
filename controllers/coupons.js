const Coupon = require('../models/coupons');

exports.createCoupon = (req, res) => {
    const { companyID, Name, Description, Validity, NoCoupons, Price } = req.body;

    Coupon.create({ companyID, Name, Description, Validity, NoCoupons, Price }, (err, post) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: err });
        }
        else
         {console.log(post);   res.json(post._id);}
    });
};


exports.viewCoupon = (req, res) => {
    const { companyID } = req.query;
    console.log(companyID)
    Coupon.find({ companyID })
        .exec((err, posts) => {
            console.log(posts)
            if (err) console.log(err);
            res.json(posts);
        })
}

exports.singleCoupon = (req, res) => {
    const { _id } = req.params;
    Coupon.findOne({ _id })
        .exec((err, post) => {
            if (err) console.log(err);
            console.log(post)
            res.json(post);
        })
}

exports.removeCoupon = (req, res) => {
    const { _id } = req.params;
    console.log(_id)
    Coupon.findOneAndRemove({ _id })
        .exec((err, post) => {
            console.log(post)
            console.log('Delete done')
            res.json({
                message: 'Coupon deleted'
            });
        })
};

exports.updateCoupon = (req, res) => {
    const {_id } = req.params;
    const { Name, Description, Validity, NoCoupons, Price } = req.body;
    Coupon.findOneAndUpdate({ _id }, { Name, Description, Validity, NoCoupons, Price  }, { new: true })  
        .exec((err, post) => {
            if (err) console.log(err);
            res.json(post); //updated content
        })
}


