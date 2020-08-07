export enum CertificationStep {
  OPEN_MEETING,
  SITE_INSPECTION,
  EMPLOYEE_INTERVIEW,
  OBSERVATIONS,
  CLOSE_MEETING,
  CERTIFICATION_ISSUE,
}

export type StepRoutes = {
  [Key in CertificationStep]?: string
}

interface IBaseAction {
  type: string;
}

export interface CompleteStepAction extends IBaseAction {
  payload: {
    step: CertificationStep;
    status: boolean;
  };
}

export interface SetStepRoutesAction extends IBaseAction {
  payload: StepRoutes;
}

export interface SetCurrentStepAction extends IBaseAction {
  payload: {
    step: CertificationStep;
  };
}

export type AllActionTypes = CompleteStepAction | SetStepRoutesAction | SetCurrentStepAction;
