import { Request, Response } from 'express';
import { IUserRepository } from '../../domain/repositories/IUserRepository';

export class UserController {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const newUser = await this.userRepository.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Error al crear el usuario", error });
    }
  };

  public getHistoricalData = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    const { startDate, endDate } = req.query;

    try {
      const data = await this.userRepository.getHistoricalData(
        userId,
        new Date(startDate as string),
        new Date(endDate as string)
      );
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener datos históricos", error });
    }
  };

  public addConsultation = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const consultation = await this.userRepository.addConsultation(userId, req.body);
      res.status(201).json(consultation);
    } catch (error) {
      res.status(500).json({ message: "Error al añadir la consulta médica", error });
    }
  };

  public addVitalSign = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const vitalSign = await this.userRepository.addVitalSign(userId, req.body);
      res.status(201).json(vitalSign);
    } catch (error) {
      res.status(500).json({ message: "Error al añadir el signo vital", error });
    }
  };

  public addMedication = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const medication = await this.userRepository.addMedication(userId, req.body);
      res.status(201).json(medication);
    } catch (error) {
      res.status(500).json({ message: "Error al añadir el medicamento", error });
    }
  };

  public addHealthAlert = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const alert = await this.userRepository.addHealthAlert(userId, req.body);
      res.status(201).json(alert);
    } catch (error) {
      res.status(500).json({ message: "Error al añadir la alerta de salud", error });
    }
  };

  public getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const user = await this.userRepository.getUserById(userId);
  
      if (!user) {
        res.status(404).json({ message: "Usuario no encontrado" });
        return;
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los datos del usuario", error });
    }
  };
  
  
}
