import mongoose from 'mongoose'
import userEntities from '../usuario/entidades'

const DatosNotifySchema = new mongoose.Schema({
    fechacreacion:{
        type: Date,
        required: true,
        set: function (fc) {
            return new Date(fc);
        }
    },
    autor:{
        type: userEntities.usuario,
        required: true,
        set: function (usu) {
            return usu;
        }
    }
})

DatosNotifySchema.virtual('getFechacreacion').get(() => this.fechacreacion);

DatosNotifySchema.virtual('getAutor').get(() => this.autor);

const DatosNotify = mongoose.model('DatosNotify', DatosNotifySchema)
module.exports = {
    DatosNotify
};