import React from 'react';
import { Typography } from 'antd';
import TimelineControl from './TimelineControl';
import { CertificationStep } from 'store/certification/types';
import { ZoomLink } from 'components';

const CloseMeeeting = () => (
  <>
    <Typography.Title level={3}>Close Meetings</Typography.Title>
    <Typography.Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu fringilla nulla. Cras
      euismod erat at felis semper, at tincidunt nibh facilisis. Suspendisse potenti.
    </Typography.Paragraph>
    <Typography.Paragraph>
      <ZoomLink link="https://zoom.us/j/92401797536" />
    </Typography.Paragraph>
    <TimelineControl step={CertificationStep.CLOSE_MEETING} />
  </>
);

export default CloseMeeeting;
