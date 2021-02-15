const question = require("../models/question");
const getAllQuestions = async (req, res) => {
    try {
        const question = await question.find({});
        res.json(question);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
        
    }
}

const getAllQuestionsById = async (req, res) =>{
    try {
        const question = await question.findById({});
        res.json(question);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
}
module.exports= {
    getAllQuestions,getAllQuestionsById
}