import { Meta, Story } from '@storybook/react';
import { Questionable } from '../../../components/Questionable';
import { simpleFlow } from './simple.flow';
import { QuestionableConfig } from '../../../composable/Config';
import { IQuestionable } from '../../../state/GlobalState';
import '../../styles';

export default {
  argTypes: {
    config: { control: { type: 'object' } },
  },
  component: Questionable,
  title: 'Questionable/Simple Flow',
} as Meta;

const Template: Story<IQuestionable> = (args) => <Questionable {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  config: new QuestionableConfig({
    dev: false,
    steps: {
      showStepId: false,
    }
  }),
  questionnaire: simpleFlow,
};