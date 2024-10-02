import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import MyPage from './MyPage'
import './Pdf.css'
function DownloadPdf() {
  return (
    <>
    <PDFDownloadLink document={<MyPage />} fileName="MendZoneInvoice.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading Document...' :<button className='btn btn-primary'>
        Download Now!
        </button> 
      }
    </PDFDownloadLink>
    </>
  );
}

export default DownloadPdf