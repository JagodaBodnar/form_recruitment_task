import { useContext } from "react";
import { GiChiliPepper } from "react-icons/gi";
import { StyledIconFill, StyledSpicines } from "./SoupStyles";
import RootContext from "../context/context";

const SoupSubForm = () => {
  const context = useContext(RootContext);

  const { spiciness, handleSpicinessChange } = context;

  return (
    <>
      <StyledSpicines
        name="spiciness_scale"
        value={spiciness ? spiciness : 0}
        defaultValue={1}
        precision={1}
        max={10}
        icon={<StyledIconFill />}
        emptyIcon={<GiChiliPepper />}
        onChange={handleSpicinessChange}
      />
    </>
  );
};
export default SoupSubForm;
