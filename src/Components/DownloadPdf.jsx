import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import MyPage from './MyPage'

function DownloadPdf() {
  return (
    <>
    <PDFDownloadLink document={<MyPage />} fileName="MendZoneInvoice.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading Document...' : 'Download Now!'
      }
    </PDFDownloadLink>
    </>
  );
}

export default DownloadPdf