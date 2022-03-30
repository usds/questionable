import { IStepCore } from '@usds.gov/questionable-core';

export type TVal = { answer: any, name: string, short?: string, value?: string };
export type TChoice = { answer: string, key: string, name: string }
export type TChoices = string[] | TChoice[] | number[];
export type TAnswerType = {
  choices?: TChoices | TChoicesFn;
  clearable?: boolean,
  default?: string,
  depthLimit?: 1 | 2 | 3 | 4 | 5 | 6,
  excludeFilter?: TBoolFn,
  excludePath?: TBoolFn,
  filter?: TNumberFn,
  format?: Intl.DateTimeFormat,
  itemType?: 'any' | 'directory' | 'file',
  locale?: 'en-us',
  message?: string,
  name?: string,
  rootPath?: string,
  suggestOnly?: boolean,
  transformer?: TStringFn,
  type: 'number' | 'input' | 'password' | 'list' | 'expand' |
    'checkbox' | 'confirm' | 'editor' | 'rawlist' | 'fuzzypath' | 'date',
  validate?: TBoolFn,
  values?: string[] | TChoice[]
};
export type TOnAnswer = (answer: TVal, step: IStepCore, ...params: unknown[]) => void;
export type TOnDisplay = (step: IStepCore, ...params: unknown[]) => void;
export type TValidateFn = (answer: TVal, step: IStepCore, ...params: unknown[]) => boolean;
export type TStringFn = (...params: unknown[]) => string;
export type TBoolFn = (...params: unknown[]) => boolean;
export type TNumberFn = (...params: unknown[]) => number;
export type TChoicesFn = (...params: unknown[]) => TChoices;
