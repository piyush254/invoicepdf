import React from 'react'
import MyPage from './Components/MyPage'
import { PDFViewer } from '@react-pdf/renderer'
import DownloadPdf from './Components/DownloadPdf'
import './Components/Pdf.css'
function App() {
  return (
    <>
    {/* <PDFViewer style={{width : "100vw" , height : "97vh"}}>
      <MyPage />
    </PDFViewer> */}
    <div className='Wrapper'>
      <DownloadPdf />
    </div>
    </>
  )
}

export default App