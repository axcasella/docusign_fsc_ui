const BASE_URL_EVAL =
  'http://docusignfscserver-env.eba-y94bqrjy.us-east-2.elasticbeanstalk.com/api/evaluation/certificate/%certid%';

// Evaluations
export const getEvaluations = (certId: string) =>
  fetch(BASE_URL_EVAL.replace('%certid%', certId), {
    method: 'GET',
  }).then((res) => res.json());

export const addNewEvaluation = (certId: string, name: string, comment: string) => {
  fetch(BASE_URL_EVAL.replace('%certid%', certId), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      date_from: new Date().toISOString(),
      date_to: new Date().toISOString(),
      certificate_id: certId,
      evaluation_name: name,
      evaluation_comment: comment,
      auditor_name: 'Tom',
    }),
  }).then((res) => res.json());
};
