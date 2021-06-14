/*
 * Defines an age relative to a date
 * @title Age Type
 */
export type TAge = {
  /**
   * @minimum 0
   * @maximum 31
   * @nullable
   * @title Days
   */
  days?: number;
  /**
   * @minimum 0
   * @maximum 31
   * @nullable
   * @title Months
   */
  months: number;
  /**
   * @minimum 0
   * @maximum 100
   * @nullable
   * @title Years
   */
  years: number;
};

/**
 * Lambda that can be called to compute an age requirement
 * @hidden
 */
export type TAgeCalc = (birthdate: string) => boolean;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TReducer = (...params: any) => void;

export type TDateOfBirth = {
  day?: string | undefined;
  month?: string | undefined;
  year?: string | undefined;
};

export type TProgressBarType = 'step-indicator' | 'progress-bar';

export type TVerticalPosition = 'top' | 'bottom';

export type THorizontalPosition = 'left' | 'right';

export type TButtonMode = 'link' | 'button';
