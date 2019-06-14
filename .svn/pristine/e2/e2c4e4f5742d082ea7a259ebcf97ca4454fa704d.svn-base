import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import PdfData from './PdfData';
import { pdfjs } from 'react-pdf';

class PdfDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            numPages: 0,
            pageNumber: 1,
            selectedIndex: 0,
          }
          this.onClickPDFSwitch = this.onClickPDFSwitch.bind(this);

    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
    
    onClickPDFSwitch= () => {
        console.log(PdfData.length);

        this.setState( ({
          selectedIndex: (this.state.selectedIndex + 1) % PdfData.length,
        }))
    } 

    render() {
        const {numPages,selectedIndex } = this.state;
        
        const divStyle = {
            position: 'absolute',
            overflow: 'auto',
            width: '100%',
            height: '100%'
          };
      const items = []
      
      for (var j = 1; j <= numPages; j++) {
        items.push(j );
      }
        return (

            <div style={divStyle}>
            <button onClick={this.onClickPDFSwitch}>Switch Data Next</button>
            
            <Document file={"data:application/pdf;base64,"+PdfData[selectedIndex]} onLoadSuccess={this.onDocumentLoadSuccess} >
              {items.map(page => (
                <Page pageNumber={page} />
              ))}

            </Document>
            
           </div>
        );
    }
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default PdfDisplay;