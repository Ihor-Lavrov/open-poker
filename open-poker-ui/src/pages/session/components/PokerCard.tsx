import { Box, Button, Typography } from '@mui/material';

export interface PokerCardProps {
  value: string;
}

export const PockerCard = ({ value }: PokerCardProps) => {
  return (
    <Box
      sx={{
        p: 1,
        height: '40px',
        width: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        sx={{
          borderRadius: '16px',
          background: 'light-blue',
          border: '1px solid black',
        }}
      >
        <Typography variant='h4'>{value}</Typography>
      </Button>
    </Box>
  );
};
