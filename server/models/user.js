const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { isEmail } = require('validator');
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 20,
      index: { unique : true}
    },
    phone_number:{
      type: Number
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'invalid email'],
        createIndexes: { unique: true },
      },
    password: {
        type: String, 
        required: true 
      },
    });
    schema.pre('save', async function save(next) {
        if (!this.isModified('password')) return next();
        try {
          const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
          this.password = await bcrypt.hash(this.password, salt);
          return next();
        } catch (err) {
          return next(err);
        }
      });
      
      schema.methods.validatePassword = async function validatePassword(data) {
        return bcrypt.compare(data, this.password);
      };
      
      const Model = mongoose.model('User', UserSchema);
      
      module.exports = Model;
