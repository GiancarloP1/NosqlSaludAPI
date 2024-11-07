import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  nombre: string;
  edad: number;
  genero: string;
  consultas_medicas: Array<{
    fecha: Date;
    motivo: string;
    notas: string;
  }>;
  signos_vitales: Array<{
    fecha: Date;
    frecuencia_cardiaca: number;
    presion_arterial: {
      sistolica: number;
      diastolica: number;
    };
    temperatura_corporal: number;
    nivel_oxigeno: number;
  }>;
  historial_medicamentos: Array<{
    nombre: string;
    dosis: string;
    frecuencia: string;
    fecha_inicio: Date;
    fecha_fin: Date;
  }>;
  alertas_salud: Array<{
    fecha: Date;
    tipo: string;
    descripcion: string;
  }>;
}

const UserSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  genero: { type: String, required: true },
  consultas_medicas: [
    {
      fecha: { type: Date, required: true },
      motivo: { type: String, required: true },
      notas: { type: String }
    }
  ],
  signos_vitales: [
    {
      fecha: { type: Date, required: true },
      frecuencia_cardiaca: { type: Number, required: true },
      presion_arterial: {
        sistolica: { type: Number, required: true },
        diastolica: { type: Number, required: true }
      },
      temperatura_corporal: { type: Number, required: true },
      nivel_oxigeno: { type: Number, required: true }
    }
  ],
  historial_medicamentos: [
    {
      nombre: { type: String, required: true },
      dosis: { type: String, required: true },
      frecuencia: { type: String, required: true },
      fecha_inicio: { type: Date, required: true },
      fecha_fin: { type: Date }
    }
  ],
  alertas_salud: [
    {
      fecha: { type: Date, required: true },
      tipo: { type: String, required: true },
      descripcion: { type: String, required: true }
    }
  ]
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);
