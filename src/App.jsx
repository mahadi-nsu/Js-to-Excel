import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TR } from "./locales";
import * as XLSX from "xlsx";

function App() {
  const downloadExcel = () => {
    const uniqueKeys = new Set();
    Object.values(TR).forEach((obj) => {
      Object.keys(obj).forEach((k) => uniqueKeys.add(k));
    });

    const locals = Object.keys(TR);
    const data = [["Unique Key", ...locals]];

    [...uniqueKeys].forEach((k) => {
      const sentences = [k];
      locals.forEach((l) => sentences.push(TR[l][k] || ""));
      data.push(sentences);
    });

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };

  return (
    <div className="App">
      <button onClick={downloadExcel}>Export to excel</button>
    </div>
  );
}

export default App;
