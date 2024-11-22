export interface STORED {
    get: () => unknown;
    set: (val: STORED) => void
    destroy: () => void;
  }
