import React from 'react';
import styled from 'styled-components';
import { Descriptions } from 'antd';

type ProjectSummaryProps = {
  className?: string
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ className }) => (
  <Descriptions size="small" column={3} className={className}>
    <Descriptions.Item label="CoC">Forests LTD</Descriptions.Item>
    <Descriptions.Item label="Auditor"><a>Vidhucraft</a></Descriptions.Item>
    <Descriptions.Item label="Start Date">2020-01-10</Descriptions.Item>
    <Descriptions.Item label="Certification Date">2020-10-10</Descriptions.Item>
    <Descriptions.Item label="Address">
      1 Middle, Nowhere, USA, 02115
    </Descriptions.Item>
  </Descriptions>
);

const StyledProjectSummary = styled(ProjectSummary)`
  background-color: #f2f6fa;
  padding: 12px;
  margin: 24px 0;
  border-radius: 8px;
`;

export default StyledProjectSummary;
