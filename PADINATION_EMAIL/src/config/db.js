const mongoose = require('mongoose')


const connect = ()=>{
return mongoose.connect("mongodb+srv://rohit:12345@cluster0.03mwk.mongodb.net/Paginationassign?retryWrites=true&w=majority",
// {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex :true,
//     useFindAndModify:true,
// }
)

}

module.exports = connect