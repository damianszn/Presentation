import React from "react";

import { Reveal, Image } from "semantic-ui-react";

class Display extends React.Component {
  render() {
    return (
      <Reveal animated="move right">
        <Reveal.Content visible>
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            size="small"
          />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src="profile.jpg" size="small" />
        </Reveal.Content>
      </Reveal>
    );
  }
}

export default Display;
