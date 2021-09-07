import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, pdf } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
      color: '#000000'
    },
    section: {
      margin: 0,
      padding: 0,
      flexGrow: 1
    }
  });
  
  // Create Document Component
  const PrintHeader = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
  const PrintHeader2 = () => (
    <div>
      <PDFDownloadLink document={<PrintHeader />} fileName="Header.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )

  export default PrintHeader2;