import StyleSheet from "react-native-media-query";
import Colors from "../constants/Colors";

const { styles, ids } = StyleSheet.create(
{
  area:
  {
    backgroundColor: Colors.avermelhado,
    padding: 10,
  },
  texto:
  {
    fontFamily: "MartianMono",
    fontSize: "7vw",
    '@media (orientation: landscape)':
    {
      fontSize: "2vw"
    },
    textAlign: 'center'
  }
});

export { styles, ids };
