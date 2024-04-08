import React, {useState} from 'react'
import { DateRange } from 'react-date-range';//Used for picking up a range of date
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 




function Section3() {

    const [state, setState] = useState([
        {
          startDate: null,
          endDate: null,
          key: 'selection',
        },
      ]);
    
      const [showPicker, setShowPicker] = useState(false);

      function handleSelect(ranges) {
        const { selection } = ranges;
        setState([selection]);
      }
    
      const displayValue = state[0].startDate && state[0].endDate
        ? `${format(state[0].startDate, 'MM/dd/yyyy')} to ${format(state[0].endDate, 'MM/dd/yyyy')}`
        : 'Select Date Range';

  return (
    <div className='lg:w-3/4 space-y-6 w-4/5'>
      <div className='font-bold'>Delete information within a period of time</div>
      <div className=''>Choose a data range to delete all information from scheduled events within that period of time.</div>
      <div className="container w-96">
      <div className="flex justify-start space-x-4">
        <span className="flex-grow flex py-1">
        <input
            readOnly
            className="flex-grow text-sm outline-none w-48 lg:w-72 h-10 border-2 border-gray-300"
            value={displayValue}
            onFocus={() => setShowPicker(true)}
            placeholder='Select Date Range' 
          />
          {showPicker && (
            <DateRange
              editableDateInputs={true}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className="absolute z-10"
            />
          )}
        </span>
        <button
          className="bg-red-600 w-20 h-10 font-semibold text-white rounded-full px-4 py-2 text-sm shadow-lg focus:outline-none"
          onClick={() => console.log('Delete with range: ', state)}
        >
          Delete
        </button>
      </div>
      {showPicker && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setShowPicker(false)}
        ></div>
      )}
    </div>
    <hr />
    </div>
  )
}

export default Section3
