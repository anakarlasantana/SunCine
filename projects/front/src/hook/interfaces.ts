export interface STORED {
    get: () => unknown;
    set: (token: string) => void
    destroy: () => void;
  }
