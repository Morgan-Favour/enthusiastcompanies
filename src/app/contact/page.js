import ContactUs from '@/components/ContactUs'
import React from 'react'

const Contact = () => {
  return (
    <div className='px-10 md:px-20 bg-gradient-to-b from-slate-900 to-slate-800'>
      <ContactUs themeColor='eh-primary' btnColor='eh-primary' textColor='eh-white' />
    </div>
  )
}

export default Contact