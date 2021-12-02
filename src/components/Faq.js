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
        answer:
          'We took over the project of continuing Covid19India.org in the last week of October 2021. We have stabilized on the following strategy for updating the portal after trying out multiple options. Our data sources for covid19 data at the national level is <a href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</a> and the respective state government portals for the state and district level covid19 data. Currently about 19 states regularly provide district level covid 19 data. The rest of the 17 states either do not provide district level updates or updates are received on their portals in a delayed schedule ranging from a few days to a week. We are putting in our best efforts to keep the portal current matching the schedules of the state level updates as and when we receive them (even if it is delayed).<br/>The portal reflects covid19 updates as of previous day – exactly similar to what is received nationally at <a href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</a> and the respective state government portals. There are many instances where the covid19 data at the national level at <a href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</a> reflects a different number for the state than what is received from the state government portal as district level updates.<br/>We have synchronized our portal updates daily post receiving the national level covid 19 updates on <a href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</a>. Hence, our portal updates will be reflected largely by 12:00 noon daily unless there has been a technical glitch in consolidating individual updates from the state government portals.',
        category: 'General',
        qno: '1',
        question: 'What is the process for the daily updates to the portal?',
      },
      {
        answer:
          'We receive updates at the source – national level (<a href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</a>) and the respective state government portals once daily for most of the states.  Some states update their portal once in a few days.<br/>We update the portal once a day post receiving the national level update at <a href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</a>. On some days, you will see discrepancy in district level updates for certain states vis-à-vis updates at the state level. This is because the respective district level updates have not been received from the state government portals.',
        category: 'General',
        qno: '2',
        question: 'What is the frequency of updates to the portal?',
      },
      {
        answer:
          'Our list of sources for covid19 data at national, state and district level data can be found <a href="https://data.incovid19.org" target="_blank">here</a>. Please do reach out to us, if you can augment our current sources for a better representation of covid19 data at the state/district level.',
        category: 'General',
        qno: '3',
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
