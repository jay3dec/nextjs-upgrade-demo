'use client'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './users.module.css';
import React from 'react';



const Item = ({ user }: any) => {
    const handleDeleteClick = () => {
        confirm('Please confirm user deletion');
    }
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <React.Fragment>
                            <div className={styles['name']}>
                                {user.name}
                                <button className={styles['deleteBtn']} onClick={handleDeleteClick}>
                                    <DeleteIcon />
                                </button>
                                
                            </div>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                {user?.address?.city}
                            </Typography>
                            {` - ${user?.company?.catchPhrase}`}

                        </React.Fragment>

                    }

                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default Item;