function createPDF() {
    var sTable = document.getElementById('dailyTableDiv').innerHTML;

    var style = "<style>";
    style = style + "table { display: none; width: 100%;font: 17px Calibri;font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; border-collapse: collapse; width: 80%; left: 70px;}";
    style = style + "table td, table th { border: 1px solid #ddd; padding: 8px; }";
    style = style + "table th {padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #4CAF50; color: white; }";
    style = style + "table input, table select{ border: transparent; font-size:1.123em; width: 10em; background: white;}";
    style = style + "select { -webkit-appearance: none; -moz-appearance: none; text-indent: 1px; text-overflow: ''; }";
    style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=2000,width=2000');

    win.document.write('<html><head>');
    win.document.write("<title style='color:red;'>MY DAILY TIMETABLE</title>");   // <title> FOR PDF HEADER.
    win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write('</p>Student Tool &copy; 2019</p>');
    win.document.write('</body></html>');

    win.document.close(); 	// CLOSE THE CURRENT WINDOW.

    win.print();    // PRINT THE CONTENTS.
}