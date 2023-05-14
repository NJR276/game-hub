import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usPlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platform
          <MenuList>
            {data.map((platform) => (
              <MenuItem key={platform.id}>{platform.slug}</MenuItem>
            ))}
          </MenuList>
        </MenuButton>
      </Menu>
    </>
  );
};

export default PlatformSelector;
