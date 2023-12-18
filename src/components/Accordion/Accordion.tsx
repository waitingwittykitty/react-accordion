import { useMemo, useState } from 'react';
import clsx from 'clsx';
import { ArrowLineDown } from '../Icons/ArrowLineDown';
import { BookingFeatures } from '../Icons/BookingFeatures';
import { BookingOk } from '../Icons/BookingOk';
import { CheckBox } from '../CheckBox';
import './styles.scss';

export type AccordionTask = {
  description: string;
  value: number;
  checked?: boolean;
};

export type AccordionGroupData = {
  name: string;
  tasks: AccordionTask[];
};

export type AccordionGroupProps = {
  data: AccordionGroupData;
  onChange?: (index: number, value: boolean) => void;
};

export interface AccordionProps {
  data: AccordionGroupData[];
  onChange?: (groupIndex: number, taskIndex: number, value: boolean) => void;
}

function Accordion({ data, onChange }: AccordionProps) {
  return (
    <ul className="accordion">
      {data?.map((group, groupIndex) => (
        <li key={groupIndex}>
          <AccordionGroup
            data={group}
            onChange={(taskIndex, value) =>
              onChange?.(groupIndex, taskIndex, value)
            }
          />
        </li>
      ))}
    </ul>
  );
}

function AccordionGroup({ data, onChange }: AccordionGroupProps) {
  const [open, setOpen] = useState(false);

  const allChecked = useMemo(() => {
    return data.tasks.every((task) => task.checked);
  }, [data]);

  const handleToggle = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <div className="group-heading" onClick={handleToggle}>
        {allChecked ? (
          <BookingOk className="group-icon" />
        ) : (
          <BookingFeatures className="group-icon" />
        )}
        <h3>{data.name}</h3>
        <div className="collapse-button">
          <span>{open ? 'HIDE' : 'SHOW'}</span>
          <ArrowLineDown
            className={clsx('collapse-icon', { 'rotate-180': open })}
          />
        </div>
      </div>
      <ul className={clsx({ open })}>
        {data.tasks?.map((task, index) => (
          <li key={index} onClick={() => onChange?.(index, !task.checked)}>
            <CheckBox
              value={task.checked}
              onChange={() => onChange?.(index, !task.checked)}
            />{' '}
            <div>{task.description}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Accordion;
