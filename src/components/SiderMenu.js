import React from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";

const renderMenuItem = ({ key, title, icon, link, ...props }) => {
  return (
    <Menu.Item key={ key || link } { ...props }>
      <NavLink to={ key || link }>
        { icon && <Icon type={ icon }/> }
        <span className="nav-text">{ title }</span>
      </NavLink>
    </Menu.Item>
  );
}
const renderSubMenu = ({ key, title, icon, link, subs, ...props }) => {
  return (
    <Menu.SubMenu key={ key || link }
                  title={
                    <span>
                          { icon && <Icon type={icon}/> }
                      <span className="nav-text">{ title }</span>
                        </span>
                  }
                  { ...props }
    >
      { subs && subs.map(item => renderMenuItem(item)) }
    </Menu.SubMenu>
  );
};

const SiderMenu = ({ menus, ...props }) => {
  return (
    <Menu { ...props }>
      {
        menus && menus.map(item => {
          return (
            item.subs && item.subs.length ? renderSubMenu(item) : renderMenuItem(item)
          );
        })
      }
    </Menu>
  );
};

export default SiderMenu;
