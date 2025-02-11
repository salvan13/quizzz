// @ts-check

/**
 * @type {import("./types").Questions}
 */
export const questions = [
  {
    question: "HTML è l'acronimo di...?",
    responses: [
      "HyperText Markup Language",
      "HomeText Markup Language",
      "Homer Taiwan Main Linux",
      "HyperText Main Language",
    ],
    score: 1,
    time: 30,
    correct: 0
  },
  {
    question: "In che anno è stata pubblicata la prima pagina web?",
    responses: [
      "1976",
      "1982",
      "1991",
      "1995"
    ],
    score: 2,
    time: 30,
    correct: 2
  },
  {
    question: "Il seguente è il logo di quale browser?",
    image: "images/netscape.png",
    responses: [
      "Network Navigator",
      "Netscape Navigator",
      "Google Chrome",
      "Internet Explorer",
    ],
    score: 2,
    time: 30,
    correct: 1
  },
  {
    question: "Quale tra i seguenti tag HTML non esiste?",
    responses: [
      "&lt;b&gt;",
      "&lt;progress&gt;",
      "&lt;main&gt;",
      "&lt;tab&gt;",
      "&lt;slot&gt;",
      "&lt;div&gt;"
    ],
    score: 3,
    time: 30,
    correct: 3
  },
  {
    question: "La rappresentazione di un documento HTML in memoria (struttura e contenuto) è detta",
    responses: [
      "HTML Structure and Content",
      "Document Snapshot",
      "Document Object Model",
      "HTML Data Structure"
    ],
    score: 3,
    time: 30,
    correct: 2
  },
  {
    question: "Come si produce il seguente input?",
    image: "images/datetime.png",
    responses: [
      "&lt;input type=\"datetime\"&gt;",
      "&lt;input type=\"datetime-local\"&gt;",
      "Con la libreria DateTimePicker.js",
      "&lt;date-time-picker&gt;"
    ],
    score: 3,
    time: 30,
    correct: 1
  },
  {
    question: "Il seguente link apre un nuovo tab:<br><pre>&lt;a href=\"...\" target=\"_blank\"&gt;...&lt;/a&gt;</pre>",
    responses: [
      "falso",
      "vero"
    ],
    score: 1,
    time: 30,
    correct: 1
  },
  {
    question: "Qual è un valido commento in HTML?",
    responses: [
      "// commento",
      "/* commento */",
      "# commento",
      "&lt;!-- commento --&gt;"
    ],
    score: 2,
    time: 30,
    correct: 3
  },
  {
    question: "Quale attributo HTML specifica un testo alternativo ad un'immagine?",
    responses: [
      "alt",
      "desc",
      "text",
      "title"
    ],
    score: 2,
    time: 30,
    correct: 0
  },
  {
    question: "Quale dei seguenti NON è un modo valido per aggiungere stile ad una pagina HTML?",
    responses: [
      "&lt;link rel=\"stylesheet\" href=\"style.css\&gt;",
      "&lt;style href=\"style.css\"&gt;",
      "&lt;style&gt; div { color: red; } &lt;/style&gt;",
      "&lt;div style=\"color: red;\"&gt;&lt;/div&gt;"
    ],
    score: 3,
    time: 30,
    correct: 1
  },
  {
    question: "Cosa significa il codice HTTP <pre>201?</pre>",
    responses: [
      "OK",
      "Moved Permanently",
      "Not Found",
      "Created",
      "Done",
      "Yes"
    ],
    score: 3,
    time: 30,
    correct: 3
  },
  {
    question: "Quale header HTTP è usato per specificare il tipo di contenuto della risposta?",
    responses: [
      "Response-Type",
      "Content-Type",
      "Response-Content",
      "Accept"
    ],
    score: 2,
    time: 30,
    correct: 1
  },
  {
    question: "Cosa fa l'attributo <pre>action</pre> in un tag <pre>&lt;form&gt;</pre>?",
    responses: [
      "Specifica il metodo HTTP da utilizzare",
      "Specifica dove inviare i dati del form",
      "Cambia il comportamento del pulsante di submit",
      "Valida i dati inseriti nel form"
    ],
    score: 3,
    time: 30,
    correct: 1
  },
  {
    question: "Quale selettore CSS corrisponde a un elemento con l'id \"header\"?",
    responses: [
      "#header",
      ".header",
      "header",
      "[header]"
    ],
    score: 1,
    time: 30,
    correct: 0
  },
  {
    question: "Quale valore della proprietà CSS position permette di posizionare un elemento rispetto al viewport?",
    responses: [
      "static",
      "relative",
      "absolute",
      "fixed"
    ],
    score: 2,
    time: 30,
    correct: 3
  },
  {
    question: "Che cosa produce il seguente codice CSS?",
    image: "images/css0.png",
    responses: [
      "Un layout con 3 colonne di larghezza uguale",
      "Un layout con 3 righe di altezza uguale",
      "Una colonna centrata nel div",
      "Un layout con colonne di larghezza fissa",
    ],
    score: 4,
    time: 30,
    correct: 0
  },
  {
    question: "Qual è il risultato della regola CSS:<br><pre>div &gt; p { color: red; }?</pre>",
    responses: [
      "Cambia il colore di tutti i paragrafi in rosso",
      "Cambia il colore solo dei paragrafi figli diretti di un &lt;div&gt;",
      "Cambia il colore solo del primo paragrafo di un &lt;div&gt;",
      "Non ha alcun effetto"
    ],
    score: 3,
    time: 30,
    correct: 1
  },
  {
    question: "Come si specifica un'animazione CSS?",
    responses: [
      "@keyframes",
      "@frames",
      "@animate",
      "@motion",
    ],
    score: 2,
    time: 30,
    correct: 0
  },
  {
    question: "Cosa fa il metodo<br><pre>Array.prototype.map()</pre>?",
    responses: [
      "Modifica direttamente l'array originale",
      "Esegue una funzione su ogni elemento e restituisce un nuovo array",
      "Filtra gli elementi di un array in base a una condizione",
      "Restituisce la lunghezza dell'array"
    ],
    score: 2,
    time: 30,
    correct: 1
  },
  {
    question: "Qual è il principale vantaggio del protocollo HTTP/2 rispetto a HTTP/1.1?",
    responses: [
      "Compressione dei dati più efficiente",
      "Supporto per richieste asincrone",
      "Multiplexing delle richieste su una singola connessione",
      "Introduzione dei certificati SSL/TLS",
    ],
    score: 3,
    time: 30,
    correct: 2
  },
  {
    question: "Cosa sono i CORS (Cross-Origin Resource Sharing)?",
    responses: [
      "Il supporto per più tipi di dispositivi",
      "La capacità di un sito web di fare richieste a risorse di un altro dominio",
      "La crittografia di connessioni HTTPS",
      "La protezione contro attacchi XSS"
    ],
    score: 3,
    time: 30,
    correct: 1
  },
  {
    question: "Quale header HTTP è usato per abilitare CORS?",
    responses: [
      "Access-Control-Allow-Origin",
      "Origin-Control-Allow",
      "Content-Security-Policy",
      "Allow-Cross-Origin",
    ],
    score: 4,
    time: 30,
    correct: 0
  },
  {
    question: "Quale codice di stato HTTP indica che una risorsa è stata spostata permanentemente?",
    responses: [
      "300",
      "301",
      "302",
      "303",
    ],
    score: 4,
    time: 30,
    correct: 1
  },
  {
    question: "Quale attributo del tag <pre>&lt;script&gt;</pre> permette al codice di essere trattato come un modulo JavaScript (ESM)?",
    responses: [
      "esm=\"true\"",
      "esm=\"next\"",
      "type=\"esm\"",
      "type=\"module\"",
    ],
    score: 4,
    time: 30,
    correct: 3
  },
  {
    question: "Cosa fa l'attributo <pre>defer</pre> del tag <pre>&lt;script&gt;</pre>?",
    responses: [
      "Esegue lo script immediatamente dopo essere stato scaricato",
      "Esegue lo script prima del caricamento del DOM",
      "Esegue lo script solo dopo che l'intera pagina è stata caricata",
      "Scarica lo script in parallelo ma lo esegue dopo il parsing del DOM",
    ],
    score: 3,
    time: 30,
    correct: 3
  },
  {
    question: "Cosa succede se si omette il valore dell'attributo <pre>method</pre> in un tag <pre>&lt;form&gt;</pre>?",
    responses: [
      "Il metodo predefinito è GET",
      "Il metodo predefinito è POST",
      "Il metodo predefinito è PUT",
      "Il form non funzionerà",
    ],
    score: 2,
    time: 30,
    correct: 0
  },
  {
    question: "Qual è il significato dell'attributo <pre>data-*</pre> in HTML?",
    responses: [
      "Viene usato per definire metadati per motori di ricerca",
      "Permette di aggiungere attributi personalizzati per dati non strutturati",
      "Specifica il contenuto principale di un tag",
      "Imposta l'origine dei dati dinamici",
    ],
    score: 3,
    time: 30,
    correct: 1
  },
  {
    question: "Qual è la specificità di un selettore CSS di tipo <pre>#id</pre> rispetto a un <pre>.class</pre>?",
    responses: [
      "Ha una specificità più alta",
      "Ha una specificità più bassa",
      "Entrambi hanno la stessa specificità",
      "Dipende dal contesto del DOM",
    ],
    score: 2,
    time: 30,
    correct: 0
  },
  {
    question: "Qual è il risultato del selettore CSS<br><pre>:nth-child(2n)</pre>?",
    responses: [
      "Seleziona tutti gli elementi pari",
      "Seleziona tutti gli elementi dispari",
      "Seleziona solo il secondo elemento",
      "Seleziona tutti gli elementi contenenti 2 caratteri 'n'",
    ],
    score: 2,
    time: 30,
    correct: 1
  },
  {
    question: "Cosa significa \"hoisting\" in JavaScript?",
    responses: [
      "La possibilità di eseguire codice asincrono",
      "Il comportamento di dichiarazioni di variabili o funzioni spostate in cima al loro scope",
      "La capacità di esportare moduli",
      "L'ottimizzazione delle chiamate ricorsive",
    ],
    score: 4,
    time: 30,
    correct: 1
  },
  {
    question: "Come si verifica se una variabile è un array in JavaScript?",
    responses: [
      "typeof myVar === \"array\"",
      "myVar.isArray()",
      "Array.isArray(myVar)",
      "instanceof Array(myVar)",
    ],
    score: 3,
    time: 30,
    correct: 2
  },
  {
    question: "Che cosa fa l'operatore <pre>??</pre> in JavaScript?",
    responses: [
      "Restituisce il primo valore definito tra due valori",
      "Restituisce il primo valore falso tra due valori",
      "Verifica l'uguaglianza tra due valori",
      "Esegue il coalescing di un array",
    ],
    score: 3,
    time: 30,
    correct: 0
  },
  {
    question: "Cosa succede se scrivi <pre>&lt;blink&gt;</pre> in un file HTML?",
    responses: [
      "Il testo lampeggia come fosse il 1998",
      "Il browser ignora il tag, a meno che non sia vintage",
      "Compare un errore: \"Comportamento non supportato\"",
      "Il browser crasha",
    ],
    score: 2,
    time: 30,
    correct: 1
  },
  {
    question: "Cosa fa setTimeout in JavaScript?",
    responses: [
      "Avvia un timer che chiude il tab del browser dopo l'intervallo",
      "Esegue una funzione dopo un certo intervallo di tempo",
      "Fa esplodere il computer dopo l'intervallo di tempo",
      "Controlla l'orologio del server",
    ],
    score: 2,
    time: 30,
    correct: 1
  },
  {
    question: "Quale delle seguenti opzioni permette di disegnare un rettangolo pieno in un <pre>&lt;canvas&gt;</pre>?",
    responses: [
      "drawRect()",
      "strokeRect(x, y, width, height)",
      "renderRect(x, y, width, height)",
      "fillRect(x, y, width, height)",
    ],
    score: 4,
    time: 30,
    correct: 3
  },
  {
    question: "Qual era lo scopo originale del World Wide Web?",
    responses: [
      "Condividere informazioni accademiche tra ricercatori",
      "Vendere prodotti online",
      "Creare una piattaforma di intrattenimento",
      "Sviluppare un sistema di comunicazione militare",
    ],
    score: 2,
    time: 30,
    correct: 0
  },
  {
    question: "Quale unità CSS è relativa alla dimensione del font del root element?",
    responses: [
      "px",
      "em",
      "%",
      "vw",
      "rem",
      "non esiste"
    ],
    score: 3,
    time: 30,
    correct: 4
  },
  {
    question: "In quale linguaggio è scritto Node.js?",
    responses: [
      "Python",
      "JavaScript",
      "Java",
      "C++",
    ],
    score: 3,
    time: 30,
    correct: 3
  },
  {
    question: "Qual è il seguente colore CSS?",
    image: "images/rebeccapurple.png",
    responses: [
      "purple",
      "violet",
      "rebeccapurple",
      "lisaviolet",
    ],
    score: 2,
    time: 30,
    correct: 2
  },
  {
    question: "Quale attributo di <pre>&lt;input&gt;</pre> permette di accettare solo determinati tipi di file?",
    responses: [
      "accept",
      "pattern",
      "required",
      "filter",
    ],
    score: 3,
    time: 30,
    correct: 0
  },
  {
    question: "Qual è il nome del seguente gioco?",
    image: "images/kya.png",
    responses: [
      "Orazio",
      "Little Kid",
      "Kyabetsu",
      "Little Adventures",
    ],
    score: 5,
    time: 30,
    correct: 2
  }
];
