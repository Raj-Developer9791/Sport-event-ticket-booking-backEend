const db = require("../models")
const Events = db.events;

exports.create = (req, res) => {
    if (!req.body.Name) {
        res.status(400).send({ message: "content can not be empty!" })
        return
    }

    // create tutorial
    const events = new Events({
        Name: req.body.Name,
        Email:req.body.Email,
        Phoneno:req.body.Phoneno,
        date:req.body.date,
        city:req.body.city,
        Address:req.body.Address
    })
    // save Tutorials in the databsse
    events.save(events)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "some error occurred while creating the tutorial."
            })
        })
}
// FindAll
exports.findAll = (req, res) => {
  const Name = req.query.Name;
  const condition = Name ? { Name: { $regex: new RegExp(Name, "i") } } : {};

  Events.find(condition)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving events."
          });
      });
};

//findOne
exports.findOne = (req, res)=> {
  const id = req.params.id;

  Events.findById(id)
  .then(data => {
    if(!data)
    res.status(404).send({ message: "Not found Tutorial with id" + id});
    else res.send(data);
  })

  .catch(err =>{
    res
    .status(500)
    .send({message : "Error retrieving Tutorial with id=" + id});
  });
};


// Update an object
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!",
    });
  }

  const id = req.params.id;

  Events.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
         res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
       res.send({ message: "Tutorial updated successfully!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};



// Delete an object
exports.delete = (req, res) => {
  const id = req.params.id;

  Events.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

