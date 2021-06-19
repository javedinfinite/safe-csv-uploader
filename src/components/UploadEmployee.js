import React, { useState } from "react";
import CsvTable from "./CsvTable";
import CsvUploader from "./CsvUploader";
import CsvDownloader from "./CsvDownloader";

const UploadEmployees = () => {
  const [csvData, setCsvData] = useState([]);
  const getCsvData = (data) => {
    setCsvData(data);
  };

  console.log(csvData);

  return (
    <div className="App">
      <CsvUploader csv_data={getCsvData} />
      <CsvTable data={csvData} />
      <CsvDownloader />
    </div>
  );
};

export default UploadEmployees;
