import React from 'react';
import { Typography } from 'antd';
import TimelineControl from './TimelineControl';
import { CertificationStep } from 'store/certification/types';
import { Evaluation, AddEvaluation } from 'components/evaluation';
import { useEvaluations } from 'store/certification/hooks';

const Observations = () => {
  const { evaluations, postEvaluation } = useEvaluations();
  
  return (
    <>
      <Typography.Title level={3}>Observations</Typography.Title>
      <iframe
        title="evidences"
        src="https://drive.google.com/embeddedfolderview?id=19pnNCAn-xFSfa6zRbQXOfoQKYyDPZ3mk"
        style={{ width: '100%', height: '250px', border: 0 }}
      ></iframe>
      {evaluations.map((ev) => (
        <Evaluation
          key={ev.fsc_evaluationid}
          username={'sdaf'}
          article={ev.fsc_name}
          comment={ev.fsc_comment}
          date={ev.modifiedon}
        />
      ))}
      <AddEvaluation onsubmit={({ evidence, comment }) => postEvaluation(evidence, comment)} />
      <TimelineControl step={CertificationStep.OBSERVATIONS} />
    </>
  );
};

export default Observations;
