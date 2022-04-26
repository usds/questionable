/* eslint-disable import/no-cycle */
import { addToPool, existsInPool }                 from '../constructable/lib/pools';
import { TCollectable }                            from '../metadata/types/TCollectable';
import { TRefCoreProperties }                      from '../metadata/properties/MRef';
import { IRefCore }                                from '../metadata/IRefCore';
import { REF_TYPE, TRefType }                      from '../metadata/properties/type/TRefType';
import { checkInstanceOf, ClassList, TInstanceOf } from '../lib/instanceOf';
import { getGUID }                                 from '../lib/uuid';
import { BaseCore }                                from './BaseCore';

/**
 * Base class for all objects that should be stored by reference,
 * most commonly because they represent unique rows in a table or
 * distinct, complex structures whose value can be inferred by unique identfiers
 */
export class RefCore extends BaseCore implements IRefCore {
  public get instanceOfCheck(): TInstanceOf {
    return ClassList.ref;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static [Symbol.hasInstance](obj: any) {
    return checkInstanceOf({ names: [ClassList.ref], obj });
  }

  // public static isRef(data: any): data is RefCore {
  //   return 'title' in data;
  // }

  // public static is<T>(data: any): data is T {
  //   if (T === RefCore) {

  //   }
  //   return 'title' in data;
  // }

  // public isRef(data: any): data is RefCore {
  //   return RefCore.isRef(this);
  // }

  public static override create(data: Partial<RefCore>) {
    if (data instanceof RefCore) {
      return data;
    }
    return new RefCore(data);
  }

  public static override createOptional(data?: Partial<RefCore>) {
    if (!data || !super.createOptional(data)) {
      return undefined;
    }
    return RefCore.create(data);
  }

  #_id: string;

  #_label: string;

  #_type: TRefType;

  #_title: string;

  /**
   * Instantiation will generate a uuid for this object
   * @param data optional data
   */
  public constructor(data: Partial<RefCore>) {
    super(data);
    if (data.id && data.id.length > 0) {
      this.#_id = data.id;
    } else {
      this.#_id = getGUID({ short: true });
    }
    this.#_label = data.label || '';
    this.#_title = data.title || '';
    this.#_type  = data.type || REF_TYPE.DEFAULT;
  }

  public get id(): string {
    return this.#_id;
  }

  public get label() {
    return this.#_label;
  }

  public get title(): string {
    return this.#_title;
  }

  public get type(): TRefType {
    return this.#_type;
  }

  public set<T>(prop: TRefCoreProperties, val: T) {
    this[`#_${prop}`] = val;
  }

  public existsIn(data: TCollectable): boolean {
    return existsInPool(data, this);
  }

  public add(data: TCollectable): RefCore {
    addToPool(data, this);
    return this;
  }
  // /**
  //  *  Root class has no collections, will always be false
  //  * @param val
  //  * @returns
  //  */
  // public existsIn(val: RefCore): boolean {
  //   this.noop(val);
  //   return false;
  // }

  // /**
  //  * This does nothing but establish the pattern for all other classes to build from;
  //  * @param data any questionable object
  //  */
  // public add(data: RefCore): RefCore {
  //   this.noop(data);
  //   return this;
  // }
}