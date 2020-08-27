import React from 'react';
import { Typography, Row, Col, Checkbox } from 'antd';
import TimelineControl from './TimelineControl';
import { CertificationStep } from 'store/certification/types';
import { ZoomLink } from 'components';

const PEOPLE_INFO = [
  { label: 'Liam Welsh', value: 'Liam.Welsh@gmail.com' },
  { label: 'Emma Titer', value: 'Emma.Titer@gmail.com' },
  { label: 'Noah Hanes', value: 'Noah.Hanes@gmail.com' },
  { label: 'Olivia Richmond', value: 'Olivia.Richmond@gmail.com' },
  { label: 'William Trois', value: 'William.Trois@gmail.com' },
  { label: 'Ava Potter', value: 'Ava.Potter@gmail.com' },
];

const Interviews = () => (
  <>
    <Typography.Title level={3}>Employee Interviews</Typography.Title>
    <Row>
      <Col md={{ span: 8 }}>
        {PEOPLE_INFO.map(({ label, value }) => (
          <div key={value}>
            <Checkbox name={value}>{label}</Checkbox>
          </div>
        ))}
      </Col>
      <Col md={{ span: 16 }}>
        <Typography.Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu fringilla nulla. Cras euismod erat at
          felis semper, at tincidunt nibh facilisis. Suspendisse potenti.
        </Typography.Paragraph>
        <Typography.Paragraph>
          <ZoomLink link="https://zoom.us/j/92401797536" />
        </Typography.Paragraph>
      </Col>
    </Row>
    <TimelineControl step={CertificationStep.EMPLOYEE_INTERVIEW} />
  </>
);

export default Interviews;
