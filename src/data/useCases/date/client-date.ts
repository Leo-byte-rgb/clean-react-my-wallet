import { GetYearsByRecords } from "../../../domain/useCases/DatesByRecords/year-by-records";

export class DateClientFormatter implements GetYearsByRecords {
  getYears({ records }: GetYearsByRecords.Params) {
    if (!records) return [new Date().getFullYear()];
    const years: Array<number> = [];
    records.forEach(({ createdAt }) => {
      const year = new Date(createdAt).getFullYear();
      if (!years.includes(year)) years.push(year);
    });

    return years;
  }
}
