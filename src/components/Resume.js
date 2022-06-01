import React from 'react';
import Resumepdf from "./resumepdf/kylieresume22.pdf"

const styles = {
    card: {
      margin: 50,
      padding: 50,
      background: '#d5a2d3',
    },
    heading: {
      background: '#d5a2d3',
      minHeight: 50,
      lineHeight: 3.5,
      color: 'white',
      padding: '0 20px',
      textAlign: "center",
      FontWeight: "bold",
      fontSize: "xx-large",
    },
  };

function Resume() {
    return (
      <div style={styles.card}>
        <div style={styles.heading}>For More Work Information, Navigate To My <a id="resumeLink" href={Resumepdf}> Resume!</a> 
        </div>
      </div>
    );
  }

export default Resume;