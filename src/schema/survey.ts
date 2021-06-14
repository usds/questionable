// This files is code generated. Do not edit.
/* eslint-disable */
export const survey = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  definitions: {
    ACTION: {
      enum: ['call', 'hybrid', 'online'],
      type: 'string',
    },
    DESIGN_TYPE: {
      const: 'Edit',
      description: 'Defines the known component types for design',
      type: 'string',
    },
    IAction: {
      description:
        'Represents something the customer can do in response to receiving a result',
      properties: {
        action: {
          title: 'Action',
          type: 'string',
        },
        description: {
          title: 'Description',
          type: 'string',
        },
        name: {
          type: 'string',
        },
        title: {
          title: 'Title',
          type: 'string',
        },
        type: {
          $ref: '#/definitions/ACTION',
          title: 'Type',
        },
      },
      required: ['action', 'description', 'name', 'title', 'type'],
      type: 'object',
    },
    IButtonConfig: {
      description: 'Configuration for buttons',
      properties: {
        defaultLabel: {
          description: 'Default text to display if none is defined',
          type: 'string',
        },
        horizontalPos: {
          $ref: '#/definitions/THorizontalPosition',
          description: 'Horizontal orientation (left or right)',
          title: 'Horizontal Position',
        },
        mode: {
          $ref: '#/definitions/TButtonMode',
          description: 'Render mode (link or button)',
          title: 'Mode',
        },
        verticalPos: {
          $ref: '#/definitions/TVerticalPosition',
          description: 'Vertical orientation (top or bottom)',
          title: 'Vertical Position',
        },
      },
      required: ['defaultLabel', 'horizontalPos', 'mode', 'verticalPos'],
      type: 'object',
    },
    IDesignData: {
      description: 'Data defintion for design step',
      properties: {
        form: {
          $ref: '#/definitions/IForm',
          description: "The user's current form state",
          title: 'Form',
        },
        step: {
          $ref: '#/definitions/IStep',
          description: 'Current step',
        },
      },
      required: ['form', 'step'],
      type: 'object',
    },
    IForm: {
      description: 'Represents the survey as completed by the user',
      properties: {
        age: {
          $ref: '#/definitions/TAge',
          description: "Customer's age in years/months/days",
          title: 'Age',
        },
        birthdate: {
          description: "Customer's entered birthdate",
          title: 'Birthdate',
          type: 'string',
        },
        finished: {
          description: 'Time the survey was completed',
          format: 'date-time',
          title: 'Finished',
          type: 'string',
        },
        responses: {
          description: 'All currently provided responses',
          items: {
            $ref: '#/definitions/IQuestion',
          },
          title: 'Responses',
          type: 'array',
        },
        started: {
          description: 'Time the survey was started',
          format: 'date-time',
          title: 'Started',
          type: 'string',
        },
      },
      required: ['responses', 'started'],
      type: 'object',
    },
    INavButton: {
      description: 'Represents a navigation button',
      properties: {
        label: {
          description: "Text to display on button (e.g. 'Prev' or 'Next')",
          type: 'string',
        },
      },
      required: ['label'],
      type: 'object',
    },
    INavigationConfig: {
      description: 'Configuration for navigation',
      properties: {
        next: {
          description: 'Next/Forward button',
          properties: {
            defaultLabel: {
              description: 'Default text to display if none is defined',
              type: 'string',
            },
            horizontalPos: {
              $ref: '#/definitions/THorizontalPosition',
              description: 'Horizontal orientation (left or right)',
              title: 'Horizontal Position',
            },
            mode: {
              $ref: '#/definitions/TButtonMode',
              description: 'Render mode (link or button)',
              title: 'Mode',
            },
            verticalPos: {
              $ref: '#/definitions/TVerticalPosition',
              description: 'Vertical orientation (top or bottom)',
              title: 'Vertical Position',
            },
          },
          type: 'object',
        },
        prev: {
          description: 'Previous/Go back button',
          properties: {
            defaultLabel: {
              description: 'Default text to display if none is defined',
              type: 'string',
            },
            horizontalPos: {
              $ref: '#/definitions/THorizontalPosition',
              description: 'Horizontal orientation (left or right)',
              title: 'Horizontal Position',
            },
            mode: {
              $ref: '#/definitions/TButtonMode',
              description: 'Render mode (link or button)',
              title: 'Mode',
            },
            verticalPos: {
              $ref: '#/definitions/TVerticalPosition',
              description: 'Vertical orientation (top or bottom)',
              title: 'Vertical Position',
            },
          },
          type: 'object',
        },
      },
      required: ['next', 'prev'],
      type: 'object',
    },
    IPage: {
      description: 'Defines step content for Page types',
      properties: {
        body: {
          description: 'Defines the body content of the page',
          title: 'Body',
          type: 'string',
        },
        bodyHeader: {
          description: 'Optional header to display above body',
          title: 'Body Heading',
          type: 'string',
        },
        bodySubHeader: {
          description: 'Optional sub header to display below Body Heading',
          title: 'Body Subheading',
          type: 'string',
        },
        buttons: {
          description: 'Collection of navigation buttons',
          properties: {
            next: {
              $ref: '#/definitions/INavButton',
              description: 'Next button',
              title: 'Next Button',
            },
            prev: {
              $ref: '#/definitions/INavButton',
              description: 'Previous / Back button',
              title: 'Prev Button',
            },
          },
          title: 'Buttons',
          type: 'object',
        },
        footer: {
          description:
            'Optional footer text to display at the bottom of the step',
          title: 'Footer',
          type: 'string',
        },
        info: {
          description:
            'Contextual content to display below the step contents and above the footer',
          title: 'Info',
          type: 'string',
        },
        internalNotes: {
          description:
            'Private/internal use only notes for documenting this step',
          title: 'Internal Notes',
          type: 'string',
        },
        requirements: {
          description: 'Collection of requirements to view this step',
          items: {
            $ref: '#/definitions/IRequirement',
          },
          title: 'Requirements',
          type: 'array',
        },
        section: {
          description: 'Section to which this step belongs',
          properties: {
            name: {
              description: 'The display name of this section',
              title: 'Name',
              type: 'string',
            },
            requirements: {
              description:
                'Collection of requirements to enable display of this status',
              items: {
                $ref: '#/definitions/IRequirement',
              },
              title: 'Requirements',
              type: 'array',
            },
          },
          title: 'Section',
          type: 'object',
        },
        subTitle: {
          description: 'Text to display below the title',
          title: 'Subtitle',
          type: 'string',
        },
        title: {
          description: 'Display name of the step',
          title: 'Title',
          type: 'string',
        },
        type: {
          $ref: '#/definitions/PAGE_TYPE',
          description: 'Type of page',
          title: 'Page Type',
        },
      },
      required: ['section', 'title', 'type'],
      type: 'object',
    },
    IPageData: {
      description: 'Data defintion for page step',
      properties: {
        form: {
          $ref: '#/definitions/IForm',
          description: "The user's current form state",
          title: 'Form',
        },
        step: {
          $ref: '#/definitions/IPage',
          description: 'Current step',
        },
      },
      required: ['form', 'step'],
      type: 'object',
    },
    IPages: {
      description: 'Defines required pages for the survey flow',
      properties: {
        landingPage: {
          $ref: '#/definitions/IPage',
          description: 'First step of the survey',
          title: 'Landing Page',
        },
        noResultsPage: {
          $ref: '#/definitions/IPage',
          description: 'Last step of the survey if there are 0 results',
          title: 'No Results Page',
        },
        resultsPage: {
          $ref: '#/definitions/IPage',
          description: 'Last step of the survey if there are 1 or more results',
          title: 'Results Page',
        },
        summaryPage: {
          $ref: '#/definitions/IPage',
          description:
            'Preview of survery before submitting to receive results',
          title: 'Summary Page',
        },
      },
      required: ['landingPage', 'noResultsPage', 'resultsPage', 'summaryPage'],
      type: 'object',
    },
    IProgressBarConfig: {
      description: 'Configuration options for the progress bar',
      properties: {
        baseBgColor: {
          description: 'Color of the non-completed pb',
          title: 'Base Background Color',
          type: 'string',
        },
        bgColor: {
          description: 'Color of the completed pb',
          title: 'Background Color',
          type: 'string',
        },
        hide: {
          default: false,
          description: 'Toggles whether to show progress bar',
          title: 'Show Progress Bar',
          type: 'boolean',
        },
        position: {
          $ref: '#/definitions/TVerticalPosition',
          description: 'Vertical orientation of the progress bar',
          title: 'Position',
        },
        type: {
          $ref: '#/definitions/TProgressBarType',
          description:
            'Component type\n\nCan be one of two types: (1) The USWDS Step Indicator @see https://trussworks.github.io/react-uswds/?path=/docs/components-step-indicator (2) React progress bar @see https://katerinalupacheva.github.io/react-progress-bar/',
          title: 'Type',
        },
      },
      required: ['baseBgColor', 'bgColor', 'hide', 'position', 'type'],
      type: 'object',
    },
    IQuestion: {
      description: 'Defines step content for Question type',
      properties: {
        answers: {
          description: 'Collection of allowed answers',
          items: {
            $ref: '#/definitions/IQuestionAnswer',
          },
          title: 'Answers',
          type: 'array',
        },
        buttons: {
          description: 'Collection of navigation buttons',
          properties: {
            next: {
              $ref: '#/definitions/INavButton',
              description: 'Next button',
              title: 'Next Button',
            },
            prev: {
              $ref: '#/definitions/INavButton',
              description: 'Previous / Back button',
              title: 'Prev Button',
            },
          },
          title: 'Buttons',
          type: 'object',
        },
        footer: {
          description:
            'Optional footer text to display at the bottom of the step',
          title: 'Footer',
          type: 'string',
        },
        info: {
          description:
            'Contextual content to display below the step contents and above the footer',
          title: 'Info',
          type: 'string',
        },
        internalNotes: {
          description:
            'Private/internal use only notes for documenting this step',
          title: 'Internal Notes',
          type: 'string',
        },
        requirements: {
          description: 'Collection of requirements to view this step',
          items: {
            $ref: '#/definitions/IRequirement',
          },
          title: 'Requirements',
          type: 'array',
        },
        section: {
          description: 'Section to which this step belongs',
          properties: {
            name: {
              description: 'The display name of this section',
              title: 'Name',
              type: 'string',
            },
            requirements: {
              description:
                'Collection of requirements to enable display of this status',
              items: {
                $ref: '#/definitions/IRequirement',
              },
              title: 'Requirements',
              type: 'array',
            },
          },
          title: 'Section',
          type: 'object',
        },
        subTitle: {
          description: 'Text to display below the title',
          title: 'Subtitle',
          type: 'string',
        },
        title: {
          description: 'Display name of the step',
          title: 'Title',
          type: 'string',
        },
        type: {
          $ref: '#/definitions/QUESTION_TYPE',
          description: 'Type of question',
          title: 'Question Type',
        },
      },
      required: ['answers', 'section', 'title', 'type'],
      type: 'object',
    },
    IQuestionAnswer: {
      description: 'Definition for answers to questions',
      properties: {
        id: {
          type: 'string',
        },
        order: {
          type: 'number',
        },
        title: {
          type: 'string',
        },
      },
      required: ['id', 'title'],
      type: 'object',
    },
    IQuestionConfig: {
      description: 'Configuration for question display',
      properties: {
        showAnswerBorder: {
          default: true,
          description:
            'Determines whether to show border on radios and checkboxes',
          title: 'Show Answer Border',
          type: 'boolean',
        },
      },
      required: ['showAnswerBorder'],
      type: 'object',
    },
    IQuestionData: {
      description: 'Data defintion for question step',
      properties: {
        form: {
          $ref: '#/definitions/IForm',
          description: "The user's current form state",
          title: 'Form',
        },
        step: {
          $ref: '#/definitions/IQuestion',
          description: 'Current step',
        },
      },
      required: ['form', 'step'],
      type: 'object',
    },
    IQuestionableConfig: {
      description: 'Configuration for customized behavior of Questionable',
      properties: {
        mode: {
          $ref: '#/definitions/MODE',
          description: 'View or edit mode',
          title: 'Mode',
        },
        nav: {
          description: 'Navigation configuration',
          properties: {
            next: {
              description: 'Next/Forward button',
              properties: {
                defaultLabel: {
                  description: 'Default text to display if none is defined',
                  type: 'string',
                },
                horizontalPos: {
                  $ref: '#/definitions/THorizontalPosition',
                  description: 'Horizontal orientation (left or right)',
                  title: 'Horizontal Position',
                },
                mode: {
                  $ref: '#/definitions/TButtonMode',
                  description: 'Render mode (link or button)',
                  title: 'Mode',
                },
                verticalPos: {
                  $ref: '#/definitions/TVerticalPosition',
                  description: 'Vertical orientation (top or bottom)',
                  title: 'Vertical Position',
                },
              },
              type: 'object',
            },
            prev: {
              description: 'Previous/Go back button',
              properties: {
                defaultLabel: {
                  description: 'Default text to display if none is defined',
                  type: 'string',
                },
                horizontalPos: {
                  $ref: '#/definitions/THorizontalPosition',
                  description: 'Horizontal orientation (left or right)',
                  title: 'Horizontal Position',
                },
                mode: {
                  $ref: '#/definitions/TButtonMode',
                  description: 'Render mode (link or button)',
                  title: 'Mode',
                },
                verticalPos: {
                  $ref: '#/definitions/TVerticalPosition',
                  description: 'Vertical orientation (top or bottom)',
                  title: 'Vertical Position',
                },
              },
              type: 'object',
            },
          },
          title: 'Navigation',
          type: 'object',
        },
        progressBar: {
          description: 'Progress Bar configuration',
          properties: {
            baseBgColor: {
              description: 'Color of the non-completed pb',
              title: 'Base Background Color',
              type: 'string',
            },
            bgColor: {
              description: 'Color of the completed pb',
              title: 'Background Color',
              type: 'string',
            },
            hide: {
              default: false,
              description: 'Toggles whether to show progress bar',
              title: 'Show Progress Bar',
              type: 'boolean',
            },
            position: {
              $ref: '#/definitions/TVerticalPosition',
              description: 'Vertical orientation of the progress bar',
              title: 'Position',
            },
            type: {
              $ref: '#/definitions/TProgressBarType',
              description:
                'Component type\n\nCan be one of two types: (1) The USWDS Step Indicator @see https://trussworks.github.io/react-uswds/?path=/docs/components-step-indicator (2) React progress bar @see https://katerinalupacheva.github.io/react-progress-bar/',
              title: 'Type',
            },
          },
          title: 'Progress Bar',
          type: 'object',
        },
        questions: {
          description: 'Question configuration',
          properties: {
            showAnswerBorder: {
              default: true,
              description:
                'Determines whether to show border on radios and checkboxes',
              title: 'Show Answer Border',
              type: 'boolean',
            },
          },
          title: 'Question Configuration',
          type: 'object',
        },
        steps: {
          description: 'Step configuration',
          properties: {
            borderClass: {
              description: 'Class determines whether cards have borders',
              enum: ['border-ink', 'border-0'],
              title: 'Border Class',
              type: 'string',
            },
            showStepId: {
              default: false,
              description:
                "Toggles whether steps' ids are shown next to the question text",
              title: 'Show Step Id',
              type: 'boolean',
            },
            titleClass: {
              description:
                'Class to apply to title. Use to add background to question text',
              enum: ['bg-base-lightest', ''],
              title: 'Title Class',
              type: 'string',
            },
          },
          title: 'Step Configuration',
          type: 'object',
        },
      },
      required: ['mode', 'nav'],
      type: 'object',
    },
    IQuestionnaire: {
      description: 'Definition for survey data input',
      properties: {
        actions: {
          items: {
            $ref: '#/definitions/IAction',
          },
          type: 'array',
        },
        header: {
          type: 'string',
        },
        pages: {
          $ref: '#/definitions/IPages',
        },
        questions: {
          items: {
            $ref: '#/definitions/IQuestion',
          },
          type: 'array',
        },
        results: {
          items: {
            $ref: '#/definitions/IResult',
          },
          type: 'array',
        },
        sections: {
          items: {
            $ref: '#/definitions/ISection',
          },
          type: 'array',
        },
      },
      required: [
        'actions',
        'header',
        'pages',
        'questions',
        'results',
        'sections',
      ],
      type: 'object',
    },
    IRequirement: {
      description: 'Defines an individual requirement for accessing a step',
      properties: {
        explanation: {
          description: 'User facing description of this requirement',
          title: 'Exlanation',
          type: 'string',
        },
        maxAge: {
          $ref: '#/definitions/TAge',
          description: 'Optional maximum age allowed for this requirement',
          title: 'Maximum Age',
        },
        minAge: {
          $ref: '#/definitions/TAge',
          description: 'Optional minimum age allowed for this requirement',
          title: 'Minimum Age',
        },
        responses: {
          description: 'Map of step id to required answer values',
          items: {
            $ref: '#/definitions/IResponse',
          },
          title: 'Answers',
          type: 'array',
        },
      },
      required: ['responses'],
      type: 'object',
    },
    IResponse: {
      description: 'Acceptable responses',
      properties: {
        answers: {
          items: {
            properties: {
              id: {
                type: 'string',
              },
              order: {
                type: 'number',
              },
              title: {
                type: 'string',
              },
            },
            type: 'object',
          },
          type: 'array',
        },
        question: {
          properties: {
            answers: {
              description: 'Collection of allowed answers',
              items: {
                $ref: '#/definitions/IQuestionAnswer',
              },
              title: 'Answers',
              type: 'array',
            },
            buttons: {},
            footer: {},
            info: {},
            internalNotes: {},
            requirements: {},
            section: {},
            subTitle: {},
            title: {},
            type: {
              $ref: '#/definitions/QUESTION_TYPE',
              description: 'Type of question',
              title: 'Question Type',
            },
          },
          type: 'object',
        },
      },
      required: ['answers', 'question'],
      type: 'object',
    },
    IResult: {
      description:
        "Represents a potential result based on a customer's answers",
      properties: {
        label: {
          description: "Identify the result (e.g. 'Benefit name')",
          title: 'Label',
          type: 'string',
        },
        name: {
          description: 'Name of this result',
          title: 'Name',
          type: 'string',
        },
        requirements: {
          description:
            'Collection of requirements required to achieve this result',
          items: {
            $ref: '#/definitions/IRequirement',
          },
          title: 'Requirements',
          type: 'array',
        },
      },
      required: ['label', 'name', 'requirements'],
      type: 'object',
    },
    ISection: {
      description: 'Defines a survey section, used in progress bar',
      properties: {
        name: {
          description: 'The display name of this section',
          title: 'Name',
          type: 'string',
        },
        requirements: {
          description:
            'Collection of requirements to enable display of this status',
          items: {
            $ref: '#/definitions/IRequirement',
          },
          title: 'Requirements',
          type: 'array',
        },
      },
      required: ['name', 'requirements'],
      type: 'object',
    },
    IStep: {
      description:
        'Generic step data definition. Applies to all types of steps.',
      properties: {
        buttons: {
          description: 'Collection of navigation buttons',
          properties: {
            next: {
              $ref: '#/definitions/INavButton',
              description: 'Next button',
              title: 'Next Button',
            },
            prev: {
              $ref: '#/definitions/INavButton',
              description: 'Previous / Back button',
              title: 'Prev Button',
            },
          },
          title: 'Buttons',
          type: 'object',
        },
        footer: {
          description:
            'Optional footer text to display at the bottom of the step',
          title: 'Footer',
          type: 'string',
        },
        info: {
          description:
            'Contextual content to display below the step contents and above the footer',
          title: 'Info',
          type: 'string',
        },
        internalNotes: {
          description:
            'Private/internal use only notes for documenting this step',
          title: 'Internal Notes',
          type: 'string',
        },
        requirements: {
          description: 'Collection of requirements to view this step',
          items: {
            $ref: '#/definitions/IRequirement',
          },
          title: 'Requirements',
          type: 'array',
        },
        section: {
          description: 'Section to which this step belongs',
          properties: {
            name: {
              description: 'The display name of this section',
              title: 'Name',
              type: 'string',
            },
            requirements: {
              description:
                'Collection of requirements to enable display of this status',
              items: {
                $ref: '#/definitions/IRequirement',
              },
              title: 'Requirements',
              type: 'array',
            },
          },
          title: 'Section',
          type: 'object',
        },
        subTitle: {
          description: 'Text to display below the title',
          title: 'Subtitle',
          type: 'string',
        },
        title: {
          description: 'Display name of the step',
          title: 'Title',
          type: 'string',
        },
        type: {
          $ref: '#/definitions/TStepType',
          description:
            "Step's type, usually implemented by @see{IPageStep} or @see{IQuestionStep}",
          title: 'Step Type',
        },
      },
      required: ['section', 'title', 'type'],
      type: 'object',
    },
    IStepConfig: {
      description: 'Customizations for styling and formatting of the steps',
      properties: {
        borderClass: {
          description: 'Class determines whether cards have borders',
          enum: ['border-ink', 'border-0'],
          title: 'Border Class',
          type: 'string',
        },
        showStepId: {
          default: false,
          description:
            "Toggles whether steps' ids are shown next to the question text",
          title: 'Show Step Id',
          type: 'boolean',
        },
        titleClass: {
          description:
            'Class to apply to title. Use to add background to question text',
          enum: ['bg-base-lightest', ''],
          title: 'Title Class',
          type: 'string',
        },
      },
      required: ['borderClass', 'showStepId', 'titleClass'],
      type: 'object',
    },
    IStepData: {
      description: 'Data defintion for base wizard step',
      properties: {
        form: {
          $ref: '#/definitions/IForm',
          description: "The user's current form state",
          title: 'Form',
        },
        step: {
          $ref: '#/definitions/IStep',
          description: 'Current step',
          title: 'Step',
        },
      },
      required: ['form'],
      type: 'object',
    },
    MODE: {
      enum: ['dev', 'edit', 'view'],
      type: 'string',
    },
    PAGE_TYPE: {
      description: 'Defines the known component types for pages',
      enum: ['Landing', 'No Results', 'Results', 'Summary'],
      type: 'string',
    },
    QUESTION_TYPE: {
      description: 'Defines the known component types for questions',
      enum: ['dob', 'multiple_choice', 'multiple_select'],
      type: 'string',
    },
    TAge: {
      properties: {
        days: {
          maximum: 31,
          minimum: 0,
          title: 'Days',
          type: ['number', 'null'],
        },
        months: {
          maximum: 31,
          minimum: 0,
          title: 'Months',
          type: ['number', 'null'],
        },
        years: {
          maximum: 100,
          minimum: 0,
          title: 'Years',
          type: ['number', 'null'],
        },
      },
      required: ['months', 'years'],
      type: 'object',
    },
    TButtonMode: {
      enum: ['link', 'button'],
      type: 'string',
    },
    THorizontalPosition: {
      enum: ['left', 'right'],
      type: 'string',
    },
    TProgressBarType: {
      enum: ['step-indicator', 'progress-bar'],
      type: 'string',
    },
    TStepType: {
      anyOf: [
        {
          $ref: '#/definitions/PAGE_TYPE',
        },
        {
          $ref: '#/definitions/QUESTION_TYPE',
        },
        {
          $ref: '#/definitions/DESIGN_TYPE',
        },
      ],
    },
    TVerticalPosition: {
      enum: ['top', 'bottom'],
      type: 'string',
    },
  },
};
