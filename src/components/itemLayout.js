import React from 'react';


const ItemLayout = ({node}) => {
    return (
        <div style={{
            borderStyle: 'solid',
            borderWidth: '0px 0px 0px 4px',
            borderColor: '#1565c0',
            paddingLeft: '8px',
            marginBottom: '24px',
        }}>
            <div className={'row-space-between'}>
                <p style={{ fontSize: 10, color: '#1565c0' }}>{node.date}</p>
                <p style={{ fontSize: 10, color: '#1565c0' }}>{node.location}</p>
            </div>

            <h4 className={'title'}>{node.employer}</h4>
            <h5 className={'subheading'}>{node.title}</h5>

            {
                node.tasks.map(({task, details}) => {
                    return (
                        <p key={task}><b>{`${task}: `}</b>{details}</p>
                    )
                })
            }
        </div>
    );
}

export default ItemLayout;