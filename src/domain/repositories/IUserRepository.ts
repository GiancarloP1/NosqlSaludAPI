import { IUser } from '../../infrastructure/db/UserModel';

export interface IUserRepository {
  createUser(user: IUser): Promise<IUser>;
  findUserById(id: string): Promise<IUser | null>;
  getHistoricalData(id: string, startDate: Date, endDate: Date): Promise<any>;

  
  addConsultation(userId: string, consultationData: any): Promise<IUser | null>;
  addVitalSign(userId: string, vitalSignData: any): Promise<IUser | null>;
  addMedication(userId: string, medicationData: any): Promise<IUser | null>;
  addHealthAlert(userId: string, alertData: any): Promise<IUser | null>;
  
  //all data
  getUserById(userId: string): Promise<IUser | null>;
}
