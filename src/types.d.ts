//importaciones
import { Weather, Visibility } from "./enums";

//interfaz o contrato
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

//el pick se utiliza para seleccionar las propiedades requeridas de la interfaz
/*
export type NonSensitiveInfoDiaryEntry = Pick<
  DiaryEntry,
  "id" | "date" | "weather" | "visibility"
>;
*/

//el Omit se utiliza para omitir propiedades de una interfaz
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;
export type NewDiaryEntry = Omit<DiaryEntry, "id">;
