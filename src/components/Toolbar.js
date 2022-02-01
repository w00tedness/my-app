// An intermediate component that uses the ThemedButton
import ThemedButton from "./themed-button";

export function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}