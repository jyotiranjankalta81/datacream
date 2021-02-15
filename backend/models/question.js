const mongoose=require("mongoose");
const notesSchema= {
    A: String,
    B: String,
    C: String,
    D:String
}
const Note = mongoose.model("Note",notesSchema);
module.exports = Note;
