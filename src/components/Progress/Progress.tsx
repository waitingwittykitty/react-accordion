import clsx from 'clsx';
import './styles.scss';

export interface ProgressProps {
  value: number;
  classes?: {
    wrapper?: string;
    filled?: string;
    value?: string;
  };
}

export function Progress({ value = 0, classes }: ProgressProps) {
  return (
    <div className={clsx(classes?.wrapper, 'progress-wrapper')}>
      <div
        className={clsx(classes?.filled, 'progress-filled')}
        style={{ width: `${value}%` }}
      >
        <span className={clsx(classes?.value, 'progress-value')}>{value}%</span>
      </div>
    </div>
  );
}
