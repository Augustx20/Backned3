//@ts-check
 import { Schema, model } from 'mongoose';
 import monsoosePaginate from 'mongoose-paginate-v2'

const studentSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  courses: {
    type: [
      {
        course: {
          type: Schema.Types.ObjectId,
          ref: 'courses',
        },
      },
    ],
    default: [],
  },
});




studentSchema.pre('find', function () {  // utilizar variables o acciones despues de un find o delete o updateOne
  console.log('midleware active')
  this.populate('courses.course');  //normalmente no se utiliza en empresas
});

/* studentSchema.pre('findOne', function () {
  this.populate('courses.course');
}); */


export const StudentsModel = model('students', studentSchema); 