import React from "react";
import { useThingSpeak } from "../../context/useThingSpeak";
import { toast } from "react-toastify";

const Override = () => {
  const [thingSpeakConfig] = useThingSpeak();

  const override = async () => {
    // Write OVERWRITE command to TalkBack
    const res = await fetch(
      `https://api.thingspeak.com/talkbacks/${thingSpeakConfig.talkBackId}/commands.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          command_string: `OVERWRITE`,
          api_key: thingSpeakConfig.apiKey,
        }),
      }
    );

    if (res.ok) {
      toast.success(`Overwritten`);
    } else {
      toast.error(`Failed to overwrite`);
    }
  };

  return (
    <div>
      <h3 className="text-xl mb-4 font-bold text-center">Override</h3>

      <div className="flex flex-col items-center space-y-8">
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={override}
        >
          Override
        </button>
      </div>
    </div>
  );
};

export default Override;
