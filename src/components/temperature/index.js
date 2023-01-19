import React, { useEffect, useState } from 'react'
import { useThingSpeak } from '../../context/useThingSpeak'

const Temperature = () => {

  const [thingSpeakConfig] = useThingSpeak();

  const [indoorTemp, setIndoorTemp] = useState(null);
  const [outdoorTemp, setOutdoorTemp] = useState(null);
  const [lightIntensity, setLightIntensity] = useState(null);

  useEffect(() => {
    const fetchIndoorTemp = async () => {
      const res = await fetch(`https://api.thingspeak.com/channels/${thingSpeakConfig.channelId}/fields/4.json?api_key=${thingSpeakConfig.apiKey}&results=1`);
      const data = await res.json();
      setIndoorTemp(data.feeds[0].field4);
    }
  
    const fetchOutdoorTemp = async () => {
      const res = await fetch(`https://api.thingspeak.com/channels/${thingSpeakConfig.channelId}/fields/7.json?api_key=${thingSpeakConfig.apiKey}&results=1`);
      const data = await res.json();
      setOutdoorTemp(data.feeds[0].field7);
    }

    const fetchLightIntensity = async () => {
      const res = await fetch(`https://api.thingspeak.com/channels/${thingSpeakConfig.channelId}/fields/1.json?api_key=${thingSpeakConfig.apiKey}&results=1`);
      const data = await res.json();
      setLightIntensity(data.feeds[0].field1);
    }

    fetchIndoorTemp();
    fetchOutdoorTemp();
    fetchLightIntensity();

    const interval = setInterval(() => {
      fetchIndoorTemp();
      fetchOutdoorTemp();
      fetchLightIntensity();
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [thingSpeakConfig]);

  return (
    <div className="flex flex-col items-center space-y-8">

      <div className="flex flex-col items-center space-y-2">

        <h3 className="text-xl mb-4 font-bold">Temperature</h3>

        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center">
            <h4 className="text-lg mb-2">Indoor</h4>
            <p className="text-4xl">{Math.round(indoorTemp * 10) / 10}°C</p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg mb-2">Outdoor</h4>
            <p className="text-4xl">{Math.round(outdoorTemp * 10) / 10}°C</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h4 className="text-lg mb-2">Difference</h4>
              <p className="text-4xl">{Math.round((indoorTemp - outdoorTemp) * 10) / 10}°C</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <h3 className="text-xl mb-4 font-bold">Light</h3>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h4 className="text-lg mb-2">Light Intensity</h4>
              <p className="text-4xl">{Math.round(lightIntensity * 10) / 10}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Temperature