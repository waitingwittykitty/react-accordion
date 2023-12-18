import { useMemo, useState } from 'react';
import clsx from 'clsx';
import { ArrowLineDown } from '../Icons/ArrowLineDown';
import { BookingFeatures } from '../Icons/BookingFeatures';
import { BookingOk } from '../Icons/BookingOk';
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
};

export interface AccordionProps {
  data: AccordionGroupData[];
}

function Accordion({ data, onChange }: AccordionProps) {
  return (
    <ul className="accordion">
      {data?.map((group, groupIndex) => (
        <li key={groupIndex}>
          <AccordionGroup
            data={group}
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
    </>
  );
}

export default Accordion;
