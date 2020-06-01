import React, { useState } from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const renderMenuItem = (item) =>
  <Menu.Item key={ item.key }>
    <NavLink to={ item.key + (item.query || '')} replace>
      { item.icon && <Icon type={ item.icon }/> }
      <span className="nav-text">{ item.title }</span>
    </NavLink>
  </Menu.Item>;


const renderSubMenu = (item) =>
  <Menu.SubMenu key={ item.key }
                title={
                  <span>
                    { item.icon && <Icon type={ item.icon }/> }
                    <span className="nav-text">{ item.title }</span>
                  </span>
                }
  >
    {
      item.subs && item.subs.map(subs => (
        subs.subs ? renderSubMenu(subs) : renderMenuItem(subs)
      ))
    }
  </Menu.SubMenu>;

const SiderMenu = ({ menus, ...props }) => {
  const [dragItems, setDragItems] = useState(menus);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if(!result.destination) {
      return;
    }

    const _items = reorder(
      dragItems,
      result.source.index,
      result.destination.index
    );
    setDragItems(_items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {
          (provided, snapshot) => {
            return (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {
                  dragItems.map((item, index) => (
                    <Draggable key={item.key} draggableId={item.key} index={index}>
                      {
                        (provided, snapshot) => (
                          <div>
                            <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                              <Menu {...props}>
                                { item.subs ? renderSubMenu(item) : renderMenuItem(item) }
                              </Menu>
                            </div>
                            { provided.placeholder }
                          </div>
                        )
                      }
                    </Draggable>
                  ))
                }
                { provided.placeholder }
              </div>
            );
          }
        }
      </Droppable>
    </DragDropContext>
  );
};

export default SiderMenu;
