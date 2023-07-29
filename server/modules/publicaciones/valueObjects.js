import mongoose from "mongoose";

const datosDePublicacionSchema = new mongoose.Schema({
    fechaDeCreacion: {
        type: Date,
        required: true,
        get () {
            return this._fechaDeCreacion;
        },
        set (value) {
            this._fechaDeCreacion = value;
        }
    },
    autor: {
        type: String,
        required: true,
        get () {
            return this._autor;
        },
        set (value) {
            this._autor = value;
        }
    },
});

const contenidoEventoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        get () {
            return this._nombre;
        },
        set (value) {
            this._nombre = value;
        }
    },
    ubicacion: {
        type: String,
        required: true,
        get () {
            return this._ubicacion;
        },
        set (value) {
            this._ubicacion = value;
        }
    },
    descripcion: {
        type: String,
        required: false,
        get () {
            return this._descripcion;
        },
        set (value) {
            this._descripcion = value;
        }
    },
});

const contenidoPublicacionSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        get () {
            return this._nombre;
        },
        set (value) {
            this._nombre = value;
        }
    },
    imagen: {
        type: String,
        get () {
            return this._imagen;
        },
        set (value) {
            this._imagen = value;
        }
    },
    etiquetas: {
        type: [{ type: String }],
        get () {
            return this._etiquetas;
        },
        set (value) {
            this._etiquetas = value;
        }
    },
});

const DatosDePublicacion = mongoose.model('DatosDePublicacion', datosDePublicacionSchema);
const ContenidoEvento = mongoose.model('ContenidoEvento', contenidoEventoSchema);
const ContenidoPublicacion = mongoose.model('ContenidoPublicacion', contenidoPublicacionSchema);

export { DatosDePublicacion, ContenidoEvento, ContenidoPublicacion };
