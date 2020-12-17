import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Wudgets = ({ prods }) => {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <TextField id="filled-basic" label="Podziel się swoją opinią" variant="filled" />
            <Typography id="continuous-slider" gutterBottom>
                Volume
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                    <VolumeUp />
                </Grid>
            </Grid>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Sprawdź opcje
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Kilka</MenuItem>
                <MenuItem onClick={handleClose}>Opcji</MenuItem>
                <MenuItem onClick={handleClose}>Do </MenuItem>
                <MenuItem onClick={handleClose}>Wyboru</MenuItem>
            </Menu>
        </div>
    )
};


export default Wudgets;