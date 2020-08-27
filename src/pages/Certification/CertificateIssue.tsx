import React, { useState, useEffect } from 'react';
import { Typography, Button, Card, Form, Input } from 'antd';
import TimelineControl from './TimelineControl';
import { CertificationStep } from 'store/certification/types';
import { UnlockOutlined, ExportOutlined } from '@ant-design/icons';
import { DOCUSIGN_OAUTH_URL, useDocusign, getFinalCertificateUrl } from 'services/docusign';

import { useAuth } from 'services/auth';
import { useCertification } from 'store/certification/hooks';
import { UserRole } from 'services/auth/auth.service';

const CertificateIssueContainer = () => {
  const { user } = useAuth();

  return (
    <>
      {user?.role !== UserRole.APPLICANT ? <CertificateNonApplicantView /> : 'Certificate signing in progress'}
      <TimelineControl step={CertificationStep.CERTIFICATION_ISSUE} />
    </>
  );
};

const CertificateNonApplicantView = () => {
  const { isAuth } = useDocusign();

  return (
    <>
      <Typography.Title level={3}>Certificate Issue</Typography.Title>
      {isAuth ? <CertificateIssue /> : <DocusignLogin />}
    </>
  );
};

const DocusignLogin = () => {
  const authorize = () => {
    window.location.href = DOCUSIGN_OAUTH_URL;
  };

  return (
    <Button size="middle" onClick={authorize} icon={<UnlockOutlined />}>
      Login with Docusign
    </Button>
  );
};

const CertificateIssue = () => {
  const [url, setUrl] = useState('');
  const { user } = useAuth();
  const { markAsCompleted, isComplete } = useCertification();

  useEffect(() => {
    if (!user) return;
    getFinalCertificateUrl(user.name, user.email).then(setUrl);
  }, [user]);

  return (
    <>
      <p>Logged into Docusign</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Final Certificate&nbsp;
        <ExportOutlined />
      </a>
      <br />
      <br />
      <Button size="small" disabled={isComplete} onClick={() => markAsCompleted()}>
        Mark as Completed
      </Button>
    </>
  );
};

export default CertificateIssueContainer;
