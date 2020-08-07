import React from 'react';
import { Typography } from 'antd';
import TimelineControl from './TimelineControl';
import { CertificationStep } from 'store/certification/types';

const CertificateIssue = () => (
  <>
    <Typography.Title level={3}>Certificate Issue</Typography.Title>
    <TimelineControl step={CertificationStep.CERTIFICATION_ISSUE} />
  </>
);

export default CertificateIssue;
