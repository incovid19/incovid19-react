import {useTranslation} from 'react-i18next';
// import {Link} from 'react-router-dom';

function Banner(props) {
  const {t} = useTranslation();

  return (
    <div className="Banner fadeInDown" style={{animationDelay: '0.4s'}}>
      <div className="wrapper">
        {/* <div className="content">
          <Link to="/FAQ">
            {t('Please read note on ')}
            <em>Deceased Count Reconciliation </em>
            {t('and state-wise updates ')}
          </Link>
          .
        </div> */}

        <div className="content">
          {t('Please send suggestions and observations to ')}
          <a
            href="mailto: contact@incovid19.org"
            rel="noreferrer"
            target="_blank"
          >
            contact@incovid19.org
          </a>
        </div>
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
