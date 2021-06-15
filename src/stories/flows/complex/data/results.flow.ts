/*
  eslint-disable max-len,
                sonarjs/no-duplicate-string,
 */
import { IResult }         from '../../../../survey/IResult';
import { isFraCalculator } from './calculator.flow';

const name = 'Benefit name';

/**
 * All possible results with their requirements
 */
export const results: IResult[] = [
  {
    id:           'RS.00201.001',
    label:        name,
    name:         'Retirement',
    requirements: [
      {
        explanation:
          "You've worked for 10 years or more and meet our age requirements.",
        minAge: {
          months: 8,
          years:  61,
        },
        responses: [
          { answers: [{ id: '0' }], question: { id: 'E' } },
        ],
      },
    ],
  },
  {
    id:    'DI.10105.060',
    label: name,
    name:
      'Disability, also referred to as benefits Disability Insurance (SSDI)',
    requirements: [
      {
        ageCalc:     (birthday) => !isFraCalculator(birthday, 12),
        explanation:
          'You expect a condition, illness, or injury to affect your ability to work for a year or more.',
        minAge: {
          months: 0,
          years:  18,
        },
        responses: [
          { answers: [{ id: '0' }], question: { id: 'G' } },
        ],
      },
    ],
  },
  {
    id:           'SI.00501.001',
    label:        name,
    name:         'Supplemental Security Income (SSI)',
    requirements: [
      {
        explanation:
          "You're 65 or older and said you have difficulty paying for food and a home.",
        minAge: {
          months: 0,
          years:  65,
        },
        responses: [
          { answers: [{ id: '1' }, { id: '2' }], question: { id: 'V' } },
        ],
      },
      {
        explanation:
          'You said you have difficulty paying for food and a home. And, a disability affects your ability to work.',
        minAge: {
          months: 0,
          years:  18,
        },
        responses: [
          { answers: [{ id: '0' }], question: { id: 'G' } },
          { answers: [{ id: '1' }, { id: '2' }], question: { id: 'V' } },
        ],
      },
      {
        explanation:
          "You expect a condition or illness to significantly affect the child's daily activities for a year or more. And, their parent(s) have difficulty paying for food and a home.",
        responses: [
          { answers: [{ id: '1' }], question: { id: 'A' } },
          { answers: [{ id: '1' }], question: { id: 'X' } },
        ],
      },
    ],
  },
  {
    id:           'HI.00801.006 / .191 / .146, HI.00805.005',
    label:        name,
    name:         'Medicare',
    requirements: [
      {
        explanation: 'You are between 64 years and 65 years and 3 months old.',
        maxAge:      {
          months: 3,
          years:  65,
        },
        minAge: {
          months: 0,
          years:  64,
        },
        responses: [],
      },
    ],
  },
  {
    id:           'RS.00202.001',
    label:        name,
    name:         'Spouse',
    requirements: [
      {
        explanation:
          "You're 62 or older and your spouse gets benefits checks every month.",
        minAge: {
          months: 0,
          years:  62,
        },
        responses: [
          {
            answers: [
              // Married
              { id: '0' },
              // Married but separated
              { id: '1' }],
            question: { id: 'I' },
          },
          // Spouse has benefits
          { answers: [{ id: '0' }], question: { id: 'J' } },
        ],
      },
    ],
  },
  {
    id:           'RS.01310.001, RS. 00208.005',
    label:        name,
    name:         'Spouse with Child in Care',
    requirements: [
      {
        ageCalc:     (birthday) => !isFraCalculator(birthday),
        explanation:
          'Your spouse gets benefits checks every month and you take care of kids under the age of 16.',
        minAge: {
          months: 0,
          years:  18,
        },
        responses: [
          // Married
          { answers: [{ id: '0' }], question: { id: 'I' } },
          // Spouse has benefits
          { answers: [{ id: '0' }], question: { id: 'J' } },
          // Has children < 16
          { answers: [{ id: '0' }], question: { id: 'Q' } },
          {
            answers: [
              // Children are not disabled
              { id: '0' },
              // Children are disabled
              { id: '1' },
            ],
            question: { id: 'R' },
          },
        ],
      },
      {
        ageCalc:     (birthday) => !isFraCalculator(birthday),
        explanation:
          'Your spouse gets benefits checks every month and you take care of disabled kids over the age of 16.',
        minAge: {
          months: 0,
          years:  18,
        },
        responses: [
          // Married
          { answers: [{ id: '0' }], question: { id: 'I' } },
          // Spouse has benefits
          { answers: [{ id: '0' }], question: { id: 'J' } },
          // Has children >= 16
          { answers: [{ id: '1' }], question: { id: 'Q' } },
          // Children are disabled
          { answers: [{ id: '1' }], question: { id: 'R' } },
        ],
      },
      {
        ageCalc:     (birthday) => !isFraCalculator(birthday),
        explanation:
          'You were married for 10 years or more in the past and your former spouse worked. And, you take care of kids under the age of 16.',
        minAge: {
          months: 0,
          years:  62,
        },
        responses: [
          // Not married, but was in the past
          { answers: [{ id: '2' }], question: { id: 'I' } },
          {
            answers: [
              // Divorced after >= 10 years and ex-spouse has benefits
              { id: '0' },
              // Divorced after >= 10 years and ex-spouse might have benefits
              { id: '2' },
            ],
            question: { id: 'N' },
          },
          // Has children < 16
          { answers: [{ id: '0' }], question: { id: 'Q' } },
          {
            answers: [
              // Children are disabled
              { id: '0' },
              // Children are not disabled
              { id: '1' },
            ],
            question: { id: 'R' },
          },
        ],
      },
      {
        ageCalc:     (birthday) => !isFraCalculator(birthday),
        explanation:
          'You were married for 10 years or more in the past and your former spouse worked. And, you take care of disabled kids over the age of 16.',
        minAge: {
          months: 0,
          years:  62,
        },
        responses: [
          // Not married, but was in past
          { answers: [{ id: '2' }], question: { id: 'I' } },
          {
            answers: [
              // Divorced after >= 10 years and ex-spouse has benefits
              { id: '0' },
              // Divorced after >= 10 years and ex-spouse might have benefits
              { id: '2' },
            ],
            question: { id: 'N' },
          },
          // Has children >= 16
          { answers: [{ id: '1' }], question: { id: 'Q' } },
          // Children are disabled
          { answers: [{ id: '1' }], question: { id: 'Q' } },
        ],
      },
    ],
  },
  {
    id:           'RS.00202.005',
    label:        name,
    name:         'Divorced Spouse',
    requirements: [
      {
        explanation:
          "You're 62 or older, were married for 10 years or more in the past, and your former spouse worked.",
        minAge: {
          months: 0,
          years:  62,
        },
        responses: [
          // Not married, but was in the past
          { answers: [{ id: '2' }], question: { id: 'I' } },
          {
            answers: [
              // Divorced after >= 10 years and ex-spouse has benefits
              { id: '0' },
              // Divorced after >= 10 years and ex-spouse might have benefits
              { id: '2' },
            ],
            question: { id: 'N' },
          },
          // Has children < 16
          { answers: [{ id: '0' }], question: { id: 'Q' } },
          {
            answers: [
              // Children are disabled
              { id: '0' },
              // Children are not disabled
              { id: '1' },
            ],
            question: { id: 'R' },
          },
        ],
      },
    ],
  },
  {
    id:           'RS.00207.001',
    label:        name,
    name:         'Widowers',
    requirements: [
      {
        explanation:
          "You're 60 or older and lost your spouse.  And, your spouse worked before they passed away.",
        minAge: {
          months: 0,
          years:  60,
        },
        responses: [
          // Not married, but was in past
          { answers: [{ id: '2' }], question: { id: 'I' } },
          // Spouse is deceased
          { answers: [{ id: '0' }], question: { id: 'O' } },
          // Spouse worked
          { answers: [{ id: '0' }], question: { id: 'P' } },
        ],
      },
    ],
  },
  {
    id:           'RS.00207.001',
    label:        name,
    name:         'Disabled Widowers',
    requirements: [
      {
        explanation:
          "You're between the ages of 50 and 60 and lost your spouse. And, you expect a condition, illness, or injury to affect your ability to work for a year or more.",
        maxAge: {
          months: 11,
          years:  59,
        },
        minAge: {
          months: 0,
          years:  50,
        },
        responses: [
          // Disabled
          { answers: [{ id: '0' }], question: { id: 'G' } },
          // Not married, but was in past
          { answers: [{ id: '2' }], question: { id: 'I' } },
          // Spouse is deceased
          { answers: [{ id: '0' }], question: { id: 'O' } },
          // Spouse worked
          { answers: [{ id: '0' }], question: { id: 'P' } },
        ],
      },
    ],
  },
  {
    id:           'RS.00210.001',
    label:        name,
    name:         'Lump Sum Death Payment, a one-time payment',
    requirements: [
      {
        explanation: 'The child lost a parent.',
        responses:   [
          // Is under 18
          { answers: [{ id: '1' }], question: { id: 'A' } },
          // Child has experienced loss of parent
          { answers: [{ id: '0' }], question: { id: 'Y' } },
        ],
      },
      {
        explanation: 'You lost your spouse.',
        minAge:      {
          months: 0,
          years:  18,
        },
        responses: [
          // Spouse is deceased
          { answers: [{ id: '0' }], question: { id: 'O' } },
          // Spouse worked
          { answers: [{ id: '0' }], question: { id: 'P' } },
        ],
      },
      {
        explanation: 'You lost a parent.',
        minAge:      {
          months: 0,
          years:  18,
        },
        responses: [
          // Has lost a parent
          { answers: [{ id: '0' }], question: { id: 'S' } },
        ],
      },
    ],
  },
  {
    id:           'RS.00203.001',
    label:        name,
    name:         "Child's Auxiliary",
    requirements: [
      {
        explanation:
          "The child's parent(s) may get benefits checks every month.",
        responses: [
          // Is under 18
          { answers: [{ id: '1' }], question: { id: 'A' } },
          {
            answers: [
              // Parents receive SS
              { id: '0' },
              // Parents might receive SS
              { id: '2' },
            ],
            question: { id: 'AA' },
          },
        ],
      },
      {
        explanation:
          'You go to high school full time and your parent(s) may get benefits checks every month.',
        maxAge: {
          months: 1,
          years:  19,
        },
        minAge: {
          months: 0,
          years:  18,
        },
        responses: [
          // Is in high school
          { answers: [{ id: '1' }], question: { id: 'C' } },
          {
            answers: [
              // Parents receive SS
              { id: '0' },
              // Parents might receive SS
              { id: '2' },
            ],
            question: { id: 'U' },
          },
        ],
      },
      {
        explanation:
          'You expect a condition, illness, or injury to affect your ability to work for a year or more. And it started to affect you before your 22nd birthday. Your parent(s) may get benefits checks every month.',
        minAge: {
          months: 0,
          years:  18,
        },
        responses: [
          // Disabled
          { answers: [{ id: '0' }], question: { id: 'G' } },
          // Disabled before 22
          { answers: [{ id: '0' }], question: { id: 'H' } },
          {
            answers: [
              // Parents receive SS
              { id: '0' },
              // Parents might receive SS
              { id: '2' },
            ],
            question: { id: 'U' },
          },
        ],
      },
    ],
  },
  {
    id:           'RS.00203.001',
    label:        name,
    name:         "Child's Survivor",
    requirements: [
      {
        explanation: 'The child lost a parent.',
        maxAge:      {
          months: 1,
          years:  19,
        },
        minAge: {
          months: 0,
          years:  18,
        },
        responses: [
          // In high school
          { answers: [{ id: '1' }], question: { id: 'C' } },
          // Has lost a parent
          { answers: [{ id: '0' }], question: { id: 'S' } },
        ],
      },
      {
        explanation: 'The child lost a parent.',
        responses:   [
          // Child under 18
          { answers: [{ id: '1' }], question: { id: 'A' } },
          // Has lost a parent
          { answers: [{ id: '0' }], question: { id: 'Y' } },
        ],
      },
      {
        explanation:
          'You expect a condition, illness, or injury to affect your ability to work for a year or more. And it started to affect you before your 22nd birthday. You also lost a parent.',
        minAge: {
          months: 0,
          years:  18,
        },
        responses: [
          // Disabled
          { answers: [{ id: '0' }], question: { id: 'G' } },
          // Disabled before 22
          { answers: [{ id: '0' }], question: { id: 'H' } },
          // Has lost a parent
          { answers: [{ id: '0' }], question: { id: 'S' } },
        ],
      },
    ],
  },
  {
    id:           'DI.10115.001',
    label:        name,
    name:         'Childhood Disability',
    requirements: [
      {
        explanation:
          "A condition or illness is expected to significantly affect the child's daily activities for a year or more.",
        responses: [
          // Under 18
          { answers: [{ id: '1' }], question: { id: 'A' } },
          // Child is disabled
          { answers: [{ id: '0' }], question: { id: 'X' } },
        ],
      },
    ],
  },
  {
    id:           'RS.00205.001',
    label:        name,
    name:         'Student Auxiliary',
    requirements: [
      {
        explanation:
          'You go to high school full time and your parent(s) may get benefits checks every month.',
        maxAge: {
          months: 1,
          years:  19,
        },
        minAge: {
          months: 0,
          years:  18,
        },
        responses: [
          // In high school
          { answers: [{ id: '1' }], question: { id: 'C' } },
          {
            answers: [
              // Parents receive SS
              { id: '0' },
              // Parents might receive SS
              { id: '2' },
            ],
            question: { id: 'U' },
          },
        ],
      },
    ],
  },
  {
    id:           'RS.00205.001',
    label:        name,
    name:         'Student Survivor',
    requirements: [
      {
        explanation: 'You go to high school full time and lost a parent.',
        maxAge:      {
          months: 1,
          years:  19,
        },
        minAge: {
          months: 0,
          years:  18,
        },
        responses: [
          // In high school
          { answers: [{ id: '1' }], question: { id: 'C' } },
          // Has lost a parent
          { answers: [{ id: '0' }], question: { id: 'S' } },
        ],
      },
    ],
  },
  {
    id:           'RS.00208.001',
    label:        name,
    name:         "Mothers and Father's",
    requirements: [
      {
        explanation:
          'You lost your spouse and they worked before they passed away. And, you take care of disabled kids over the age of 16.',
        minAge: {
          months: 0,
          years:  18,
        },
        responses: [
          // Deceased spouse worked
          { answers: [{ id: '0' }], question: { id: 'P' } },
          // Has children < 16
          { answers: [{ id: '0' }], question: { id: 'Q' } },
        ],
      },
    ],
  },
];