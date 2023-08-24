import React, { useState } from 'react';

import './tab.css';

const Tab = ({ data, OnTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0); // to set active class based on index
  const [left, setLeft] = useState(0); // to create a sliding effect

  const handleTab = (tab, index) => {
    //if index = 0 then , 0
    // if index = 1 then, 100
    setLeft(index * 100); // 100 because width of a tab is 100px

    setTimeout(() => {
      setSelectedTab(index); //after fey ms we update the state to create a moving effect
    }, 300);
    // console.log(selectedTab);
    // console.log(tab);

    OnTabChange(tab, index); // sending current tab and index as parameter to function
  };

  return (
    <div className="Tabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tab ${selectedTab === index ? 'active' : ''}`}
            onClick={() => handleTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        {/* giving an inline style of left: 0 | left: 100 based on the state*/}
        {/* because this element will be absolute to tab element and will go to the selected tab */}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default Tab;
