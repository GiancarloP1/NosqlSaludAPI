import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || '');
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error en la conexión a MongoDB:', error);
    process.exit(1);
  }
};
