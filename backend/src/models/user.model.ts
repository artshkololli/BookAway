import { Schema, model } from "mongoose";

export interface User{
    id:string;
    email:string;
    password:string; 
    name:string;
    address:string;
    isAdmin:boolean;
}

export const UserSchema = new Schema<User>(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        address:{type:String,required:true},
        isAdmin:{type:Boolean,required:true},
    },{
        //to have id field
        toJSON:{
            virtuals:true
        },
        //when getting value from database to use in code
        toObject:{
            virtuals:true
        },
        //When models are created or updated timestamps
        timestamps:true
    }
)

export const UserModel = model<User>('user',UserSchema);