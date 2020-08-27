import React, { useState, useEffect } from 'react';
import { Typography, Button } from 'antd';
import { ZoomLink } from 'components';
import TimelineControl from './TimelineControl';
import { ReactComponent as MeetingSVG } from 'assets/meeting.svg';
import { CertificationStep } from 'store/certification/types';
import { useAuth } from 'services/auth';
import { getInitialCertificateUrl } from 'services/docusign';
import { UserRole } from 'services/auth/auth.service';

const OpenMeeting = () => {
  const [url, setUrl] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    getInitialCertificateUrl(user.name, user.email).then(setUrl);
  }, [user]);

  return (
    <>
      <Typography.Title level={3}>Open Meeting</Typography.Title>
      <Typography.Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu fringilla nulla. Cras euismod erat at
        felis semper, at tincidunt nibh facilisis. Suspendisse potenti.
      </Typography.Paragraph>
      <Typography.Paragraph>
        <MeetingSVG width="256" height="256" />
      </Typography.Paragraph>
      {user?.role === UserRole.APPLICANT && (
        <Typography.Paragraph>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Sign Initial Agreement
          </a>
        </Typography.Paragraph>
      )}
      <Typography.Paragraph>
        <ZoomLink link="https://zoom.us/j/92401797536" />
      </Typography.Paragraph>
      <TimelineControl step={CertificationStep.OPEN_MEETING} />
    </>
  );
};

export default OpenMeeting;
