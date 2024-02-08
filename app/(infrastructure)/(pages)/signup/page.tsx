"use client";
import useCount from "@/app/(infrastructure)/_redux/features/count/useCount"
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Signup = () => {
  const { count, addCount, reduceCount } = useCount()

  return (
    <Box>
      <Typography variant="h1">Hello Sign Up</Typography>
      <Typography variant="body1">{count.count}</Typography>
      <Button variant="outlined" onClick={addCount}>+ Add</Button>
      <Button variant="outlined" onClick={reduceCount}>- Reduce</Button>
    </Box>
  );
}

export default Signup