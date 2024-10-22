import * as React from 'react';
import List from '@mui/material/List';
import Item from './user';


export default function UsersList({ users }: any) {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                users && users.length > 0 && users.map((user: any) => {
                    return <Item user={user} />
                })
            }
        </List>
    );
}
