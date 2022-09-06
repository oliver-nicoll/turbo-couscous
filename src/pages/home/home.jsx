import React from 'react'
import FAQs from '../../components/FAQs'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import './home.css'

const home = () => {
  return (
    <>
    <MainHeader /> 
    <Programs />
    <Values />
    <FAQs/>
    </>
  )
}

export default home