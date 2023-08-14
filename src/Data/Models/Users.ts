import { model, Schema } from "mongoose";

interface IUser {
    FirstName: String,
    LastName: String,
    Username: String,
    Password: String,
    Email: String,
    FavoritePlaces: String[]
}

const UserSchema = new Schema<IUser>({
    FirstName: {type: String, required: true},
    LastName: {type: String, required: true},
    Username: {type: String, required: true, unique: true},
    Email: {type: String, required: true, unique: true},
    Password: {type: String, required: true},
    FavoritePlaces: {type: [String], default: []}
})
const User = model<IUser>('Users', UserSchema);

export {
    User
}