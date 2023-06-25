import { GlassBox, TopBar } from "../../../styles/StyledNavBar";
import NavList from "./NavList";

const MobileDrawer = () => {
  return (
    <GlassBox>
      {/* <TopBar className="pt-3"></TopBar> */}
      <NavList />
    </GlassBox>
  );
};

export default MobileDrawer;
