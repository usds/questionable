import { merge }                            from 'lodash';
import { isEnum, PAGE_TYPE, QUESTION_TYPE } from '@usds.gov/questionable-core';
import { IPageData, IQuestionData }         from '../survey/IStepData';
import { survey }                           from './survey';

const schemaPart = {
  properties: {
    step: {
      $ref:  '#/definitions/IStep',
      title: 'Step',
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schemaFull: any = {
  type: 'object',
  ...schemaPart,
  // eslint-disable-next-line dot-notation
  ...survey,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStepSchema = (props: IQuestionData | IPageData): any => {
  const schemaProps = { ...schemaPart };
  if (isEnum(PAGE_TYPE, props.step.type)) {
    schemaProps.properties.step.$ref = '#/definitions/IPage';
  } else if (isEnum(QUESTION_TYPE, props.step.type)) {
    schemaProps.properties.step.$ref = '#/definitions/IQuestionCore';
  }
  return merge(schemaProps, schemaFull);
};
