import { useState } from "react";
import RecordForm from "../components/RecordForm";
import RecordList from "../components/RecordList";

const RedFlags = () => {
  const [records, setRecords] = useState([]);

  const addRecord = (newRecord) => setRecords([...records, newRecord]);

  const deleteRecord = (id) =>
    setRecords(records.filter((record) => record.id !== id));

  return (
    <div className="p-8 bg-black-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Manage Red-Flags</h1>
      <RecordForm onAddRecord={addRecord} />
      <RecordList records={records} onDeleteRecord={deleteRecord} />
    </div>
  );
};

export default RedFlags;
