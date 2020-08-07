import { useDispatch, useSelector } from 'react-redux';
import * as CertActions from './actions';
import { CertificationStep, StepRoutes } from './types';
import { RootState } from 'store/types';

export const useCertificationStep = () => {
  const routes = useSelector((state: RootState) => state.cert.routes);
  const currentStep = useSelector((state: RootState) => state.cert.currentStep);
  const stepStatus = useSelector((state: RootState) => state.cert.steps);

  const dispatch = useDispatch();

  const setRoutes = (routes: StepRoutes) => dispatch(CertActions.setStepRoutes(routes));
  const setCurrentStep = (step: CertificationStep) => dispatch(CertActions.setCurrentStep(step));
  const setStepStatus = (...args: [CertificationStep, boolean]) => dispatch(CertActions.setStepStatus(...args));

  return {
    routes,
    setRoutes,
    stepStatus,
    setStepStatus,
    currentStep,
    setCurrentStep,
  };
};
