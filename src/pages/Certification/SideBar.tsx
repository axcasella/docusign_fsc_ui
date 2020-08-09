import React from 'react';
import styled from 'styled-components';
import { FilePdfOutlined, PictureOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useRouteMatch } from 'react-router-dom';
import { SectionHeading, Checklist, ChecklistItem, SimpleMenu } from 'components';
import { CertificationStep } from 'store/certification/types';
import { useCertificationStep } from 'store/certification/hooks';

const SideBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const { url } = useRouteMatch();

  const { stepStatus, currentStep } = useCertificationStep();
  
  return (
    <div className={className}>
      <SectionHeading>Checklist</SectionHeading>
      <Checklist>
        <ChecklistItem
          linkTo={`${url}/open`}
          iscomplete={stepStatus[CertificationStep.OPEN_MEETING]}
          isactivate={currentStep === CertificationStep.OPEN_MEETING}
        >
          Opening Meeting
        </ChecklistItem>
        <ChecklistItem
          linkTo={`${url}/inspection`}
          iscomplete={stepStatus[CertificationStep.SITE_INSPECTION]}
          isactivate={currentStep === CertificationStep.SITE_INSPECTION}
        >
          Site Inspection
        </ChecklistItem>
        <ChecklistItem
          linkTo={`${url}/interview`}
          iscomplete={stepStatus[CertificationStep.EMPLOYEE_INTERVIEW]}
          isactivate={currentStep === CertificationStep.EMPLOYEE_INTERVIEW}
        >
          Employee Interviews
        </ChecklistItem>
        <ChecklistItem
          linkTo={`${url}/observation`}
          iscomplete={stepStatus[CertificationStep.OBSERVATIONS]}
          isactivate={currentStep === CertificationStep.OBSERVATIONS}
        >
          Observations
        </ChecklistItem>
        <ChecklistItem
          linkTo={`${url}/close`}
          iscomplete={stepStatus[CertificationStep.CLOSE_MEETING]}
          isactivate={currentStep === CertificationStep.CLOSE_MEETING}
        >
          Closing Meeting
        </ChecklistItem>
        <ChecklistItem
          linkTo={`${url}/certissue`}
          iscomplete={stepStatus[CertificationStep.CERTIFICATION_ISSUE]}
          isactivate={currentStep === CertificationStep.CERTIFICATION_ISSUE}
        >
          Certification Issue
        </ChecklistItem>
      </Checklist>

      <SectionHeading>Evidence</SectionHeading>
      <SimpleMenu>
        <SimpleMenu.Item icon={<FilePdfOutlined />}>PDF Evidence</SimpleMenu.Item>
        <SimpleMenu.Item icon={<PictureOutlined />}>Photo Evidence</SimpleMenu.Item>
        <SimpleMenu.Item icon={<VideoCameraOutlined />}>Video Evidence</SimpleMenu.Item>
      </SimpleMenu>
    </div>
  );
};

export default styled(SideBar)`
  border: 1px solid #0000001c;
  border-radius: 8px;
  padding: 2px;
  padding: 24px;
  /* box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 10%); */
`;
