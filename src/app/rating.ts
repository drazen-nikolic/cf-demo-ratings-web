export class Rating {
  constructor(
    public mark: number,
    public name: string,
    public comment: string
  ) {
  }

  public markPercentage(): number {
    return this.mark * 20 / 100;
  }
}
