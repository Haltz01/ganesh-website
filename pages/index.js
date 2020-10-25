import React from 'react';

import '../locale/index_locale';
import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

import { withTranslation } from 'react-i18next';

function Home ({ t })  {

  //const { t, i18n } = useTranslation();

  return (
  <React.Fragment>
    <Head
      title='Ganesh - Home'
      description={t('description')}
    />
    <Navbar />
    <main>
      <div className='jumbotron bg-fixed bg-cover text-center text-white h-screen shadow-md bg-center'>
        <div className='container mx-auto flex flex-col items-center justify-center h-full p-4'>
          <img src='/static/images/logo.svg' className='w-48' alt='Ganesh logo' />
          <h2 className='text-2xl'>
            <p>{t('description')}</p>
          </h2>
        </div>
      </div>
      <section>
        <div className='container mx-auto flex flex-col items-center text-center py-4'>
          <h1 className='text-4xl font-bold py-8 md:py-16 px-4'>
            Extracurricular group
          </h1>
          <div className='flex flex-row flex-wrap justify-center pb-8 md:pb-16'>
            <div className='flex flex-column flex-wrap flex-auto w-full md:w-1/2 p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <p align="justify">
                  {t('mission')}
                </p>
                <button className='btn-primary w-full text-lg font-bold mt-4 md:mt-8'>
                <a href="/atividades">Activities</a>
                </button>
              </div>
            </div>
            <div className='flex flex-column flex-wrap flex-auto w-full md:w-1/2 p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <p align="justify">
                  {t('based')}
                </p>
                <button className='btn-primary w-full text-lg font-bold mt-4 md:mt-8'>
                  <a href="https://github.com/ganesh-icmc">Github</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .jumbotron {
          background-image: url(/static/images/bgfull.jpg);
        }
      `}</style>
    </main>
    <Footer
      title="Ganesh - Home"
      description='Extracurricular group focused on information security.'
    />
  </React.Fragment>
);

}

export default withTranslation()(Home);
