import BoxNotificacion from './entidades';

const BoxNotificacionRepository = {
  addNotificacion: function (boxNotificacion, notificacion) {
    boxNotificacion.notificaciones.push(notificacion);
  },
  deleteNotificacion: function (boxNotificacion, notificacionId) {
    boxNotificacion.notificaciones = boxNotificacion.notificaciones.filter(notif => notif.id !== notificacionId);
  },
  updateNotificacion: function (boxNotificacion, notificacionId, updatedNotificacion) {
    const index = boxNotificacion.notificaciones.findIndex(notif => notif.id === notificacionId);
    if (index !== -1) {
      boxNotificacion.notificaciones[index] = updatedNotificacion;
    }
  },
  getNotificaciones: function (boxNotificacion) {
    return boxNotificacion.notificaciones;
  }
};

export default BoxNotificacionRepository;
