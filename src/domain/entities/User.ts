export interface IUser {
  nombre: string;
  edad: number;
  genero: string;
  contacto: {
    telefono: string;
    email: string;
  };
  direccion: {
    calle: string;
    ciudad: string;
    codigo_postal: string;
  };
  historial_medico?: Array<{
    condicion: string;
    fecha_diagnostico: string;
  }>;
}
