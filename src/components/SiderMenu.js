import React from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";

const renderMenuItem = (item) => {
  return (
    <Menu.Item key={ item.key}>
      <NavLink to={ item.key} replace>
        { item.icon && <Icon type={ item.icon }/> }
        <span className="nav-text">{ item.title }</span>
      </NavLink>
    </Menu.Item>
  );
};

const renderSubMenu = (item) => {
  return (
    <Menu.SubMenu key={ item.key }
                  title={
                    <span>
                          { item.icon && <Icon type={ item.icon }/> }
                      <span className="nav-text">{ item.title }</span>
                        </span>
                  }
    >
      { item.subs && item.subs.map(item => renderMenuItem(item)) }
    </Menu.SubMenu>
  );
};

const SiderMenu = ({ menus, ...props }) => {
  return (
    <Menu { ...props }>
      {
        menus && menus.map(item => {
          return (
            item.subs ? renderSubMenu(item) : renderMenuItem(item)
          );
        })
      }
    </Menu>
  );
};

export default SiderMenu;
