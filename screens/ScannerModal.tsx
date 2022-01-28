import {
  BarCodeScannedCallback,
  BarCodeScanner,
  PermissionStatus,
} from 'expo-barcode-scanner';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { container } from '../styles/container';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export const ScannerModal = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={container.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Pressable onPress={() => setScanned(false)}>
          <Text>Tap to Scan again</Text>
        </Pressable>
      )}
    </View>
  );
};
