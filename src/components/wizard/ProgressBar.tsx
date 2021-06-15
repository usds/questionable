import PB            from '@ramonak/react-progress-bar';
import { useGlobal } from '../../state/GlobalState';
import { IStepData } from '../../survey/IStepData';
import { noel }      from '../../lib/noop';
import { CSS_CLASS } from '../../lib';

export const ProgressBar = (props: IStepData): JSX.Element => {
  const { config, questionnaire } = useGlobal();

  if (config.progressBar.hide) {
    return noel();
  }

  const completed = questionnaire.getProgressPercent(props, config);

  return (
    <div className={CSS_CLASS.PROGRESS_BAR}>
      <PB
        completed={completed}
        bgColor={config.progressBar.bgColor}
        baseBgColor={config.progressBar.baseBgColor}
        isLabelVisible={false}
        borderRadius={'0px'}
      />
    </div>
  );
};