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
          &#9888; &nbsp;
          {t('Important Update on the future of incovid19.org post 31st October 2022. ')}
          <a
            href="/notice"
            rel="noreferrer"
            target="_self"
          >
            Read more →
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
