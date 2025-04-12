import { IAluno } from 'app/shared/model/aluno.model';

export interface IMeta {
  id?: number;
  linguagemCienciasTecnologia?: number | null;
  cienciasHumanas?: number | null;
  cienciasNatureza?: number | null;
  matematica?: number | null;
  aluno?: IAluno | null;
}

export const defaultValue: Readonly<IMeta> = {};
