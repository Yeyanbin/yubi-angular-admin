

export class YQueue<T>{

  private queueMaxSize = 50;
  private size = 0;
  private start = 0;
  private end = 0;

  private data: T[];
  
  constructor(maxSize: number = 0){
    maxSize > 0 && (this.queueMaxSize = maxSize);
    this.data = new Array(this.queueMaxSize);
  }
  
  public enQueue(v: T): boolean{

    if ( this.queueMaxSize === this.size ) return false;

    this.data[this.end] = v;
    this.end = this.addIndex(this.end);
    this.size++;
    return true;
  }

  public deQueue(): [boolean, T?] {
    if ( this.size === 0 ) return [false];

    const res = this.data[this.start];
    this.start = this.addIndex(this.start);

    return [true, res];
  }
  
  private addIndex(index: number) {
    return index < this.queueMaxSize ? ++index : 0;
  }
  
  public getSize(): number {
    return this.size;
  }

}