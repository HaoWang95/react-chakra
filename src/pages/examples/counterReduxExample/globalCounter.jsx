import { AddIcon, MinusIcon} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../../../reducers/counterSlice";

let CounterRedux = () => {
  const counterValue = useSelector((state) => state.counter.value);
  const [changeValue, setChangeValue] = useState(0);
  const [incrementLoading, setIncrementLoading] = useState(false);
  const [decrementLoading, setDecrementLoading] = useState(false);
  const [incrementByLoading, setIncrementByLoading] = useState(false);
  const [decrementByLoading, setDecrementByLoading] = useState(false);

  const handleIncrement = () => {
    setIncrementLoading(true);
    setTimeout(() => {
      dispatch(increment());
      setIncrementLoading(false);
    }, 1000);
  };

  const handleDecrement = () => {
    setDecrementLoading(true);
    setTimeout(() => {
      dispatch(decrement());
      setDecrementLoading(false);
    }, 1000);
  };

  const handleInputChange = useCallback((e) => {
    setChangeValue(e.target.value);
  }, []);

  const handleIncrementBy = () => {
    setIncrementByLoading(true);
    setTimeout(() => {
      dispatch(incrementByAmount(parseInt(changeValue)));
      setIncrementByLoading(false);
    }, 1500);
  };

  const handleDecrementBy = () => {
    setDecrementByLoading(true);
    setTimeout(() => {
      dispatch(decrementByAmount(parseInt(changeValue)));
      setDecrementByLoading(false);
    }, 1500);
  };

  const dispatch = useDispatch();
  return (
    <Container centerContent marginTop={"5rem"}>
      <Box>
        <Flex direction={"column"} alignItems={"center"}>
          <Text fontSize={"lg"} align="center">
            Redux counter example
          </Text>
          <Stack
            direction={"row"}
            spacing={2}
            align="center"
            marginTop={"3rem"}
          >
            <Button
              isLoading={decrementLoading}
              colorScheme={"cyan"}
              variant={"outline"}
              onClick={handleDecrement}
              leftIcon={<MinusIcon />}
            >
              Decrement
            </Button>
            <Text
              fontSize={"large"}
              fontWeight="bold"
              padding={"1"}
              onClick={() => dispatch(clear())}
            >
              {counterValue}(Click to clear)
            </Text>
            <Button
              isLoading={incrementLoading}
              colorScheme={"cyan"}
              variant={"outline"}
              onClick={handleIncrement}
              leftIcon={<AddIcon />}
            >
              Increment
            </Button>
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            align={"center"}
            marginTop={"2rem"}
          >
            <Button
              isLoading={decrementByLoading}
              loadingText={'Calculating'}
              variant={"outline"}
              colorScheme={"cyan"}
              onClick={handleDecrementBy}
              leftIcon={<MinusIcon />}
            >
              By Amount
            </Button>
            <Input
              placeholder="change value"
              width={'auto'}
              onChange={handleInputChange}
            />
            <Button
              isLoading={incrementByLoading}
              loadingText={'Calculating'}
              variant={"outline"}
              colorScheme={"cyan"}
              onClick={handleIncrementBy}
              leftIcon={<AddIcon />}
            >
              By Amount
            </Button>
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
};

export default CounterRedux;
