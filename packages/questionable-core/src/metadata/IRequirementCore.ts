import { TAgeCalcCore }     from '../lib/types';
import { TAgeCore }         from './types/TAgeCore';
import { IRefCore }         from './IRefCore';
import { IResponseCore }    from './IResponseCore';
import { TRequirementType } from './properties/type/TRequirementType';

/**
 * Defines an individual requirement for accessing a step
 */
export interface IRequirementCore extends IRefCore {
  /**
   * Optional, custom calculator for performing age-specific validation
   * @hidden JSON schema does not support functions
   */
  ageCalc?: TAgeCalcCore;
  /**
   * User facing description of this requirement
   *
   * @title Exlanation
   */
  explanation: string;
  /**
   * Optional maximum age allowed for this requirement
   *
   * @title Maximum Age
   */
  maxAge?: TAgeCore;
  /**
   * Optional minimum age allowed for this requirement
   *
   * @title Minimum Age
   */
  minAge?: TAgeCore;
  /**
   * Map of step id to required answer values
   *
   * @title Answers
   */
  responses: IResponseCore[];

  type?: TRequirementType;
}