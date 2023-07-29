import mongoose from 'mongoose'
import vos from './valueObjects'

const NotifySchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        set: function(ids){
            return new Number(ids);
        }
    },
    status:{
        type: Boolean,
        required: true,
        set: function (estat) {
            return new Boolean(estat);
        }
    },
    datos:{
        type: vos.DatosNotify,
        required: true,
        set: function (dat) {
            return dat;
        }
    },
    redirect:{
        type: String,
        required: true,
        trim: true,
        set: function (redd) {
            return new String(redd);
        }
    },
    
})

NotifySchema.virtual('getId').get(() => this.id);

NotifySchema.virtual('getStatus').get(() => this.status);

NotifySchema.virtual('getDatos').get(() => this.datos);

NotifySchema.virtual('getRedirect').get(() => this.redirect);

const Notify = mongoose.model('Notify', NotifySchema)


const BoxNotificacionSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        set: function (ids) {
            return new Number(ids);
        }
    },
    user:{
        type: Usuario,
        required: true,
        set: function (usr) {
            return usr;
        }
    },
    notificaciones:{
        type: [Notify],
        required: true
    }
})

DatosNotifySchema.methods.addnotificaciones = function (notificacion) {
    this.notificaciones.push(notificacion);
};

BoxNotificacionSchema.virtual('getId').get(() => this.id);

BoxNotificacionSchema.virtual('getUser').get(() => this.user);

BoxNotificacionSchema.virtual('getNotificaciones').get(() => this.notificaciones);

const BoxNotificacion = mongoose.model('BoxNotificacion', BoxNotificacionSchema)
module.exports = {
    Notify,
    BoxNotificacion
};