import React, { useEffect, useMemo, useState } from 'react';
import { Progress } from './components/Progress';
import Accordion, { AccordionGroupData } from './components/Accordion/Accordion';
import './styles.scss';

function App() {
  const [accordionData, setAccordionData] = useState<AccordionGroupData[]>([]);

  const overallProgress = useMemo(() => {
    let total = 0, checkedTotal = 0;

    accordionData.forEach(group => {
      group.tasks.forEach(task => {
        total += task.value;
        if (task.checked) {
          checkedTotal += task.value;
        }
      })
    });

    return Math.floor(checkedTotal * 100 / total);
  }, [accordionData]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress');
      const data = await response.json();
      setAccordionData(data);
    })();
  }, []);

  return (
    <main>
      <div className="box box-medium">
        <div className="box-header">
          <h2>Lodgify Grouped Tasks</h2>
          <Progress value={overallProgress} classes={{ filled: 'bg-primary' }} />
        </div>
        <Accordion data={accordionData} />
      </div>
    </main>
  );
}

export default App;
