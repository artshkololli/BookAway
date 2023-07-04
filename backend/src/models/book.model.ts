import {Schema, model} from 'mongoose';

export interface Book{
    id:string;
    name:string;
    price:number;
    tags: string[];
    stars: number;
    imageUrl: string;
    description: string;
    pages:number;
}

export const BookSchema = new Schema<Book>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        tags: {type: [String]},
        stars: {type: Number, required:true},
        imageUrl: {type: String, required:true},
        description: {type: String, required:true},
        pages: {type: Number, required:true}
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const BookModel = model<Book>('book', BookSchema);