import { CertificationStep } from './types';

const defaultState = {
  steps: {
    [CertificationStep.OPEN_MEETING]: false,
    [CertificationStep.SITE_INSPECTION]: false,
    [CertificationStep.EMPLOYEE_INTERVIEW]: false,
    [CertificationStep.OBSERVATIONS]: false,
    [CertificationStep.CLOSE_MEETING]: false,
    [CertificationStep.CERTIFICATION_ISSUE]: false,
  },
  routes: {
    [CertificationStep.OPEN_MEETING]: '',
    [CertificationStep.SITE_INSPECTION]: '',
    [CertificationStep.EMPLOYEE_INTERVIEW]: '',
    [CertificationStep.OBSERVATIONS]: '',
    [CertificationStep.CLOSE_MEETING]: '',
    [CertificationStep.CERTIFICATION_ISSUE]: '',
  },
  currentStep: CertificationStep.OPEN_MEETING
};

export default defaultState;

