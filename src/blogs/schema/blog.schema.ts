import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

// export enum Category {
//   FAST_FOOD = 'Fast Food',
//   CAFE = 'Cafe',
//   FINE_DINING = 'Fine Dinning',
// }

@Schema()
export class Blog {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  content: string;
  @Prop()
  dateCreated: string;

  @Prop()
  images?: object[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: any;
}

export const RestaurantSchema = SchemaFactory.createForClass(Blog);
