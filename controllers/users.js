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

// const update = (req, res) => {
//     const found = users.some(user => user.id == req.params.id)
//     if (found) {
//         const updateThis = users.filter(user => user.id == req.params.id)
//         updateThis[0].name = req.body.name;
//         const updateUser = {
//             name: "hello world"
//         }
//         updateThis.push(updateUser)
//         res.send(updateThis)
//     } else {
//         res.status(404).json({msg: `User id ${req.params.id} not found.`})
//     }

// };

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
                    user.address = 
                        req.body.street;
                        req.body.suite;
                        req.body.city;
                        req.body.zipcode;
                    
                    user.phone = req.body.phone ? updatedUser.phone : user.phone;
                    user.website = req.body.website ? updatedUser.website : user.website;
                    user.company = req.body;

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
// const update = (req, res) => {
//     const userUpdated = users.some(user => user.id == req.params.id)
//     res.json(userUpdated)

//     if(userUpdated) {
//         const userUpdated = req.body;
//         users.forEach(user => {
//           if(user.id === parseInt(req.params.id)){
//             user.name = userUpdated.name ? userUpdated.name : userUpdated.name;
//             user.username = userUpdated.username ? userUpdated.username : userUpdated.username;
    
//             res.json({msg: 'User updated', user })
//           }
//         });
//       }
    
//       else{
//         res.status(400).json({ msg: `No member with the id of ${req.params._id} found`})
//       }
// }
// const create = (res, req) => {
//     const newUser = {
//         // createUser
//         id: '11',
//         name: "Brett Smith",
//         username: "brsmith",
//         email: "brsmith@june.biz",
//         address: {
//             street: "Roger Ave",
//             suite: "Apt. 294",
//             city: "Austin",
//             zipcode: "78758",
//             geo: {
//               lat: "-37.3159",
//               lng: "81.1496"
//             }
//           },
//           phone: "1-786-244-8273 x2095",
//           website: "brett.org",
//           company: {
//             name: "Smith-Crona LLC",
//             catchPhrase: "Multi-layered client-server neural-net",
//             bs: "harness real-time e-markets"
//           }
//         // id: idAutoIncrement,
//         // name: createUser.name,
//         // username: createUser.username,
//         // email: createUser.email,
//         // address: {
//         //     street: createUser.address.street,
//         //     suite: createUser.address.suite,
//         //     city: createUser.address.city,
//         //     zipcode: createUser.address.zipcode,
//         //     geo: {
//         //       lat: createUser.address.geo.lat,
//         //       lng: createUser.address.geo.lng
//         //     }
//         //   },
//         //   phone: createUser.address.phone,
//         //   website: createUser.address.website,
//         //   company: {
//         //     name: createUser.address.company.name,
//         //     catchPhrase: createUser.address.company.catchPhrase,
//         //     bs: createUser.address.company.bs
//         //   }
//         // id: 11,
//         // name: req.body.name,
//         // username: req.body.username,
//         // email: req.body.email,
//         // address: {
//         //     street: req.body.address.street,
//         //     suite: req.body.address.suite,
//         //     city: req.body.address.city,
//         //     zipcode: req.body.address.zipcode,
//         //     geo: {
//         //       lat: req.body.address.geo.lat,
//         //       lng: req.body.address.geo.lng
//         //     }
//         // },
//         // phone: req.body.phone,
//         // website: req.body.website,
//         // company: {
//         //     name: req.body.company.name,
//         //     catchPhrase: req.body.company.catchPhrase,
//         //     bs: req.body.company.bs
//         // }
//         }
    
//     users.push(newUser)
//     res.json(users)
// }


module.exports = { 
    list,
    show,
    create,
    update,
    remove
}