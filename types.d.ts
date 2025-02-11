export type Question = {
  
  /**
   * Testo delle domanda (HTMLString)
   */
  question: string;

  /**
   * Link opzionale all'immagine
   */
  image?: string;

  /**
   * Lista di risposte (HTMLString[])
   */
  responses: string[];

  /**
   * Punteggio della domanda
   */
  score: number;

  /**
   * Secondi disponibili per rispondere
   */
  time: number;

  /**
   * Indice della risposta corretta nell'array `responses`
   */
  correct: number;
};

export type ClientQuestion = Omit<Question, "correct">;

export type State = {
  status: "waiting" | "started" | "over";
  currentQuestionIndex: number;
  currentQuestion: ClientQuestion | null;
  timer: number | null;
  info: string[] | null;
};

export type Player = {
  pid: string;
  username: string;
  answers: number[];
  connected: boolean;
  score: number | null;
};

export type Players = Player[];

export type Questions = Question[];
