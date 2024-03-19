import mongoose from "mongoose";




export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Mongodb connected successfully");
        });

        connection.on("error", (error) => {
            console.error("Mongodb connection error", error);
        });

    } catch (error) {
        console.error("Connection issue", error)
    }
}