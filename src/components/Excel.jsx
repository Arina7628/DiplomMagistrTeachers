import React, { useState } from "react"

const XLSX = require('xlsx');


export function Excel() {
        const [items, setItems] = useState([]);
        /*var workbook = XLSX.readFile("D:\teachinf.xlsx");*/
         const Excel = (file) => {
          const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
      
            fileReader.onload = (e) => {
              const bufferArray = e.target.result;
      
              const wb = XLSX.read(bufferArray, { type: "buffer" });
      
              const wsname = wb.SheetNames[0];
      
              const ws = wb.Sheets[wsname];
      
              const data = XLSX.utils.sheet_to_json(ws);
      
              resolve(data);
            };
      
            fileReader.onerror = (error) => {
              reject(error);
            };
          });
      
          promise.then((d) => {
            setItems(d);
          });
        };
      
        return (
          <div>
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                Excel(file);
              }}
            />
      
            <table class="table container">
              <thead>
                <tr>
                  <th scope="col">ФИО</th>
                  <th scope="col">Предмет</th>
                  <th scope="col">Квалификационная_категория</th>
                  <th scope="col">Внутренний_рейтинг</th>
                  <th scope="col">ФИО_детей</th>
                  <th scope="col">ЕГЭ</th>
                  <th scope="col">Год_сдачи</th>
                </tr>
              </thead>
              <tbody>
                {items.map((d) => (
                  <tr key={d.ФИО}>
                    <td>{d.ФИО}</td>
                    <td>{d.Предмет}</td>
                    <td>{d.Квалификационная_категория}</td>
                    <td>{d.Внутренний_рейтинг}</td>
                    <td>{d.ФИО_детей}</td>
                    <td>{d.ЕГЭ}</td>
                    <td>{d.Год_сдачи}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      
      export default Excel;
