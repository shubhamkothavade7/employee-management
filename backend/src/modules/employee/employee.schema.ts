import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Employee extends Document {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  role!: string;

  @Prop({ required: true })
  salary!: string;

  @Prop({ required: true })
  email!: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
