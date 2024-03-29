import {model , Schema , Types} from 'mongoose';
import { Book, BookSchema } from './book.model';
import { OrderStatus } from '../constants/order_status';

export interface OrderItem{
    book:Book;
    price:number;
    quantity:number;
}

export const OrderItemSchema=new Schema<OrderItem>(
    {
        book:{type:BookSchema,required:true},
        price:{type:Number,required:true},
        quantity:{type:Number,required:true},
    }
)

export interface Order{
    id:number;
    items:OrderItem[];
    totalPrice:number;
    name:string;
    address:string;
    status:OrderStatus;
    user:Types.ObjectId; //will be used as foreign key for order
    createdAt:Date;
    updatedAt:Date
}

const orderSchema = new Schema<Order>(
    {
        name:{type:String,required:true},
        address:{type:String,required:true},
        totalPrice:{type:Number,required:true},
        items:{type:[OrderItemSchema],required:true},
        status:{type:String,default:OrderStatus.NEW}, //NEW is the enum in order_status.ts file
        user:{type:Schema.Types.ObjectId,required:true}
    },{
        timestamps:true,
        //Use toJson and toObject so you can use id instead of _id (ex:Order.id instead of Order_id)
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        }
    }
)

export const OrderModel = model ('order', orderSchema)