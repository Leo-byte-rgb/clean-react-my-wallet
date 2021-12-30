export interface FormatDateRecord {
  formatDate(params: FormatDateRecord.Params): string;
}

export namespace FormatDateRecord {
  export type Params = {
    date: Date;
  };
}
