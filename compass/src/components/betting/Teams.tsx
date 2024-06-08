import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface TeamProps {
  name: string;
}

const Team: React.FC<TeamProps> = ({ name }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        {/* Add more details if needed */}
      </CardContent>
    </Card>
  );
};

export default Team;
