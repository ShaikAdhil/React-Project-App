import { Component } from "react";
import "./TabItem.css";

const TabItem = (props: any) => {
  const { tabDetails, updateActiveTabId, isActive } = props;
  const { tabId, displayText } = tabDetails;

  const activeTabClassName = isActive ? "active-tab-btn" : "";

  const onClickTabBtn = () => {
    updateActiveTabId(tabId);
    // console.log(updateActiveTabId(tabId));
  };
  return (
    <li className="tab-item-container ">
      <button
        className={`tab-btn ${activeTabClassName}`}
        type="button"
        onClick={onClickTabBtn}
      >
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
