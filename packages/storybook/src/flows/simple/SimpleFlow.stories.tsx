import '../../styles';
import { Meta, Story } from '@storybook/react';
import { simpleFlow } from './simple.flow';
import {
  Questionable, 
  IQuestionable,
  Questionnaire
} from '@usds.gov/questionable';

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
  questionnaire: new Questionnaire(simpleFlow),
}
