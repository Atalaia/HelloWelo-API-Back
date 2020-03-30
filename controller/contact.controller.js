const Contact = require ('../models/').Contact;

exports.contact_list = (req,res,next)=>{
    Contact.findAll({})
    .then(contacts => {
        res.json(contacts);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No contact found'});
    })
}

exports.contact_add = (req,res,next) => {
    Contact.create(req.body)
    .then(contact => {
        res.json(contact);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}