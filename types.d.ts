export type Question = {
  
  /**
   * Testo della domanda
   * @type HTMLString
   * @example "Cos'è un tag <pre>&lt;script&gt;</pre>?"
   */
  question: string;

  /**
   * Link opzionale all'immagine
   * @example "images/netscape.png"
   * @example "https://www.skillbill.it/images/logo_skillbill_00.svg"
   */
  image?: string;

  /**
   * Lista di risposte
   * @type HTMLString[]
   * @example ["Marte", "Giove", "Venere", "Plutone"]
   */
  responses: string[];

  /**
   * Punteggio della domanda
   */
  score: number;

  /**
   * Secondi disponibili per rispondere (almeno 30 secondi, di più per domande lunghe)
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
