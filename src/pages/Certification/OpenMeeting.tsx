import React from 'react';
import { Typography } from 'antd';
import { ZoomLink } from 'components';
import TimelineControl from './TimelineControl';
import { ReactComponent as MeetingSVG } from 'assets/meeting.svg';
import { CertificationStep } from 'store/certification/types';



const OpenMeeting = () => (
  <>
    <Typography.Title level={3}>Open Meeting</Typography.Title>
    <Typography.Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu fringilla nulla. Cras
      euismod erat at felis semper, at tincidunt nibh facilisis. Suspendisse potenti.
    </Typography.Paragraph>
    <Typography.Paragraph>
      <MeetingSVG width="256" height="256" />
    </Typography.Paragraph>
    <Typography.Paragraph>
      <ZoomLink link="https://zoom.us/j/92401797536" />
    </Typography.Paragraph>
    <TimelineControl step={CertificationStep.OPEN_MEETING} />
  </>
);

export default OpenMeeting;
