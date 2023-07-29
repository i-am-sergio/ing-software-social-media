import mongoose from "mongoose";

const datosUsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        get() {
            return this._nombre;
        },
        set(value) {
            this._nombre = value;
        }
    },
    fotoPerfil: {
        type: String, // En este caso, asumimos que la fotoPerfil es una URL de la imagen
        get() {
            return this._fotoPerfil;
        },
        set(value) {
            this._fotoPerfil = value;
        }
    },
    biografia: {
        type: String,
        required: true,
        get() {
            return this._biografia;
        },
        set(value) {
            this._biografia = value;
        }
    },
    fechaDeRegistro: {
        type: Date,
        required: true,
        get() {
            return this._fechaDeRegistro;
        },
        set(value) {
            this._fechaDeRegistro = value;
        }
    },
});

const emailSchema = new mongoose.Schema({
    direccion: {
        type: String,
        required: true,
        get() {
            return this._direccion;
        },
        set(value) {
            this._direccion = value;
        }
    },
});

const DatosUsuario = mongoose.model('DatosUsuario', datosUsuarioSchema);
const Email = mongoose.model('Email', emailSchema);

export { DatosUsuario, Email };
