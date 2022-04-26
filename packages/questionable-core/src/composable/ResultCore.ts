/* eslint-disable import/no-cycle */
import { addToPool, existsInPool }                       from '../constructable/lib/pools';
import { IResultCore }                                   from '../metadata/IResultCore';
import { RESULT_TYPE, TResultType }                      from '../metadata/properties/type/TResultType';
import {
  checkInstanceOf, ClassList, EClassList, TInstanceOf,
} from '../lib/instanceOf';
import { ActionCore }      from './ActionCore';
import { RefCore }         from './RefCore';
import { RequirementCore } from './RequirementCore';
import { classCreate }     from '../constructable/Factory';
import { TCollectable }    from '../metadata/types/TCollectable';

export class ResultCore extends RefCore implements IResultCore {
  public get instanceOfCheck(): TInstanceOf {
    return ClassList.result;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static override [Symbol.hasInstance](obj: any) {
    return checkInstanceOf({ names: [ClassList.result], obj });
  }

  // public static isResult(data: any): data is ResultCore {
  //   return 'title' in data;
  // }

  // public isRef(data: any): data is RefCore {
  //   return ResultCore.isRef(this);
  // }

  public static override create(data: Partial<ResultCore>) {
    if (data instanceof ResultCore) {
      return data;
    }
    return new ResultCore(data);
  }

  public static override createOptional(data?: Partial<ResultCore>) {
    if (!data || !super.createOptional(data)) {
      return undefined;
    }
    return ResultCore.create(data);
  }

  #action: ActionCore | undefined;

  #category: string;

  #label: string;

  #match: RequirementCore | undefined;

  #order: number;

  #reason: string;

  #requirements: RequirementCore[];

  #secondaryAction: ActionCore | undefined;

  #type: TResultType;

  constructor(data: Partial<ResultCore>) {
    super(data);
    const type: TResultType = (!data.type || `${data.type}` === `${RESULT_TYPE.DEFAULT}`)
      ? RESULT_TYPE.MATCH : data.type;
    this.#type              = type;
    this.#action            = classCreate(EClassList.ACTION, data.action, true);
    this.#match             = classCreate(EClassList.REQUIREMENT, data.match, true);
    this.#requirements      = data.requirements?.map((itm) => classCreate(EClassList.REQUIREMENT, itm)) || [];
    this.#secondaryAction   = classCreate(EClassList.ACTION, data.secondaryAction, true);
    this.#reason            = data.reason || '';
    this.#label             = data.label || '';
    this.#category          = data.category || '';
    this.#order             = data.order || 0;
  }

  public get action(): ActionCore | undefined {
    return this.#action;
  }

  public get category() {
    return this.#category;
  }

  public get label(): string {
    return this.#label;
  }

  public get match() {
    return this.#match;
  }

  public set match(val: RequirementCore | undefined) {
    this.#match = val;
  }

  public get reason(): string {
    return this.#reason;
  }

  public set reason(val: string) {
    this.#reason = val;
  }

  public get requirements(): RequirementCore[] {
    return this.#requirements;
  }

  public set requirements(val: RequirementCore[]) {
    this.#requirements = val;
  }

  public get secondaryAction() {
    return this.#secondaryAction;
  }

  public get order() {
    return this.#order;
  }

  public get type(): TResultType {
    return this.#type;
  }

  public existsIn(data: TCollectable): boolean {
    return existsInPool(data, this);
  }

  public add(data: TCollectable): ResultCore {
    addToPool(data, this);
    return this;
  }
}