const mongoose = require("mongoose");
const connect = async () => {
    try {

        // mongodb connection
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // useFindAndModify: false,
            // useCreateIndex: true

        });

        console.log(`MongoDB connected successfully ${con.connection.host}`);

    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connect;