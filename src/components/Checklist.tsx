import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Timeline } from 'antd';
import { TimeLineItemProps } from 'antd/lib/timeline';
import { useHistory } from 'react-router-dom';

export const Checklist = styled(Timeline)`
  .ant-timeline-item-last > .ant-timeline-item-content {
    min-height: unset;
  }
`;

interface IChecklistItem extends TimeLineItemProps {
  linkTo?: string;
  iscomplete?: boolean;
  isactivate?: boolean;
}

const ChecklistItem: React.FC<IChecklistItem> = ({ linkTo, iscomplete, isactivate, ...rest }) => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push(linkTo ?? '');
  }, [linkTo]);

  return (
    <div onClick={onClick}>
      <Timeline.Item {...rest} />
    </div>
  );
};

ChecklistItem.defaultProps = {
  iscomplete: false,
};

const COLOR_DONE = {
  border: '#1890ff',
  fill: '#1890ff',
};
const COLOR_ACTIVE = {
  border: '#1890ff',
  fill: '#fff',
};
const COLOR_INCOMPLETE = {
  border: '#949494',
  fill: '#fff',
};

const StyledChecklistItem = styled(ChecklistItem)`
  :hover {
    cursor: pointer;
    font-weight: bold;
  }
  .ant-timeline-item-head-blue {
    background-color: ${({ iscomplete }) => (iscomplete ? '#1890ff' : '#fff')};
    box-shadow: ${({ isactivate }) => isactivate && '0px 0px 4px rgb(47 140 226)'};
  }
`;

export { StyledChecklistItem };
