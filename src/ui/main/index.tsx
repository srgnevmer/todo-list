import { FC } from "react";
import { useStyles } from "./styles";
import { Text, Container, Button } from "@mantine/core";

export const Main: FC = () => {
  const { classes } = useStyles();

  const getCurrentDate = (): string => {
    const now: Date = new Date();
    const day: string = String(now.getDate()).padStart(2, "0");
    const month: string = String(now.getMonth() + 1).padStart(2, "0");
    const year: number = now.getFullYear();
    return `${day}/${month}/${year}`;
  };

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
