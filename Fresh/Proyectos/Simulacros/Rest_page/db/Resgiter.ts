import mongoose from "npm:mongoose";
import { register} from "../types.ts";


if(mongoose.connection.readyState == 0){
    const MONGO_URL = Deno.env.get("MONGO_URL");
    if(!MONGO_URL){
        throw new Error("MONGO_URL is not defined");
    }
    mongoose.connect(MONGO_URL);
}


const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

type UserModelType = mongoose.Document & register;

const UserModel = mongoose.model<UserModelType>("User",UserSchema);

export default UserModel;
