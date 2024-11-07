import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserRepository } from '../../infrastructure/repositories/UserRepository';

const router = Router();

// Instancia del repositorio y del controlador
const userRepository = new UserRepository();
const userController = new UserController(userRepository);

// Rutas para las diferentes operaciones
router.post('/users', userController.createUser); // Ruta para crear un usuario
router.get('/historical/:userId', userController.getHistoricalData); // Ruta para datos históricos

// Nuevas rutas para consultas médicas, signos vitales, historial de medicamentos y alertas de salud
router.post('/users/:userId/consultations', userController.addConsultation); // Añadir una consulta médica
router.post('/users/:userId/vital-signs', userController.addVitalSign); // Añadir un registro de signos vitales
router.post('/users/:userId/medications', userController.addMedication); // Añadir un historial de medicamentos
router.post('/users/:userId/health-alerts', userController.addHealthAlert); // Añadir una alerta de salud
router.get('/users/:userId', userController.getUserById); // obtiene toda la información de un usuario
export default router;
