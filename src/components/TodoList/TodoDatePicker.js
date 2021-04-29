import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { useTodoDispatch } from "components/TodoList/TodoContext";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  todoDatePicker_wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const TodoDatePicker = () => {
  const classes = useStyles();
  const dispatch = useTodoDispatch();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const id = "a79007714@gmail.com";
  const handleChange = (e) => {
    alert(e.target.name);
    const currentDateName = e.target.name;

    if (currentDateName === "startDate") {
      setStartDate(e.target.value);
    } else {
      setEndDate(e.target.value);
    }
  };

  const onClick = async () => {
    try {
      const response = await axios.get(`/api/v1/todos/${id}`, {
        params: {
          selectedStartDate: startDate,
          selectedEndDate: endDate,
        },
      });
      console.log(response);
      dispatch({ type: "TodoDatePicker", todo: response.data });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={classes.todoDatePicker_wrapper}>
      <div className="row">
        <div className="col-md-4">
          <Form.Group controlId="dob">
            <Form.Label>조회할 날짜를 선택하세요.</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              placeholder="조회 시작 날짜를 입력하세요"
              onChange={handleChange}
            />
            <b>~</b>
            <Form.Control
              type="date"
              name="endDate"
              placeholder="조회 종료 날짜를 입력하세요"
              onChange={handleChange}
            />
            <Button
              onClick={onClick}
              variant="contained"
              color="secondary"
              type="button"
              className={classes.button}
            >
              조회
            </Button>
          </Form.Group>
        </div>
      </div>
    </div>
  );
};

export default TodoDatePicker;
