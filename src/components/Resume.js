import React from 'react';
import Resumepdf from "./resumepdf/kylieresume22.pdf"

const styles = {
    card: {
      margin: 50,
      padding: 50,
      background: '#3e3e3e',
    },
    heading: {
      background: '#3e3e3e',
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
      <div id="resume" style={styles.card}>
        <div style={styles.heading}>For More Work Information, Navigate To My <a id="resumeLink" href={Resumepdf}> Resume!</a> 
        </div>
      </div>
    );
  }

export default Resume;