import React from 'react';
import Item from './Todo';

const TodoList = props => {
  console.log(props)
    return (
        <div className="shopping-list">
            {props.bananas.map(item => (
              <Item 
                key={item.id}
                item={item}
                toggleItem={props.toggleItem}
              />
            ))}
            
        </div>
    );
};

export default TodoList;