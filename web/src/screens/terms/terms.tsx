import React, { ReactElement, useState } from 'react';
import { Document, Page } from 'react-pdf';
import ResponsiveMenu from '../../components/menu/menu';
import './styles.scss'

const Terms: React.FC = ({ ...props }): ReactElement => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className='terms'>
      <ResponsiveMenu/>
      <Document file="reglamento.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Terms;