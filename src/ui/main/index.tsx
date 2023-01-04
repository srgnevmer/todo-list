import { FC } from "react";
import { Text, Button } from "@mantine/core";
import { useStyles } from "./styles";
import { getCurrentDate } from "../../utils";

export const Main: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Text size={32} weight={600}>
          {getCurrentDate()}
        </Text>
        <Text size={30} weight={600}>
          Organize work and life!
        </Text>
      </div>
      <div className={classes.main}>
        <div className={classes.sectionOne}>
          <div className={classes.buttons}>
            <Button color="green" size="md" uppercase>
              add task
            </Button>
            <Button color="red" size="md" uppercase>
              delete all
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
