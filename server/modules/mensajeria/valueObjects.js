import mongoose from 'mongoose'

const DatosMensajeSchema = new mongoose.Schema({
    fechaCreacion:{
        type: Datetime,
        required: true,
        trim: true
    },
    autor:{
        type: Usuario,
        required: true,
        trim: true
    },
    destinatario:{
        type: Usuario,
        required: true,
        trim: true
    }
})

DatosMensajeSchema.path('fechaCreacion').get(value => value.toISOString());
DatosMensajeSchema.path('fechaCreacion').set(value => new Date(value));

DatosMensajeSchema.path('autor').get(value => value ? value.toString() : '').set(value => value ? new Usuario(value) : null);

DatosMensajeSchema.path('destinatario').get(value => value ? { id: value._id.toString(), nombre: value.nombre } : null).set(value => value && value.id ? new Usuario({ _id: value.id, nombre: value.nombre }) : null);

const ContenidoMensajeSchema = new mongoose.Schema({
    mensaje:{
        type: String,
        required: true,
        trim: true
    },
    imagen:{
        type: Blob,
        required: true,
        trim: true
    },
    video:{
        type: Video,
        required: true,
        trim: true
    }
})

ContenidoMensajeSchema.path('imagen').get(value => value.toString('base64'));
ContenidoMensajeSchema.path('imagen').set(value => Buffer.from(value, 'base64'));
ContenidoMensajeSchema.path('video').get(value => value ? value : '').set(value => value ? value : '');

const DatosMensaje = mongoose.model('DatosMensaje', DatosMensajeeSchema)
const ContenidoMensaje = mongoose.model('ContenidoMensaje', ContenidoMensajeSchema)

export { DatosMensaje, ContenidoMensaje};