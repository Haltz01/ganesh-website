import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

import "../locale/locale"
import { Trans, withTranslation } from 'react-i18next';

const Fronts = ({t}) => (
  <React.Fragment>
    <Head
      title="Ganesh - Areas"
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
    <div className='flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md'>
        <h1 className='text-4xl text-center text-white'><Trans i18nKey="areas:title">Areas</Trans></h1>
      </div>
      <div className='container mx-auto px-4 py-4'>
        <ul className='flex flex-row flex-wrap my-4'>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col p-4'>
            <div className='flex-auto rounded shadow-md bg-white'>
              <div className='border-gray-700 border-4 rounded-t h-64 cryptography' />
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'><b>{t('areas:tcripto')}</b></span>
                <span className='text-gray-800 text-base'>{t('areas:cripto')}</span>
              </div>
            </div>
          </li>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col p-4'>
            <div className='flex-auto rounded shadow-md bg-white'>
              <div className='border-gray-700 border-4 rounded-t h-64 networking' />
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'><b>{t('areas:tnetwork')}</b></span>
                  <span className='text-gray-800 text-base'>{t('areas:network')}</span>
              </div>
            </div>
          </li>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col p-4'>
            <div className='flex-auto rounded shadow-md bg-white'>
              <div className='border-gray-700 border-4 rounded-t h-64 reversing'/>
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'><b>{t('areas:trev')}</b></span>
                <span className='text-gray-800 text-base'>
                  {t('areas:rev')}
                </span>
              </div>
            </div>
          </li>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col p-4'>
            <div className='flex-auto rounded shadow-md bg-white'>
              <div className='border-gray-700 border-4 rounded-t h-64 web' />
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'><b>{t('areas:tweb')}</b></span>
                <span className='text-gray-800 text-base'>
                  {t('areas:web')}
                </span>
              </div>
            </div>
          </li>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col p-4'>
            <div className='flex-auto rounded shadow-md bg-white'>
              <div className='border-gray-700 border-4 rounded-t h-64 hardware' />
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'><b>{t('areas:thardware')}</b></span>
                <span className='text-gray-800 text-base'>
                  {t('areas:hardware')}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .container-top {
          background-image: url(/static/images/bgfull.jpg);
          height: 250px;
        }
        .reversing {
          background-image: url(/static/images/rev.jpg);
        }
        .networking {
          background-image: url(/static/images/networking.jpg);
        }
        .cryptography {
          background-image: url(/static/images/cripto.jpg);
        }
        .web {
          background-image: url(/static/images/web.png);
        }
        .hardware {
          background-image: url(/static/images/hardware.jpg);
        }
      `}</style>
    </main>
    <Footer />
  </React.Fragment>
);

export default withTranslation()(Fronts);
