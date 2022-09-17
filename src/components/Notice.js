import Footer from './Footer';

// import {API_DOMAIN} from '../constants';
// import {fetcher} from '../utils/commonFunctions';
import {useEffect} from 'react';
import {Helmet} from 'react-helmet';

// import useSWR from 'swr';

function Notice() {
  const data = {
    notice: [
      {
        question: 'Updates on www incovid19.org beyond 31st October 2022 ',
        answer: `It has been a roller coaster ride. When we started operations in October 2021, it was an uphill task to ramp up the site in a week. The team managed it and ensured a high level of automation in bringing data from diverse sources and different formats.  The support and advice from Indian Institute of Technology Madras, Indian Institute of Science and Indian Statistical Institute (Delhi Centre and Bangalore Centre) was a key driver in ensuring a stable and active incovid19.org. 
        <br />
        <p>
        While we had support from many stakeholders, we faced some challenges too, in terms of regular availability of data, changes in formats and timely publication. We are extremely proud of the team which managed all these challenges to deliver the portal updates daily. 
        </p>
        <p>
        incovid19.org in the last one year has seen over 330 K users with over 4 million views and an average engagement time of 4.5 minutes and an impressive returning users population! 
        </p>
        <p>
        Now, as the world moves on from Covid19 and most agencies are having a rethink about publishing data regularly and to the granular level, we feel it is time to bring this effort to a logical conclusion. 
        </p>
        <strong>
        Going forward, 
        </strong>
        <ul>
        <li>Daily updates (at the District level wherever available) to the portal will continue till 31st October 2022 </li>
        <li>We will not be collecting and collating district level information from states post 31st October 2022. </li>
        <li>From 1st November 2022, only automated updates from MOHFW and MyGov will be active. This will run with nil or minimal intervention. </li>
        <li>The datasets would continue to be available for research without any additional support. </li>
        <li>Our email contact@incovid19.org will remain active for a few months beyond October 2022, but responses may be delayed. </li>
        </ul>

        Thank you for being a partner in this journey. `,
        qno: 1,
        category: 'General',
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Notice</title>
        <meta
          name="title"
          content="Coronavirus Outbreak in India: Latest Map and Case Count"
        />
      </Helmet>

      <div className="About">
        {data.notice.map((notice, index) => {
          return (
            <div
              key={index}
              className="notice fadeInUp"
              style={{animationDelay: `${0.5 + index * 0.1}s`}}
            >
              <h2 className="question">{notice.question.trim()}</h2>
              <h2
                className="answer"
                dangerouslySetInnerHTML={{__html: notice.answer.trim()}}
              ></h2>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default Notice;
