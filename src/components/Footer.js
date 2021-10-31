import {API_DOMAIN} from '../constants';

import {memo} from 'react';
import {GitHub, Database, Mail} from 'react-feather';
// import {useTranslation} from 'react-i18next';

function Footer() {
  // const {t} = useTranslation();

  return (
    <footer>
      <div className="link">
        <a
          href="https://github.com/incovid19"
          target="_blank"
          rel="noopener noreferrer"
        >
          incovid19
        </a>
      </div>

      {/* <h5>{t('We stand with everyone fighting on the frontlines')}</h5> */}

      <div className="links">
        <a
          href="https://github.com/incovid19"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>

        <a
          className="api"
          href={API_DOMAIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Database />
        </a>

        {/* <a
          href="https://t.me/incovid19org"
          className="telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send />
        </a> */}

        {/* <a
          href="https://twitter.com/incovid19org"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <Twitter />
        </a> */}

        {/* <a
          href="https://instagram.com/incovid19org"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <Instagram />
        </a> */}

        <a
          href="mailto:contact@incovid19.org"
          className="mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
