import { IUser } from "../db/UserModel";
import mongoose, { Document } from "mongoose";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserModel } from "../db/UserModel";

export class UserRepository implements IUserRepository {
  async createUser(user: IUser): Promise<IUser & Document> {
    const newUser = new UserModel(user);
    return await newUser.save();
  }

  async findUserById(id: string): Promise<IUser | null> {
    return UserModel.findById(id);
  }

  async getHistoricalData(
    id: string,
    startDate: Date,
    endDate: Date
  ): Promise<any> {
    return UserModel.find({
      _id: id,
      "signos_vitales.fecha": { $gte: startDate, $lte: endDate },
    });
  }

  async addConsultation(
    userId: string,
    consultationData: any
  ): Promise<IUser | null> {
    return UserModel.findByIdAndUpdate(
      userId,
      { $push: { consultas_medicas: consultationData } },
      { new: true }
    );
  }

  async addVitalSign(
    userId: string,
    vitalSignData: any
  ): Promise<IUser | null> {
    return UserModel.findByIdAndUpdate(
      userId,
      { $push: { signos_vitales: vitalSignData } },
      { new: true }
    );
  }

  async addMedication(
    userId: string,
    medicationData: any
  ): Promise<IUser | null> {
    return UserModel.findByIdAndUpdate(
      userId,
      { $push: { historial_medicamentos: medicationData } },
      { new: true }
    );
  }

  async addHealthAlert(userId: string, alertData: any): Promise<IUser | null> {
    return UserModel.findByIdAndUpdate(
      userId,
      { $push: { alertas_salud: alertData } },
      { new: true }
    );
  }
  async getUserById(userId: string): Promise<IUser | null> {
    try {
      const objectId = new mongoose.Types.ObjectId(userId);
      return UserModel.findById(objectId);
    } catch (error) {
      console.error("Error al buscar el usuario:", error);
      return null;
    }
  }
}
