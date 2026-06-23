declare module 'stockfish-nnue.wasm/stockfish.js' {
  interface StockfishEngine {
    addMessageListener?: (listener: (message: string) => void) => void;
    removeMessageListener?: (listener: (message: string) => void) => void;
    onMessage?: (message: string) => void;
    postMessage: (message: string) => void;
    terminate?: () => void;
  }

  const createStockfish: () => Promise<StockfishEngine>;
  export default createStockfish;
}
