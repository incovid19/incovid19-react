import Footer from './Footer';

import {useTransition, animated} from '@react-spring/web';
import classnames from 'classnames';
import {memo, useEffect} from 'react';
import {ExternalLink} from 'react-feather';
import {Helmet} from 'react-helmet';

function Member({className, style, title, link = {}}) {
  return (
    <animated.div className={classnames('Member', className)} {...{style}}>
      {link && <a href={link} target="_blank" rel="noopener noreferrer"></a>}
      <div className="details">
        <h2 className="name">{title}</h2>
      </div>
      {link && (
        <div className="link-external">
          <ExternalLink size={16} />
        </div>
      )}
    </animated.div>
  );
}

// TODO: Lazy-loading and content loader
function Models() {
  const dataAugemented = [
    {
      link: 'https://www.isibang.ac.in/~athreya/incovid19/ktest.php',
      title: 'Early Warning System for Karnataka',
    },
    {
      link: 'https://www.isibang.ac.in/~athreya/incovid19/indiaerlw.php',
      title: 'Early Warning System for India States',
    },
    {
      link: 'https://www.isibang.ac.in/~athreya/incovid19/dash.php',
      title: 'Forecast Hub',
    },
    {
      link: 'https://www.isibang.ac.in/~athreya/incovid19/indiar.php',
      title: 'Reproduction numbers Rt - States of India',
    },
    {
      link: 'https://www.isibang.ac.in/~athreya/incovid19/kart.php',
      title: 'Reproduction numbers Rt - Karnataka Districts',
    },
  ];
  const transition = useTransition(dataAugemented, {
    keys: (item) => item?.name || 'last',
    delay: 200,
    trail: 200 / dataAugemented.length,
    from: {opacity: 0, scale: 0.8},
    enter: {opacity: 1, scale: 1},
    leave: {opacity: 0, scale: 0},
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Models and Forecasts - incovid19.org</title>
        <meta
          name="title"
          content="Coronavirus Outbreak in India: Latest Map and Case Count"
        />
      </Helmet>

      <div className="Volunteers">
        <div className="wrapper">
          <div
            className={classnames('collaborators', 'fadeInUp')}
            style={{animationDelay: '0.1s', fontSize: '2rem'}}
          >
            Models and Forecasts
          </div>
        </div>
        <div className="members">
          {transition(
            (style, item) =>
              item &&
              (Object.keys(item).length > 0 ? (
                <Member {...item} {...{style}} />
              ) : (
                <animated.div className="last" {...{style}}>
                  <Member className={'first'} />
                  <Member className={'second'} />
                  <Member className={'third'} bio="And many more..." />
                </animated.div>
              ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default memo(Models);
