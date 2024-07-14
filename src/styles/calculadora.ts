import { StyleSheet } from "react-native";

const estiloCalculadora = StyleSheet.create(
{
  corpo:
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 256,
  },
  imagem:
  {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});

export { estiloCalculadora };
