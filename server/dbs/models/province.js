import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProvinceSchema = new Schema({
  id: {
    type: String,
    require: true
  },
  value: {
    type: Array,
    require: true
  }
})

const Province = mongoose.model('Province', ProvinceSchema)

export default Province
