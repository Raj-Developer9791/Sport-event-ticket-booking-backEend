module.exports = app => {
    const tutorial = require("../controllers/Event.controller.js");
    var router = require("express").Router();
  
    // Create a new Event
    router.post("/", tutorial.create);
  
    //FindByID
    router.get("/:id",tutorial.findOne)

    // Retrieve all Events
    router.get("/", tutorial.findAll);
  
    // Update an Event with name
    router.put("/:id", tutorial.update);
  
    // Delete an Event with name
    router.delete("/:id", tutorial.delete);
  
    app.use('/api/event', router);
  };
  