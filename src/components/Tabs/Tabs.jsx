import React, { PureComponent } from 'react';
import {
  ControlContaoner,
  TabButton,
  ContentContainer,
  ContentTitle,
} from './Tabs.styled';

class Tabs extends PureComponent {
  state = { activeTabInx: 0 };

  setActiveTabIndex = idx => {
    this.setState({ activeTabInx: idx });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.activeTabInx !== nextState.activeTabInx;
  // }

  render() {
    const { activeTabInx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabInx];
    console.log('render');
    return (
      <>
        <ControlContaoner>
          {items.map((item, idx) => (
            <TabButton
              active={idx === activeTabInx}
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIndex(idx)}
            >
              {item.label}
            </TabButton>
          ))}
        </ControlContaoner>
        <ContentContainer>
          <ContentTitle>{activeTab.label}</ContentTitle>
          <p>{activeTab.content}</p>
        </ContentContainer>
      </>
    );
  }
}

export default Tabs;
