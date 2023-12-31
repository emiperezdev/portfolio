import { Grid } from "@chakra-ui/react";
import { ColorModeIcon } from "./components/ColorModeIcon";
import { Media } from "./components/Media";

function App() {
  return (
    <Grid maxWidth="735px" margin="0 auto" position='relative'>
      {/* <Practice /> */}
      <ColorModeIcon />
      <Media />
    </Grid>
  );
}

export default App;
