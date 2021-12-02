import Footer from './Footer';

// import {API_DOMAIN} from '../constants';
// import {fetcher} from '../utils/commonFunctions';
import {useEffect} from 'react';
import {Helmet} from 'react-helmet';

// import useSWR from 'swr';

function About() {
  const data = {
    faq: [
      {
        answer:
          'We would like to acknowledge the contribution of the <a href="https://covid19india.org" target="_blank">covid19india.org</a> team of volunteers for their tireless efforts in creating and maintaining the site from the start of the pandemic and also in making their codebase open source and available for use by all.\nThis website <a href="www.incovid19.org" target="_blank">www.incovid19.org</a> is largely built on top of the open-source codebase of <a href="https://covid19india.org" target="_blank">covid19india.org</a>',
        category: 'General',
        qno: '1',
        question: 'Acknowledgements',
      },
      {
        answer:
          '<a href="https://www.covid19india.org" target="_blank">www.covid19india.org</a>  offered a comprehensive view of the COVID-19 pandemic across India by providing data on confirmed, active and recovered cases, tests and fatalities. The organisers  recently announced that they would stop updating their website and APIs after 31st October 2021. \n \n This new initiative - inCovid19 - will continue the efforts of Covid19India volunteers beyond 31st October 2021 and will make the data available at <a href="https://www.incovid19.org" target="_blank">www.incovid19.org</a> using similar data APIs.',
        category: 'General',
        qno: '2',
        question: 'About the Initiative',
      },
      {
        answer:
          'inCovid19 is a collaborative initiative involving the <a href="https://www.iitm.ac.in" target="_blank">Indian Institute of Technology Madras</a>,the <a href="https://cni.iisc.ac.in/" target="_blank">Centre for Networked Intelligence</a> at the <a href="https://iisc.ac.in/" target="_blank">Indian Institute of Science (IISc)</a>, the <a href="https://www.isical.ac.in/" target="_blank">Indian Statistical Institute (ISI)</a> and <a href="http://www.semanticwebindia.com/index.html#extHeader5-6i" target="_blank">Semantic Web India</a>, a private technology firm based in Bangalore.',
        category: 'General',
        qno: '3',
        question: 'Who are the collaborators for this initiative?',
      },
      {
        answer:
          'The main objective of inCovid19 is to maintain the data availability post October 31 2021, using similar API endpoints as data.covid19india.org. This will ensure that downstream applications designed using these APIs can continue to function with minimal disruption using the data APIs at <a href="https://data.incovid19.org" target="_blank">data.incovid19.org</a>. <br> This initiative also plans to harness the available historical data to present valuable insights and added functionality for enhanced search and analysis.',
        category: 'General',
        qno: '4',
        question: 'What are the objectives of this initiative?',
      },
      {
        answer:
          'While statewise numbers are made available centrally and regularly updated by MOHFW, district-wise numbers are published by different states in different venues and formats, with differing levels of granularity. Collecting and collating data from these diverse sources is the primary challenge we face. \n <br> The granularity of the data provided by <a href="https://www.covid19india.org" target="_blank">www.covid19india.org</a> extended to the district level for most States. The Covid19India team accomplished this through a team of volunteers who diligently collated, validated and published the data using a combination of processes. The inCovid19 initiative uses a largely automated process that relies on the published numbers on state government portals and official sources. Though the workflow is not a replica of the process used by the Covid19India team, we hope to continuously update the data to reflect as accurate and granular data as possible, using data published on state government and other official portals.',
        category: 'General',
        qno: '5',
        question:
          'Will data availability exactly match the Covid19India efforts ?',
      },
      {
        answer:
          'We do expect teething challenges in the initial phase when we get this running. If you spot any bugs or data errors, please send an email to <a href="mailto:contact@incovid19.org">contact@incovid19.org</a>. <br> Specifically for data transcription errors, the most likely reason is that a source file has not been transcribed properly into text. In such cases, it would be very helpful if you can identify the specific source',
        category: 'General',
        qno: '6',
        question: 'How should I report a bug / error I have found?',
      },
      {
        answer:
          'Permission is hereby granted to use the contents of this portal without restriction, including without limitation the rights to use, copy, modify, merge, publish, and/or distribute.',
        category: 'General',
        qno: '7',
        question: 'License',
      },
      {
        answer:
          'THE CONTENTS OF THIS PORTAL, INCLUDING DATA, MAPS, AND PLOTS, ARE PROVIDED "AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. THE AUTHORS OF THE PORTAL ASSUME NO RESPONSIBILITY OR LIABILITY FOR ANY ERRORS OR OMISSIONS IN THE CONTENT OF THIS SITE/PORTAL. IN NO EVENT SHALL THE AUTHORS OF THE PORTAL BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE PORTAL OR THE USE OR OTHER DEALINGS WITH THE PORTAL. THIS PORTAL INCORPORATES DATA OR OTHER CONTENT BELONGING TO OR ORIGINATING FROM THIRD PARTIES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY THIRD-PARTY INFORMATION.',
        category: 'General',
        qno: '8',
        question: 'Disclaimer',
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About - incovid19.org</title>
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

export default About;
