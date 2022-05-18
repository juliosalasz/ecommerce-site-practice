import { FC } from "react";

import { useNavigate } from "react-router";

import { DirectoryCategory } from "../directory/Directory";

import {
  MenuItem,
  Content,
  Title,
  Subtitle,
  BackgroundImage,
} from "./menuItemStyles";

type MenuItemProps = {
  category: DirectoryCategory;
};

const MenuItems: FC<MenuItemProps> = ({ category }) => {
  const { title, imageUrl, size, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <MenuItem size={size} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </MenuItem>
  );
};

export default MenuItems;
