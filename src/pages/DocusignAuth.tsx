import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { exchangeForToken } from 'services/docusign';

const DocusignAuth = () => {
  const [code, setCode] = useState<string | null>(null);
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) return;
    setCode(code);
  }, []);

  useEffect(() => {
    // Exchange code to token
    if(!code) return;
    
    exchangeForToken(code).then(() => history.push('/certification/certissue'));
  }, [code]);

  return null;
};

export default DocusignAuth;
