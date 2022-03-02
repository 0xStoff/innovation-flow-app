import React from "react";
import { Box, Card, CardContent, Grid, Skeleton } from "@mui/material";

const FeedbackSkeleton = () => {
  return (
    <React.Fragment>
      {[0, 1, 2, 3].map((n) => (
        <Grid key={n} item xs={12} sm={6} md={3}>
          <Card sx={{ mb: 1, p: 1, py: 3 }}>
            <CardContent>
              <Skeleton
                animation="wave"
                height={25}
                width="85%"
                style={{ marginBottom: 5 }}
              />
              <Skeleton
                animation="wave"
                height={25}
                width="55%"
                style={{ marginBottom: 20 }}
              />
              {[0, 1, 2, 3, 4].map((n) => (
                <Skeleton
                  key={n}
                  animation="wave"
                  height={15}
                  width={n === 4 ? "75%" : "100%"}
                  style={{ marginBottom: 3 }}
                />
              ))}
            </CardContent>
          </Card>
          <Box display="flex" justifyContent="flex-start">
            {[0, 1, 2, 3].map((n) => (
              <Skeleton
                key={n}
                animation="wave"
                variant="circular"
                width={20}
                height={20}
                style={{
                  margin: 3,
                  marginLeft: n === 2 ? "auto" : 0,
                }}
              />
            ))}
          </Box>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default FeedbackSkeleton;
