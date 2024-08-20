import { StyleSheet, View, Text, Image, TextInput, Switch } from "react-native";
import ProfileBox from "../../components/settings/ProfileBox";
import ReminderHeader from "../../components/settings/ReminderHeader";
import { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
const SettingsScreen: React.FC = () => {
  const [time, setTime] = useState({ hour: "12", minute: "00" });
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const hoursHandler = (e) => {
    setTime((prev) => ({ hour: e, minute: prev.minute }));
  };
  const minutesHandler = (e) => {
    setTime((prev) => ({ hour: prev.hour, minute: e }));
  };
  useEffect(() => {
    if (isEnabled) {
      const scheduleNotificationHandler = () => {
        Notifications.scheduleNotificationAsync({
          content: { title: "Study Time!", body: "Just, 15 minutes!" },
          trigger: {
            hour: Number(time.hour),
            minute: Number(time.minute),
            repeats: true,
          },
        });
      };
      scheduleNotificationHandler();
    }
  }, [isEnabled]);

  return (
    <View style={styles.container}>
      <ProfileBox />
      <View style={styles.settingsBox}>
        <ReminderHeader />
        <View style={styles.notificationsBox}>
          <Text style={styles.text}>Repeat everyday at:</Text>
          <View style={styles.timeBox}>
            <Image
              source={require("../../assets/icons/clock.png")}
              width={24}
              height={24}
            />
            <TextInput
              keyboardType="numeric"
              value={time.hour}
              onChangeText={(e) => hoursHandler(e)}
              maxLength={2}
            />
            <Text style={styles.text}>:</Text>
            <TextInput
              keyboardType="numeric"
              value={time.minute}
              onChangeText={(e) => minutesHandler(e)}
              maxLength={2}
            />
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "rgba(43, 45, 66, 1)" }}
            thumbColor={isEnabled ? "white" : "rgba(43, 45, 66, 1)"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.reminderText}>
          You will receive friendly reminder to remember to study
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsBox: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  notificationsBox: {
    marginVertical: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "Poppins-medium",
    fontWeight: "400",
    fontSize: 12,
  },
  timeBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  reminderText: {
    fontFamily: "Poppins-medium",
    fontWeight: "700",
    fontSize: 10,
  },
});
export default SettingsScreen;
