class YElement<V> {
  constructor(
    public value: V,
    public prev?: YElement<V>,
    public next?: YElement<V>) {
  }
}

export class LinkedList<V> {

  private start?: YElement<V>;
  private end?: YElement<V>;
  private size = 0;
  constructor(){}

  public push(v: V): boolean {
    if ( !this.start ) {
      this.end = this.start = new YElement(v, undefined, undefined);
      return true;
    }
    
    const prev = this.end;
    this.end = new YElement(v, this.end);
    prev!.next = this.end;
    this.size++;
    return true;
  }

  public pop(): V | undefined {
    
    const res = this.end?.value;

    if ( this.end ) {
      if ( this.start === this.end ) {
        this.start = this.end = undefined;
      } else {
        this.end = this.end.prev;
        this.end!.next = undefined;
        this.size--;
      }
    }

    return res;
  }

  public insert(v: V, index: number): boolean {
    
    if ( index > this.size ) { 
      return false; 
    } else if ( index === this.size ) {
      return this.push(v);
    } else {
      
      let now = this.start;
      let newElement: YElement<V>; 

      while (index !== 0) {
        now = now?.next;
        --index;  
      }

      newElement = new YElement(v, now?.prev, now);
      now!.prev && (now!.prev.next = newElement);
      now!.prev = newElement;
      return true;
    }
  }

  public foreach(func: (item: V, index: number) => void) {
    let now = this.start;
    let index = 0;
    do {
      func(now!.value, index++); 
    } while( now === this.end );
  }

  public getSize(): number {
    return this.size;
  }
}