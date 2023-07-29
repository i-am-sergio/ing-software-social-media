import mongoose from "mongoose";
import { ContenidoEvento, ContenidoPublicacion, DatosDePublicacion } from "./valueObjects.js";

const publicacionSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        get () {
            return this._id.toString();
        },
        set (value) {
            this._id = value;
        }
    },
    reacciones: {
        type: Number,
        required: true,
        get () {
            return this._reacciones;
        },
        set (value) {
            this._reacciones = Math.max(0, value);
        }
    },
    datosDePublicacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: DatosDePublicacion,
        required: true,
        get () {
            return this._datosDePublicacion;
        },
        set (value) {
            this._datosDePublicacion = value;
        }
    },
    contenidoPublicacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ContenidoPublicacion,
        required: true,
        get () {
            return this._contenidoPublicacion;
        },
        set (value) {
            this._contenidoPublicacion = value;
        }
    },
});

const comentarioSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        get () {
            return this._id;
        },
        set (value) {
            this._id = value;
        }
    },
    mensaje: {
        type: String,
        required: true,
        get () {
            return this._mensaje;
        },
        set (value) {
            this._mensaje = value;
        }
    },
    reacciones: {
        type: Number,
        required: true,
        get () {
            return this._reacciones;
        },
        set (value) {
            this._reacciones = Math.max(0, value);
        }
    },
    datosDePublicacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: DatosDePublicacion,
        required: true,
        get () {
            return this._datosDePublicacion;
        },
        set (value) {
            this._datosDePublicacion = value;
        }
    },
});

const eventoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        get () {
            return this._id;
        },
        set (value) {
            this._id = value;
        }
    },
    datos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: DatosDePublicacion,
        required: true,
        get () {
            return this._datos;
        },
        set (value) {
            this._datos = value;
        }
    },
    asistentes: {
        type: [String],
        required: true,
        get () {
            return this._asistentes;
        },
        set (value) {
            this._asistentes = value;
        }
    },
    contenidoEvento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ContenidoEvento,
        required: true,
        get () {
            return this._contenidoEvento;
        },
        set (value) {
            this._contenidoEvento = value;
        }
    },
});

const Publicacion = mongoose.model('Publicacion', publicacionSchema);
const Comentario = mongoose.model('Comentario', comentarioSchema);
const Evento = mongoose.model('Evento', eventoSchema);

export { Publicacion, Comentario, Evento };
