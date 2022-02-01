import { DateInput, DateInputGroup }                      from '@trussworks/react-uswds';
import { capitalize }                                     from 'lodash';
import {
  ChangeEvent, Dispatch, KeyboardEvent, SetStateAction,
} from 'react';
import { QuestionableConfig }                from '../../../composable';
import { getAge }                            from '../../../lib/date';
import { ACTION_TYPE, CSS_CLASS, DATE_UNIT } from '../../../lib/enums';
import { TDateOfBirth }                      from '../../../lib/types';
import { setAge }                            from '../../../state/persists';
import { IQuestionData }                     from '../../../survey/IQuestionData';
import { Questions }                         from '../../lib/Questions';
import { Steps }                             from '../../lib/Steps';

type TInfoBox = 'error' | 'warning' | 'info';

export interface IInfoBox {
  message: string;
  type: TInfoBox;
}

export type TDoBUtilParams = {
  cookieName: string;
  error: IInfoBox;
  setCookieName: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<IInfoBox>>;
  setState: Dispatch<SetStateAction<TDateOfBirth>>;
  state: TDateOfBirth;
};

export const isValid = (
  unit: DATE_UNIT,
  val: number | string,
  // eslint-disable-next-line sonarjs/cognitive-complexity
): boolean => {
  const valStr = `${val}`;

  if (valStr.length === 0) {
    return false;
  }

  const comparator  = +valStr;
  const currentYear = new Date().getFullYear();

  switch (unit) {
    case DATE_UNIT.DAY:
      if (valStr.length <= 1 && comparator === 0) {
        return true;
      }
      if (comparator < 1 || comparator > 31) {
        return false;
      }
      break;
    case DATE_UNIT.MONTH:
      if (valStr.length <= 1 && comparator === 0) {
        return true;
      }
      if (comparator < 1 || comparator > 12) {
        return false;
      }
      break;
    case DATE_UNIT.YEAR:
      if (valStr.length === 1 && comparator !== 1 && comparator !== 2) {
        return false;
      }
      if (
        valStr.length === 2
        && !valStr.startsWith('19')
        && !valStr.startsWith('20')
      ) {
        return false;
      }
      if (
        valStr.length === 4
        && (comparator < 1900 || comparator > currentYear)
      ) {
        return false;
      }
      break;
    default:
      return false;
  }
  return true;
};

export const onDoBKeyPress = (
  e: KeyboardEvent<HTMLInputElement>,
  unit: DATE_UNIT,
): void => {
  if (e.defaultPrevented) {
    return; // Should do nothing if the default action has been cancelled
  }
  const isNumber = /[0-9]/;
  if (!isNumber.test(e.key)) {
    e.preventDefault();
    return;
  }
  const val = +`${e.currentTarget.value}${e.key}`;
  if (!isValid(unit, val)) {
    e.preventDefault();
  }
};

export const onDateOfBirthChange = (
  e: ChangeEvent<HTMLInputElement>,
  unit: DATE_UNIT,
  props: IQuestionData,
  config: QuestionableConfig,
  utilParams: TDoBUtilParams,
  // eslint-disable-next-line sonarjs/cognitive-complexity
): void => {
  const {
    state, setState, setError, cookieName,
  } = utilParams;

  const val    = +e.target.value;
  const valStr = `${val}`;
  switch (unit) {
    case DATE_UNIT.DAY:
    case DATE_UNIT.MONTH:
      state[unit] = valStr.padStart(2, '0');
      break;
    case DATE_UNIT.YEAR:
      state[unit] = valStr;
      break;
    default:
      break;
  }
  setState({
    ...state,
  });
  const bd     = Questions.toBirthdate(state);
  const age    = getAge(bd);
  const errStr = `${state.month || '__'}/${state.day || '__'}/${
    state.year || '____'
  }`;
  // eslint-disable-next-line max-len
  const generalError =    'Follow the "MM DD YYYY" format to enter your birthday. For example, September 9, 1960 is 09 09 1960.';
  if (age && bd) {
    setError({ message: '', type: 'info' });
    setAge(cookieName, age.years);
    props.dispatchForm({
      type:  ACTION_TYPE.UPDATE,
      value: {
        age,
        birthdate: bd,
      },
    });
    Questions.updateForm(bd, props, config);
    if (props.step.exitRequirements && age.years > 0) {
      const invalid = props.step.exitRequirements.every(
        (r) => r.minAge && age.years < r.minAge.years,
      );
      if (invalid) {
        const min = props.step.exitRequirements
          .map((r) => r.minAge?.years)
          .join(', ');
        props.dispatchForm({
          type:  ACTION_TYPE.UPDATE,
          value: {
            age:       { years: 0 },
            birthdate: '',
          },
        });
        setError({
          // eslint-disable-next-line max-len
          message: `Looks like that's a birth date under age ${min}. Enter a birthday for someone who is over ${min} years old or tap "Go Back".`,

          type: 'error',
        });
      }
    }
  } else if (props.form?.age?.years && props.form.age.years > 0) {
    if (!isValid(DATE_UNIT.MONTH, state[DATE_UNIT.MONTH] || '')) {
      setError({
        message: `1 "${errStr}" is not a valid date. ${generalError}`,
        type:    'error',
      });
    }
  } else {
    setError({
      message: `2 "${errStr}" is not a valid date. ${generalError}`,
      type:    'info',
    });
  }
};

