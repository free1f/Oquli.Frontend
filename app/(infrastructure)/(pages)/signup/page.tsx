"use client";
import useCount from "@/app/(infrastructure)/_redux/features/count/useCount"
import { Button, Typography } from "@mui/material"
import PublicLayout from '@/app/(infrastructure)/_components/PublicLayout/PublicLayout'

const Signup = () => {
  const { count, addCount, reduceCount } = useCount()

  return (
    <PublicLayout>
      <Typography variant="h1">Hello Sign Up</Typography>
      <Typography variant="body1">{count.count}</Typography>
      <Button variant="outlined" onClick={addCount}>+ Add</Button>
      <Button variant="outlined" onClick={reduceCount}>- Reduce</Button>
    </PublicLayout>
  );
}

export default Signup