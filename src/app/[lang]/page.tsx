import React from 'react'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

//import {redirect} from 'next/navigation';
export default async function page({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  //redirect('/en');
  const dictionary = await getDictionary(lang);
    if (!dictionary) {
      return null;
    }
  const { page } = dictionary;

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{page.main.title}</h1>
        <p className='text-gray-500'>{page.main.description}</p>
      </div>
    </section>
  )

}

