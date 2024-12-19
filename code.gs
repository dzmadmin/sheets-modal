function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Tools')
    .addItem('Show Row Details', 'showRowDetails')
    .addToUi();
}

function showRowDetails() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const range = sheet.getActiveRange();

  if (!range) {
    SpreadsheetApp.getUi().alert("Please select a row to display details.");
    return;
  }

  const rowNumber = range.getRow();
  const lastColumn = sheet.getLastColumn();

  if (rowNumber === 1) {
    SpreadsheetApp.getUi().alert("Headers cannot be displayed. Please select a data row.");
    return;
  }

  const rowData = sheet.getRange(rowNumber, 1, 1, lastColumn).getValues()[0];
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
//  let details = `<h2>Row Details</h2><ul>`;
  let details = ``;

  headers.forEach((header, index) => {
    details += `<li><strong>${header}:</strong> ${rowData[index] || '(empty)'}</li>`;
  });

  details += `</ul>`;

  // Create an HTML output for the modal dialog
  const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 10px;
          }
          #container {
            width: 80%; // Set to 80% of the dialog's width 
            margin: 0 auto;
            max-width: 1900px; // Optional: maximum width 
          }
        </style>
      </head>
      <body>
        <div id="container">${details}</div>
      </body>
    </html>
  `;

  const htmlOutput = HtmlService.createHtmlOutput(htmlContent)
    .setWidth(1200)  // Width in pixels for modal dialogs
    .setHeight(800); // Height in pixels for modal dialogs

  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Row Details');
}