export const getDateInput = (
  unit: DATE_UNIT,
  label: string,
  props: IQuestionData,
  config: QuestionableConfig,
  utilParams: TDoBUtilParams,
): JSX.Element => {
  const { state }  = utilParams;
  let disabled     = true;
  const isDisabled = (u: DATE_UNIT, i?: string): boolean => {
    if (!i) {
      return true;
    }
    return !isValid(u, i);
  };
  let reqs         = {
    length: 2,
    max:    12,
    min:    1,
  };
  console.log({ ...state, log: 'state' });
  switch (unit) {
    case DATE_UNIT.DAY:
      disabled = isDisabled(DATE_UNIT.MONTH, state[DATE_UNIT.MONTH]);
      break;
    case DATE_UNIT.MONTH:
      disabled = false;
      break;
    case DATE_UNIT.YEAR:
      disabled =        isDisabled(DATE_UNIT.DAY, state[DATE_UNIT.DAY])
        || isDisabled(DATE_UNIT.MONTH, state[DATE_UNIT.MONTH]);
      reqs     = {
        length: 4,
        max:    new Date().getFullYear(),
        min:    1900,
      };
      break;
    default:
      break;
  }

  return (
    <DateInput
      id={Steps.getDomId(unit, props)}
      name={label}
      label={capitalize(unit)}
      aria-label={capitalize(unit)}
      unit={unit}
      disabled={disabled}
      maxLength={reqs.length}
      minLength={reqs.length}
      defaultValue={state[unit]}
      onChange={(e) => onDateOfBirthChange(e, unit, props, config, utilParams)}
      onKeyPress={(e) => onDoBKeyPress(e, unit)}
    />
  );
};

export const getAlertClass = (info: IInfoBox): string => {
  const type    = info.type === 'error' ? CSS_CLASS.DOB_ERROR : CSS_CLASS.DOB_INFO;
  const visible =    info.message.length > 0 ? CSS_CLASS.VISIBLE : CSS_CLASS.HIDDEN;
  return `${visible} ${type}`;
};

export const getInfoBox = (utilParams: TDoBUtilParams): JSX.Element => {
  const info = utilParams.error;
  return (
    <div className={getAlertClass(info)}>
      <div className={`usa-alert usa-alert--${info.type} usa-alert--slim`}>
        <div className="usa-alert__body">
          <p className="usa-alert__text">{info.message}</p>
        </div>
      </div>
    </div>
  );
};

export const getDateInputGroup = (
  label: string,
  props: IQuestionData,
  config: QuestionableConfig,
  utilParams: TDoBUtilParams,
): JSX.Element => (
  <div>
    <DateInputGroup role="group" aria-label={props.step.title}>
      {getDateInput(DATE_UNIT.MONTH, label, props, config, utilParams)}
      {getDateInput(DATE_UNIT.DAY, label, props, config, utilParams)}
      {getDateInput(DATE_UNIT.YEAR, label, props, config, utilParams)}
    </DateInputGroup>
    {getInfoBox(utilParams)}
  </div>
);
