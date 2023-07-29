import mongoose from 'mongoose';
import BoxNotificacion from './entidades';

const BoxNotificacionFactory = {
  create: function (id, user, notificaciones) {
    const boxNotificacion = new BoxNotificacion.BoxNotificacion({
      id: id,
      user: user,
      notificaciones: notificaciones
    });
    return boxNotificacion;
  }
};

export default BoxNotificacionFactory;
