import Footer from './Footer';

// import {API_DOMAIN} from '../constants';
// import {fetcher} from '../utils/commonFunctions';
import {useEffect} from 'react';
import {Helmet} from 'react-helmet';

// import useSWR from 'swr';

function Faq() {
  const data = {
    faq: [
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
      {
        question: 'Why are there discrepancies with the data on the portal?',
        answer: `As explained earlier, our data sources for covid19 data at the national level are <a href="https://www.mygov.in">https://www.mygov.in/covid-19</a> and the respective state government portals. 
        <br />
        As on March 2022, only 14 states regularly provide district level covid 19 data. The rest of the 22 states either 
        <ul>
        <li>Do not provide district level updates</li>
        <li>Delay updates ranging from a few days to weeks</li>
        <li>Provide partial data</li>
        </ul>
        When district wise data is not received on a certain date, the daily values are calculated from the last available date, causing discrepancy with state-wise daily totals. We are following up with the respective state governments wherever possible to get the reported values for the missing dates.
        <p>
        On certain other occasions, the deceased data or the recovered data gets reconciled creating a huge spike in daily deceased numbers. Please check <a href="https://news.abplive.com/health/coronavirus-in-india-4-100-fatalities-reported-as-states-reconcile-death-toll-check-fresh-infections-1521783">this latest news article</a> on the revised death totals for Maharashtra and Kerala
        </p>
        There have been a few critical comments regarding the portal updates in the last few days, we hope the above clarifications provide some sense of the data irregularities that the team is dealing with. We are putting in our best efforts to keep the portal current matching the schedules of the updates received from various state government portals. We are also committed towards promptly addressing your feedback regarding any data inconsistencies observed on the portal.`,
        qno: '2',
        category: 'General',
      },
      {
        answer:
          'We took over the project of continuing Covid19India.org in the last week of October 2021. We have stabilized on the following strategy for updating the portal after trying out multiple options. Our data sources for covid19 data at the national level is <a href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</a> and the respective state government portals for the state and district level covid19 data. Currently about 19 states regularly provide district level covid 19 data. The rest of the 17 states either do not provide district level updates or updates are received on their portals in a delayed schedule ranging from a few days to a week. We are putting in our best efforts to keep the portal current matching the schedules of the state level updates as and when we receive them (even if it is delayed).<br/>The portal reflects covid19 updates as of previous day – exactly similar to what is received nationally at <a href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</a> and the respective state government portals. There are many instances where the covid19 data at the national level at <a href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</a> reflects a different number for the state than what is received from the state government portal as district level updates.<br/>We have synchronized our portal updates daily post receiving the national level covid 19 updates on <a href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</a>. Hence, our portal updates will be reflected largely by 12:00 noon daily unless there has been a technical glitch in consolidating individual updates from the state government portals.',
        category: 'General',
        qno: '3',
        question: 'What is the process for the daily updates to the portal?',
      },
      {
        answer:
          'We receive updates at the source – national level (<a href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</a>) and the respective state government portals once daily for most of the states.  Some states update their portal once in a few days.<br/>We update the portal once a day post receiving the national level update at <a href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</a>. On some days, you will see discrepancy in district level updates for certain states vis-à-vis updates at the state level. This is because the respective district level updates have not been received from the state government portals.',
        category: 'General',
        qno: '4',
        question: 'What is the frequency of updates to the portal?',
      },
      {
        answer:
          'Our list of sources for covid19 data at national, state and district level data can be found <a href="https://data.incovid19.org" target="_blank">here</a>. Please do reach out to us, if you can augment our current sources for a better representation of covid19 data at the state/district level.',
        category: 'General',
        qno: '5',
        question: 'What is the source of covid19 data for the portal?',
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>FAQ</title>
        <meta
          name="title"
          content="Coronavirus Outbreak in India: Latest Map and Case Count"
        />
      </Helmet>

      <div className="About">
        {data.faq.map((faq, index) => {
          return (
            <div
              key={index}
              className="faq fadeInUp"
              style={{animationDelay: `${0.5 + index * 0.1}s`}}
            >
              <h2 className="question">{faq.question.trim()}</h2>
              <h2
                className="answer"
                dangerouslySetInnerHTML={{__html: faq.answer.trim()}}
              ></h2>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default Faq;
