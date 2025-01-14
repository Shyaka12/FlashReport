import PropTypes from "prop-types";
import { FiEdit, FiTrash } from "react-icons/fi";

const RecordList = ({ records, onDeleteRecord, onEditRecord }) => (
  <div className="mt-8">
    <h2 className="text-xl font-bold">Records</h2>
    {records.length === 0 ? (
      <p className="text-gray-500">No records available.</p>
    ) : (
      <ul className="space-y-4">
        {records.map((record) => (
          <li
            key={record.id}
            className="flex justify-between items-center p-4 border rounded-md bg-black"
          >
            <div>
              <h3 className="font-bold">{record.title}</h3>
              <p>{record.description}</p>
              <p className="text-sm text-gray-500">{record.type}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => onEditRecord(record.id)}
                className="text-blue-500"
              >
                <FiEdit />
              </button>
              <button
                onClick={() => onDeleteRecord(record.id)}
                className="text-red-500"
              >
                <FiTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

RecordList.propTypes = {
  records: PropTypes.array.isRequired,
  onDeleteRecord: PropTypes.func.isRequired,
  onEditRecord: PropTypes.func.isRequired,
};

export default RecordList;
