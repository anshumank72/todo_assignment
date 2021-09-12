import React from 'react';

const ListItem = (props) => {
    return (
        <div>
            {props.listItem.map((item) => {
                return (
                    <h1>{item}</h1>
                )
            })}
        </div>
    )
}
export default ListItem;