import { Grid } from "@chakra-ui/react";
import { ColorModeIcon } from "./components/ColorModeIcon";
import { Media } from "./components/Media";
import { Border } from "./components/Border";

function App() {
  return (
    <Grid maxWidth="735px" margin="0 auto" position='relative'>
      <ColorModeIcon />
      <Media />
      <Border />
    </Grid>
  );
}

export default App;
