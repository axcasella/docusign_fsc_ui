import React from 'react';
import { Typography } from 'antd';
import TimelineControl from './TimelineControl';
import { CertificationStep } from 'store/certification/types';

const Observations = () => (
  <>
    <Typography.Title level={3}>Observations</Typography.Title>
    <iframe
      src="https://drive.google.com/embeddedfolderview?id=19pnNCAn-xFSfa6zRbQXOfoQKYyDPZ3mk"
      style={{ width: '100%', height: '600px', border: 0 }}
    ></iframe>

    <TimelineControl step={CertificationStep.OBSERVATIONS} />
  </>
);

export default Observations;
