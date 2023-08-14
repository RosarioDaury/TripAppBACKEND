import mongoose from "mongoose";
import 'dotenv/config';

class ConnectionManagement {
    static Connect = async () => {
        try {
            console.log('CONNECTING TO MONGO....');
            await mongoose.connect(String(process.env.CONNECTIONSTRING));
            console.log('[SUCCESS] DB CONNECTED');
        } catch (error) {
            console.log('[ERROR] AT CONNECTING TO MONGO DATA BASE');
        }   
    }

    static Disconnect = async () => {
        try {
            await mongoose.connection.close();
            console.log('[CLOSED] MONGO CONNECTION CLOSED');
        } catch (error) {
            console.log('[ERROR] ERROR AT CLOSING MONGO CONNECTION');
        }   
    }
}

export {
    ConnectionManagement
}