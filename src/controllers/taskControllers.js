const Task = require('../models/task');
const decodeToken = require('../plugins/authorize');

module.exports = {

    getAll: async (req, res) => {
        try {
            console.log("user id "+ req.id);
            //decodeToken.decodeToken(req);

            const allTasks = await Task.find({userId : req.id});
            res.code(200).send(allTasks);
        } catch(e) {
            res.code(500).send(e);
        }
    },

    getAllUncompleted: async (req, res) => {
        try {
            const allTasks = await Task.find({userId : req.id, completed : false});
            res.code(200).send(allTasks);
        } catch(e) {
            res.code(500).send(e);
        }
    },

    create: async (req, res) => {
        try {
            const {content} = req.body;
            const task = {content: content, userId: req.id};
            const newTask = await Task.create(task);
            res.code(201).send(newTask);

        } catch(e) {
            res.code(500).send(e);
        }
    },

    delete: async (req, res) => {
        try {
            const taskId = req.params.id;
            const task = await Task.findOneAndDelete({_id : taskId, userId : req.id});
            if(!task){
                res.code(401).send({message:"Unauthorized"});
            }
            else {
                res.code(200).send({"message":"task is removed"});
            }

        } catch(e) {
            res.code(500).send(e);
        }
    },

    update: async (req, res) => {
        try {
            const taskId = req.params.id;
            const updates = req.body;
            const taskToUpdate = await Task.findOneAndUpdate({_id : taskId, userId : req.id}, updates);
            if(taskToUpdate){
                res.code(200).send(taskToUpdate);
            }
            else {
                res.code(401).send({message:"Unauthorized"});
            }
        } catch(e) {
            res.code(500).send(e);
        }
    },

    

}