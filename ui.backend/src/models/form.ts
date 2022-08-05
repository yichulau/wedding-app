import mongoose from 'mongoose';

interface FormAttrs {
    fullName: string;
    age: number;
}

interface FormDoc extends mongoose.Document {
    fullName: string;
    age: number;
}

interface FormModel extends mongoose.Model<FormDoc> {
    build(attrs: FormAttrs): FormDoc;
}

const formSchema = new mongoose.Schema(
    {
      fullName: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      }
    },
    {
      toJSON: {
        transform(doc, ret) {
          ret.id = ret._id;
          delete ret._id;
        },
      },
    }
  );
  formSchema.statics.build = (attrs: FormAttrs) => {
    return new Form(attrs);
  };

  const Form = mongoose.model<FormDoc, FormModel>('Form',formSchema);

  export { Form };