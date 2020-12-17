import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);



const Widgets = ({ prods }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <form className={classes.container} noValidate>
        <TextField
          id="time"
          label="Alarm clock"
          type="time"
          defaultValue="21:55"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="1998-06-25"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Ciekawostka
      </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Ciekawostki ze świata
        </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
            8 Polaków otrzymało Nagrodę Nobla. Są to: Maria Skłodowska-Curie, Henryk Sienkiewicz, Władysław Reymont, Czesław Miłosz, Lech Wałęsa, Józef Rotblat, Wisława Szymborska oraz Olga Tokarczuk.
          </Typography>
            <Typography gutterBottom>
            W kasynach hazardowych w Las Vegas nie ma zegarów.
          </Typography>
            <Typography gutterBottom>
            Mówi się, że Wielki Mur można zobaczyć z kosmosu, ale w rzeczywistości tak nie jest.
          </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Koniec
          </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  )
};


export default Widgets;