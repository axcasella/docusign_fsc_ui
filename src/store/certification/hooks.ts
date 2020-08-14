import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as CertActions from './actions';
import * as EvaluationService from 'services/certification/evaluation.service';
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

export const useCertification = () => {
  const dispatch = useDispatch();
  const certificate = useSelector((state: RootState) => state.cert.activeCertificate);

  useEffect(() => {
    dispatch(CertActions.loadOrCreateCertification());
  }, []);

  return {
    certificate,
  };
};

export const useEvaluations = () => {
  const { certificate } = useCertification();
  const dispatch = useDispatch();
  const evaluations = useSelector((state: RootState) => state.cert.evaluations);

  useEffect(() => {
    if (certificate) {
      dispatch(CertActions.loadEvaluations(certificate.fsc_fsccertificateid));
    }
  }, [certificate]);

  const postEvaluation = async (evidence: string, comment: string) => {
    if (!certificate) return;
    console.log('posting');
    const res = await EvaluationService.addNewEvaluation(certificate.fsc_fsccertificateid, evidence, comment);
    console.log(res);
    setTimeout(() => {
      // Dynamic seems to have a replica lag in their DB
      dispatch(CertActions.loadEvaluations(certificate.fsc_fsccertificateid));
    }, 1000);
    console.log('dispatched');
  };

  return {
    evaluations,
    postEvaluation,
  };
};
