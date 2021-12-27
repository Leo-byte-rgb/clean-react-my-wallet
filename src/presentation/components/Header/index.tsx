import React from "react";

import { HeaderUI, User } from "./style";

const Header = () => (
  <HeaderUI>
    <div></div>
    <User>
      <h2>LC</h2>
    </User>
  </HeaderUI>
);

export default React.memo(Header);
