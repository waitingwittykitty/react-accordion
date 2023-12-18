import { CheckBox as CheckBoxIcon } from '../Icons/CheckBox';
import './styles.scss';

interface CheckBoxProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export function CheckBox({ value, onChange }: CheckBoxProps) {
  return (
    <div className="checkbox" onClick={() => onChange?.(!value)}>
      {value ? <CheckBoxIcon /> : <div className="checkbox-unchecked" />}
    </div>
  );
}
