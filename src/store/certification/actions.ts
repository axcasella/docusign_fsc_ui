import { ThunkDispatch } from 'redux-thunk';
import { ActionType } from './';
import {
  CertificationStep,
  CompleteStepAction,
  SetStepRoutesAction,
  SetCurrentStepAction
} from './types';

export const setStepStatus = (step: CertificationStep, status: boolean) => (
  dispatch: ThunkDispatch<{}, {}, CompleteStepAction>
) =>
  Promise.resolve(
    dispatch({
      type: ActionType.COMPLETE_STEP,
      payload: { step, status },
    })
  );

export const setStepRoutes = (stepRoutes: SetStepRoutesAction['payload']) => (
  dispatch: ThunkDispatch<{}, {}, SetStepRoutesAction>
) =>
  dispatch({
    type: ActionType.SET_STEP_ROUTES,
    payload: stepRoutes,
  });

export const setCurrentStep = (step: CertificationStep) => (
  dispatch: ThunkDispatch<{}, {}, SetCurrentStepAction>
) =>
  dispatch({
    type: ActionType.SET_CURRENT_STEP,
    payload: { step },
  });
