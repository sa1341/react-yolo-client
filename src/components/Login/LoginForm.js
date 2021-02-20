import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import validate from "services/validate";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "768px",
    margin: "0 auto",
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(8),
      padding: `${theme.spacing(6)}px ${theme.spacing(4)}px`,
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

function useForm({ initialFormData, onSubmit, validate }) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    setErrors(validate(formData));
  };

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(formData);
      }
      setSubmitting(false);
    }
  }, [errors]);

  return {
    formData,
    errors,
    submitting,
    handleChange,
    handleSubmit,
  };
}

const LoginForm = () => {
  const classes = useStyles({});
  const { formData, errors, submitting, handleChange, handleSubmit } = useForm({
    initialFormData: { email: "", password: "" },
    onSubmit: () => {
      axios.get("/v1/index").then((response) => console.log(response));
    },
    validate,
  });

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper} elevation={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography component="h1" variant="h4" gutterBottom>
            로그인
          </Typography>
        </Box>
        <form action="" onSubmit={handleSubmit} className={classes.form}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            defaultValue={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="errorMessage">{errors.email}</span>}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="new-password"
            defaultValue={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="errorMessage">{errors.password}</span>
          )}
          <Box mb={6}>
            <Button
              disabled={submitting}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {submitting && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
              {submitting ? "로그인 중..." : "로그인"}
            </Button>
            <Button
              disabled={submitting}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {submitting && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
              {submitting ? "회원가입 중..." : "회원가입"}
            </Button>
          </Box>
        </form>
      </Paper>
      <h1>{formData.email}</h1>
      <h1>{formData.password}</h1>
    </main>
  );
};

export default LoginForm;
