import { IUserRepository } from '../domain/repositories/IUserRepository';

export class GetHistoricalData {
  constructor(private userRepository: IUserRepository) {}

  async execute(userId: string, startDate: Date, endDate: Date) {
    return await this.userRepository.getHistoricalData(userId, startDate, endDate);
  }
}
