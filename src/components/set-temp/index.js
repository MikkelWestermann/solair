import React, { useState } from 'react'
import { useThingSpeak } from '../../context/useThingSpeak'
import { toast } from 'react-toastify';

const SetTemp = () => {

  const [thingSpeakConfig] = useThingSpeak();

  const [desiredTemperature, setDesiredTemperature] = useState(20);

  const fetchDesiredTemp = async () => {
    // TODO: fetch current desired temp from ThingSpeak

    return 20
  }

  const setDesiredTemp = async (temp) => {
    // Post command to TalkBack to set desired temp
    const res = await fetch(`https://api.thingspeak.com/talkbacks/${thingSpeakConfig.talkBackId}/commands.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        command_string: `SET_TEMP_${temp}`,
        api_key: thingSpeakConfig.apiKey
      })
    });

    if (res.ok) {
      toast.success(`Set desired temp to ${temp}°C`);
    } else {
      toast.error(`Failed to set desired temp to ${temp}°C`);
    }
  }


  return (
    <div>
      <h3 className="text-xl mb-4 font-bold text-center">Set Desired Temperature</h3>

      <form onSubmit={(e) => {
        e.preventDefault();
        
        setDesiredTemp(desiredTemperature);
      }}
      className="flex flex-col items-center space-y-8"
      >

      <div className='flex justify-center'>
        <div>
            <label
              className="block text-gray-500 font-bold md:text-right mt-2 mb-1 md:mb-0 pr-4 "
              for="apiKey"
            >
              Desired Temperature
            </label>
          </div>
          <div className="w-28">
            <input
              value={desiredTemperature}
              onChange={(e) => setDesiredTemperature(e.target.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="apiKey"
              type="number"
            />
          </div>
        </div>

        <button
          type="submit"
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          Apply
        </button>
      </form>

    </div>
  )
}

export default SetTemp