const mongoose = require('mongoose');
const conn = async()=>{
    try {
        const response= await mongoose.connect(`${process.env.MONGO_URI}`);
        if(response){
            console.log("connected to db")
        }
    } catch (error) {
        console.error(error);
    }
}
conn()