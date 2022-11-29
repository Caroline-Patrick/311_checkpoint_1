const users = require('../data/index');
const createUser = require('../data/sampleUser')



const list = (req, res) => {
    res.json(users)
};

const show = (req, res) => {
    const getUsers = users.some(user => user.id == req.params.id)
    if (getUsers){
      res.send(users.filter(user => user.id == req.params.id))
    } else {
      res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
};

const create = (req, res) => {
    let counter = users.length +1;

    const newUser = {        
            id: counter,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            address: {
                street: req.body.address.street,
                suite: req.body.address.suite,
                city: req.body.address.city,
                zipcode: req.body.address.zipcode,
                geo: {
                  lat: req.body.address.geo.lat,
                  lng: req.body.address.geo.lng
                }
            },
            phone: req.body.phone,
            website: req.body.website,
            company: {
                name: req.body.company.name,
                catchPhrase: req.body.company.catchPhrase,
                bs: req.body.company.bs
            }
}
        users.push(newUser);
        counter++;
        res.json({msg: 'User Added: ', newUser})
};


const update = (req, res) => {
    
    const found = users.some(user => user.id == req.params.id)
    // if id of user is found, found = true
    
    if (found) {
        const updatedUser = req.body;
        console.log(updatedUser)

        users.forEach(user => {
            if(user.id ==req.params.id){
                user.name = req.body.name ? updatedUser.name : user.name;
                user.username = req.body.username ? updatedUser.username : user.username;
                user.email = req.body.email ? updatedUser.email : user.email;
                    
                    user.phone = req.body.phone ? updatedUser.phone : user.phone;
                    user.website = req.body.website ? updatedUser.website : user.website;
                    
                    res.json({msg: "User Updated Successfully: ", user})            }
        })
        

        
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }

};

const remove = (req, res) => {
    const found = users.some(user => user.id == req.params.id)
    if (found){
        const removeThis = users.filter(user => user.id == req.params.id)
        users.splice(removeThis, 1);
        res.send(users)
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
};



module.exports = { 
    list,
    show,
    create,
    update,
    remove
}