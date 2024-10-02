import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer';
import MendZone from '../Mend.zone.png'; // Ensure the path is correct

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    lineHeight: 1.5,
  },
  logo: {
    width: 50,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  leftColumn: {
    width: '30%',
  },
  centerColumn: {
    width: '40%',
    textAlign: 'center',
  },
  rightColumn: {
    width: '30%',
    textAlign: 'right',
  },
  invoiceTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginBottom: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  paymentModeRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  paymentModeText: {
    fontSize: 10,
    marginBottom: 5,
  },
  table: {
    display: 'table',
    width: '100%',
    border: '1px solid black',
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '20%',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    padding: 5,
  },
  tableCol: {
    width: '20%',
    borderBottomWidth: 1,
    padding: 5,
  },
  tableLastCol: {
    width: '20%',
    padding: 5,
  },
tableColActualPrice: {
    boxSizing: 'border-box', // Corrected spelling and changed to 'border-box'
    // marginRight : 10 ,
    width: '20%',
    borderBottomWidth: 1,
    padding: 5,
    textAlign: 'right', // Align text to the end
},
tableColFinalPrice : {
    boxSizing: 'border-box', // Corrected spelling and changed to 'border-box'
    // marginRight : 10 ,
    width: '20%',
    // borderBottomWidth: 1,
    padding: 5,
    textAlign: 'right', // Align text to the end
},
  totalRow: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 10,
  },
  additionalCharges: {
    marginTop: 10,
    borderTopColor: '#000',
    paddingTop: 5,
  },
  footer: {
    marginTop: 30,
    fontSize: 8,
    color: 'grey',
  },
  detailsSectionWrapper: {
    marginTop: 20, // Add spacing between payment mode and the details section
    borderWidth: 1, // Common border around both sections
    borderColor: '#000', // Border color
    padding: 10,
  },
  detailsSection: {
    flexDirection: 'row', // Two columns in a row
    justifyContent: 'space-between',
  },
  transactionColumn: {
    width: '60%',
    paddingRight: 10, // Padding inside the left section
  },
  receiverColumn: {
    width: '40%',
    paddingLeft: 10, // Padding inside the right section
  },
  separatorLine: {
    borderLeftWidth: 1, // Vertical line between the two columns
    borderLeftColor: '#000', // Color of the vertical line
    height: 'auto',
    marginLeft: 10,
    marginRight: 10,
  },
  additionalChargesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distributes the columns evenly
  },
});

// Create the Invoice document component
function InvoiceDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          {/* Left: Logo */}
          <View style={styles.leftColumn}>
            <Image style={styles.logo} src={MendZone} />
          </View>

          {/* Center: Invoice and Order Details */}
          <View style={styles.centerColumn}>
            <Text style={styles.invoiceTitle}>Invoice</Text>
            <Text>Order Details</Text>
          </View>

          {/* Right: Receipt and Date */}
          <View style={styles.rightColumn}>
            <Text>Receipt No: CS-9-2024-2025</Text>
            <Text>Date: April 27, 2024</Text>
          </View>
        </View>

        {/* Payment Mode in Single Line */}
        <View style={styles.paymentModeRow}>
          <Text style={styles.paymentModeText}>Payment Mode: NETBANKING</Text>
        </View>

        {/* Common Border with Separator Line */}
        <View style={styles.detailsSectionWrapper}>
          <View style={styles.detailsSection}>
            {/* Transaction and Address Details (Left Column) */}
            <View style={styles.transactionColumn}>
              <Text style={styles.sectionTitle}>Transaction and Address Details</Text>
              <Text>Transaction No: PAYU17145807795573</Text>
              <Text>ADINID DIGITAL AUTOMATION PRIVATE LIMITED</Text>
              <Text>GST: 06AAXCA6152F1ZG</Text>
              <Text>PAN: AAXCA6152F</Text>
              <Text>C-510, VIPUL PLAZA, SECTOR-88, FARIDABAD, HARYANA-121002</Text>
            </View>

            {/* Separator Line */}
            <View style={styles.separatorLine} />

            {/* Details of Receiver (Right Column) */}
            <View style={styles.receiverColumn}>
              <Text style={styles.sectionTitle}>Details of Receiver</Text>
              <Text>Majid</Text>
              <Text>VENGARA, CENTRAL DELHI, DELHI, 110001</Text>
            </View>
          </View>
        </View>

        {/* Table for Services */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Healthcare Services</Text>
            <Text style={styles.tableColHeader}>Beneficiary Name</Text>
            <Text style={styles.tableColHeader}>MRP</Text>
            <Text style={styles.tableColHeader}>Discount</Text>
            <Text style={styles.tableColActualPrice}>Actual Price</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Aarogyam dual</Text>
            <Text style={styles.tableCol}>Majid</Text>
            <Text style={styles.tableCol}>1650</Text>
            <Text style={styles.tableCol}>0</Text>
            <Text style={styles.tableColActualPrice}>1650</Text> {/* Apply new style here */}
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Food intolerance profile</Text>
            <Text style={styles.tableCol}>Sifna</Text>
            <Text style={styles.tableCol}>10000</Text>
            <Text style={styles.tableCol}>0</Text>
            <Text style={styles.tableColActualPrice}>10000</Text> {/* Apply new style here */}
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Coupon Discount</Text>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableColActualPrice}>0</Text> {/* Apply new style here */}
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Wallet Money</Text>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableColActualPrice}>0</Text> {/* Apply new style here */}
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Eligibility Wallet</Text>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableColActualPrice}>0</Text> {/* Apply new style here */}
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Collection Charge</Text>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableCol}></Text>
            <Text style={styles.tableColActualPrice}>0</Text> {/* Apply new style here */}
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLastCol}>Total Amount</Text>
            <Text style={styles.tableLastCol}></Text>
            <Text style={styles.tableLastCol}></Text>
            <Text style={styles.tableLastCol}></Text>
            <Text style={styles.tableColFinalPrice}>11650</Text> {/* Apply new style here */}
          </View>
        </View>
        {/* Total Invoice Value */}
        <View style={styles.totalRow}>
          <Text>Total Invoice in value: Eleven thousand, six hundred fifty only</Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Feedback: <Link src="mailto:info@mend.zone">info@mend.zone</Link>{'\n'}
          Corporate Office: Adinid Digital Automation Private Limited, C-510, Vipul Plaza, Sector-81, Faridabad, Hariyana, 121002{'\n'}
          This is a computer-generated document. No signature is required.
        </Text>
      </Page>
    </Document>
  );
}
const Invoice = () => (
  <PDFDownloadLink document={<InvoiceDocument />} fileName="Invoice_12345.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : 'Download Invoice'
    }
  </PDFDownloadLink>
);
export default InvoiceDocument;
