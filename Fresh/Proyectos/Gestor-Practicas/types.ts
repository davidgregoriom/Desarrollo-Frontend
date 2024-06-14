export type User = {
  id: string;
  full_name: string;
  email: string;
  password: string;
  administrator: boolean;
};

export type Booking = {
  id: number;
  asignaturas: string;
  hora_inicio: string;
  hora_fin: string;
  fecha: string;
  numnero_alumnos: number;
  id_usuario: number;
  id_aula: number;
};
