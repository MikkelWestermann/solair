import React, { useState } from "react";
import { useThingSpeak } from "../../context/useThingSpeak";

const Setup = () => {
  const [thingSpeakConfig, setThingSpeakConfig] = useThingSpeak();

  const [apiKey, setApiKey] = useState(thingSpeakConfig.apiKey);
  const [channelId, setChannelId] = useState(thingSpeakConfig.channelId);

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl mb-4">Setup</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setThingSpeakConfig({
            apiKey,
            channelId,
          });
        }}

        className="flex flex-col w-full items-center"
      >
        <div className="flex mb-6">
          <div className="w-28">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="apiKey"
            >
              API Key
            </label>
          </div>
          <div className="w-48">
            <input
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="apiKey"
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="w-28">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="channelId"
            >
              Channel ID
            </label>
          </div>
          <div className="w-48">
            <input
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="channelId"
              type="text"
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
  );
};

export default Setup;
