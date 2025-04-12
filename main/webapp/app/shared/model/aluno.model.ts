import dayjs from 'dayjs';

export interface IAluno {
  id?: number;
  nome?: string;
  dataNascimento?: dayjs.Dayjs;
}

export const defaultValue: Readonly<IAluno> = {};
