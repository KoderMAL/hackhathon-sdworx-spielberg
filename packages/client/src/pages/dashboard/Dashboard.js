import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";
import {  Typography,  } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";

const PieChartData = [
  { name: "IT", value: 970, color: "primary" },
  { name: "Sales", value: 740, color: "secondary" },
  { name: "Legal", value: 600, color: "error" },
  { name: "Manufacturing", value: 410, color: "success" },
  { name: "Legal", value: 220, color: "warning" }
];

function Dashboard() {
  var classes = useStyles();
  var theme = useTheme();

  return (
    <Grid container spacing={3}>

      <Grid item lg={3} sm={6} xs={12}>
        <Widget
          title="Business unit points"
          className={classes.card}
          bodyClass={classes.alignStandaloneElement}
        >
          <Grid container spacing={3}>
            <Grid
              item
              xs={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 6
              }}
            >
              <Typography
                variant={"caption"}
                weight={"medium"}
                style={{ position: "absolute" }}
              >
                1700
              </Typography>
              <ResponsiveContainer width="100%" height={144}>
                <PieChart>
                  <Pie
                    data={PieChartData}
                    innerRadius={30}
                    outerRadius={40}
                    dataKey="value"
                  >
                    {PieChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={theme.palette[entry.color].main}
                        stroke={""}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.pieChartLegendWrapper}>
                {PieChartData.map(({ name, value, color }, index) => (
                  <div key={color} className={classes.legendItemContainer}>
                    <Dot color={color} style={{ marginRight: 5 }} />
                    <Typography
                      color="text"
                      colorBrightness={"hint"}
                      variant={"caption"}
                      noWrap
                    >
                      &nbsp;{name}&nbsp;
                    </Typography>
                    <Typography color="text" weight={"medium"}>
                      &nbsp;{value}
                    </Typography>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </Widget>
      </Grid>

      <Grid item lg={3} sm={6} xs={12}>
        <Widget
          title="Business unit badges"
          className={classes.card}
          bodyClass={classes.fullHeightBody}
        >
          <div className={classes.progressSection}>
            <Typography
              color="text"
              variant={"body2"}
              className={classes.progressSectionTitle}
            >
              Accounting
            </Typography>
            <LinearProgress
                variant="determinate"
                value={89}
                classes={{ barColorPrimary: classes.progressBarGreen }}
                className={classes.progress}
            />
            <Typography
              color="text"
              variant={"body2"}
              className={classes.progressSectionTitle}
            >
              IT
            </Typography>
            <LinearProgress
                variant="determinate"
                value={85}
                classes={{ barColorPrimary: classes.progressBarGreen }}
                className={classes.progress}
            />
            <Typography
              color="text"
              variant={"body2"}
              className={classes.progressSectionTitle}
            >
              Sales
            </Typography>
            <LinearProgress
                variant="determinate"
                value={70}
                classes={{ barColorPrimary: classes.progressBarGreen }}
                className={classes.progress}
            />
            <Typography
              color="text"
              variant={"body2"}
              className={classes.progressSectionTitle}
            >
              Manufacturing
            </Typography>
            <LinearProgress
                variant="determinate"
                value={49}
                classes={{ barColorPrimary: classes.progressBarWarning }}
                className={classes.progress}
            />
            <Typography
              color="text"
              variant={"body2"}
              className={classes.progressSectionTitle}
            >
              Legal
            </Typography>
            <LinearProgress
                variant="determinate"
                value={12}
                classes={{ barColorPrimary: classes.progressBarRed }}
                className={classes.progress}
            />
          </div>
        </Widget>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
