import {useState} from 'react';
import Tabs from './Tabs.jsx';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import {EXAMPLES} from '../data.js';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton > 'components', 'jsx'...
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" title={'Examples'}>
      <Tabs
        //ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}>
              State
            </TabButton>
            <TabButton onClick={() => handleSelect()}>Clear</TabButton>
          </>
        }>
        {tabContent}
      </Tabs>
    </Section>
  );
}
