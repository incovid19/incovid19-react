// import {AlertIcon, ArrowRightIcon} from '@primer/octicons-react';
// import {AlertIcon} from '@primer/octicons-react';
import {useTranslation} from 'react-i18next';

function Banner(props) {
  const {t} = useTranslation();

  return (
    <div className="Banner fadeInDown" style={{animationDelay: '0.4s'}}>
      <div className="wrapper">
        {/* <div className="alert-icon">
          <AlertIcon size={16} />
        </div> */}
        <div className="content">
          {t('Please send suggestions and observations to')}{' '}
        </div>
        {/* <a
          href="https://github.com/incovid19/data/issues"
          rel="noreferrer"
          target="_blank"
        >
          &nbsp;Github
        </a> */}
        {/* ,&nbsp; */}
        <a
          href="mailto: contact@incovid19.org"
          rel="noreferrer"
          target="_blank"
        >
          contact@incovid19.org
        </a>
        {/* &nbsp;{t(' or ')}&nbsp;
        {'  '} */}
        {/* <a
          href="https://twitter.com/incovid19org"
          rel="noreferrer"
          target="_blank"
        >
          &nbsp; https://twitter.com/incovid19org
        </a> */}
      </div>
    </div>
  );
}

export default Banner;
