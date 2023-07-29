import mongoose from "mongoose";
import { DatosUsuario, Email } from "./valueObjects.js";

const usuarioSchema = new mongoose.Schema({
    usuarioID: {
        type: String,
        required: true,
        get() {
            return this._usuarioID;
        },
        set(value) {
            this._usuarioID = value;
        }
    },
    amistades: {
        type: [String],
        default: [],
        get() {
            return this._amistades;
        },
        set(value) {
            this._amistades = value;
        }
    },
    publicaciones: {
        type: [String],
        default: [],
        get() {
            return this._publicaciones;
        },
        set(value) {
            this._publicaciones = value;
        }
    },
    mensajes: {
        type: [String],
        default: [],
        get() {
            return this._mensajes;
        },
        set(value) {
            this._mensajes = value;
        }
    },
    passwordvalue: {
        type: String,
        required: true,
        get() {
            return this._passwordvalue;
        },
        set(value) {
            this._passwordvalue = value;
        }
    },

    datosUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: DatosUsuario,
        required: true,
        get () {
            return this._datosUsuario;
        },
        set (value) {
            this._datosUsuario = value;
        }
    },

    email: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Email,
        required: true,
        get () {
            return this._email;
        },
        set (value) {
            this._email = value;
        }
    },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export { Usuario };
