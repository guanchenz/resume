import React from 'react';


const ItemLayout = ({node}) => {
    return (
        <div class='margin-bottom-medium'>
            <div style={{
                borderStyle: 'solid',
                borderWidth: '0px 0px 0px 4px',
                borderColor: '#1565c0',
                paddingLeft: '8px',
            }}>
                <div className={'row-space-between'}>
                    <p style={{ fontSize: 10, color: '#1565c0' }}>{node.date}</p>
                    <p style={{ fontSize: 10, color: '#1565c0' }}>{node.location}</p>
                </div>

                <h4 className={'heading'}>{node.employer}</h4>
                <h4 className={'subheading'}>{node.title}</h4>
            </div>

            <div style={{paddingLeft: '12px'}}>
                {
                    node.tasks
                        .filter(({ hidden }) => !hidden)
                        .map(({task, details}) => {
                            if (task) {
                                return (
                                    <p key={task}><b>{`${task}: `}</b>{details}</p>
                                )
                            } else {
                                return (
                                    <p key={task}>{details}</p>
                                )
                            }
                        })
                }
            </div>
        </div>
    );
}

export default ItemLayout;