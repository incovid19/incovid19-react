import Footer from './Footer';

import {useTransition, animated} from '@react-spring/web';
import classnames from 'classnames';
import {memo, useMemo, useEffect, useState} from 'react';
import ContentLoader from 'react-content-loader';
import {
  ExternalLink,
  GitHub,
  Instagram,
  Linkedin,
  Twitter,
} from 'react-feather';
import {Helmet} from 'react-helmet';

// const VOLUNTEERS_DOMAIN = 'https://volunteers.covid19india.org';
// const PLACEHOLDER_IMG = 'placeholder.jpg';

function Member({
  className,
  style,
  name,
  bio,
  link,
  image,
  image2,
  socials = {},
}) {
  const [loaded, setLoaded] = useState(false);

  const socialIcons = useMemo(
    () => ({
      github: <GitHub size={16} />,
      linkedin: <Linkedin size={16} />,
      twitter: <Twitter size={16} />,
      instagram: <Instagram size={16} />,
    }),
    []
  );

  return (
    <animated.div className={classnames('Member', className)} {...{style}}>
      {link && <a href={link} target="_blank" rel="noopener noreferrer"></a>}
      {!loaded && (
        <div className="image">
          <ContentLoader
            backgroundColor="#888"
            foregroundColor="#888"
            backgroundOpacity={0.2}
            foregroundOpacity={0.4}
          >
            <rect x="0" y="0" width="256" height="256" />
          </ContentLoader>
        </div>
      )}
      <img
        className="image"
        src={`${image}`}
        alt={name}
        onLoad={setLoaded.bind(this, true)}
        style={{display: loaded ? 'block' : 'none'}}
      />
      {image2 && (
        <img
          className="image"
          src="https://raw.githubusercontent.com/akshayks3/images/main/cropped-Twitter-version-4-scaled-1-2048x2048.jpg"
          alt={name}
          onLoad={setLoaded.bind(this, true)}
          style={{display: loaded ? 'block' : 'none'}}
        />
      )}
      <div className="details">
        <h2 className="name">{name}</h2>
        <p className="bio">{bio}</p>
        <div className="socials">
          {Object.entries(socialIcons).map(
            ([social, icon]) =>
              socials[social] && (
                <a
                  key={social}
                  className={classnames('icon', social)}
                  href={socials[social]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              )
          )}
        </div>
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
function Volunteers() {
  const dataAugemented = [
    {
      bio: 'Indian Institute of Technology Madras',
      image:
        'https://raw.githubusercontent.com/akshayks3/images/main/1200px-IIT_Madras_Logo.svg.png',
      name: 'V Kamakoti',
    },
    {
      bio: 'Indian Institute of Science',
      image:
        'https://raw.githubusercontent.com/akshayks3/images/main/IISc_Master_Seal_Black.jpg',
      image2:
        'https://raw.githubusercontent.com/akshayks3/images/main/cropped-Twitter-version-4-scaled-1-2048x2048.jpg',
      name: 'Rajesh Sundaresan',
    },
    {
      bio: 'Indian Statistical Institute, Bangalore Centre',
      image:
        'https://raw.githubusercontent.com/akshayks3/images/main/1200px-Indianstatisticalinstitutelogo.svg.png',
      name: 'Siva Athreya',
    },
    {
      bio: 'Indian Statistical Institute, Delhi Centre',
      image:
        'https://raw.githubusercontent.com/akshayks3/images/main/1200px-Indianstatisticalinstitutelogo.svg.png',
      name: 'Deepayan Sarkar',
    },
    {
      bio: 'Semantic Web India',
      image:
        'https://raw.githubusercontent.com/akshayks3/images/main/semantic_logo-removebg-preview.png',
      name: 'Asha Subramanian and team',
    },
    {
      bio: 'Chennai Mathematical Institute, MSc. Data Science Program',
      image:
        'https://raw.githubusercontent.com/akshayks3/images/main/cmi-header.png',
      name: 'Student Volunteers',
    },
  ];
  console.log(dataAugemented);
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
        <title>Collaborators - incovid19.org</title>
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
            Collaborators
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

export default memo(Volunteers);
