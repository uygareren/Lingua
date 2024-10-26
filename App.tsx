import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const App = () => {
  const [deviceId, setDeviceId] = useState<any>('');

  useEffect(() => {
    // Cihazın benzersiz ID'sini al
    const uniqueId = DeviceInfo.getUniqueId();
    setDeviceId(uniqueId);
  }, []);

  return (
    <View>
      <Text>Cihaz ID: {deviceId}</Text>
    </View>
  );
};

export default App;
