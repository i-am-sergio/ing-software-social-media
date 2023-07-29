import mongoose from 'mongoose'
import ValObj from './valueObjects'

const ChatSchema = new mongoose.Schema({
    id:{
        type: Integer,
        required: true,
        trim: true
    },
    user1:{
        type: Usuario,
        required: true,
        trim: true
    },
    user2:{
        type: Usuario,
        required: true,
        trim: true
    },
    mensajes:{
        type: [{ type: Mensaje }],
        required: true,
        trim: true
    }
})

ChatSchema.path('id').get(value => value.toString());
ChatSchema.path('id').set(value => parseInt(value));

ChatSchema.path('user1').get(value => value ? value.toString() : '').set(value => value ? new Usuario(value) : null);

ChatSchema.path('user2').get(value => value ? value.toString() : '').set(value => value ? new Usuario(value) : null);

const MensajeSchema = new mongoose.Schema({
    id:{
        type: Integer,
        required: true,
        trim: true
    },
    contenido:{
        type: ValObj.ContenidoMensaje,
        required: true,
        trim: true
    },
    status:{
        type: bool,
        required: true,
        trim: true
    },
    datos:{
        type: ValObj.DatosMensaje,
        required: true,
        trim: true
    }
})

MensajeSchema.path('id').get(value => value.toString());
MensajeSchema.path('id').set(value => parseInt(value));

MensajeSchema.path('contenido').get(value => value ? value.toString() : '').set(value => value ? new ValObj.ContenidoMensaje(value) : null);

MensajeSchema.path('status').get(value => value ? value : false).set(value => value ? value : false);

MensajeSchema.path('datos').get(value => value ? value.toString() : '').set(value => value ? new ValObj.DatosMensaje(value) : null);

const Chat = mongoose.model('Chat', ChateSchema)
const Mensaje = mongoose.model('Mensaje', MensajeSchema)

export { Mensaje, Chat};