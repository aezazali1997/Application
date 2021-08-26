import React, { FC } from 'react';
import { Card, Box, Typography, CardMedia, CardContent } from '@shared';
import Moment from 'react-moment';
import { AddProjectModel } from '@models';
import { styles } from './DetailList.style';
type Props = {
  data: AddProjectModel;
};
export const DetailList: FC<Props> = ({
  data: {
    title,
    subtitle,
    thumbnail,
    challenge,
    client,
    end,
    images,
    projectType,
    role,
    solution,
    start,
    summary,
    technologies,
    url,
  },
}) => {
  const classes = styles();
  return (
    <Card className={classes.card}>
      <Box mb={1} pl={1}>
        <Box mt={1}>
          <Typography align="center" variant="h4" component="h4">
            {title}
          </Typography>
        </Box>
        <Typography align="center" variant="subtitle1">
          {subtitle}
        </Typography>
      </Box>
      <CardMedia component="img" height="140" image={thumbnail} title={title} />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          <label htmlFor="summary">
            <strong>Summary </strong>:{' '}
          </label>
          {summary}
        </Typography>
        <hr />
        <Typography variant="body1" color="textPrimary" component="p">
          <label htmlFor="Role">
            <strong>Role </strong>:{' '}
          </label>
          {role}
        </Typography>
        <hr />
        <Box>
          <Typography
            variant="h5"
            align="center"
            color="textPrimary"
            component="h4"
          >
            Company Details
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
            <label htmlFor="Role">
              <strong>Name </strong>:{' '}
            </label>{' '}
            {client.name}
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
            <label htmlFor="logo">
              <strong>Logo </strong>{' '}
            </label>
            <img className={classes.logo} src={client.logo} alt="logo" />
          </Typography>
        </Box>
        <hr />
        <Typography variant="body1" color="textPrimary" component="p">
          <label htmlFor="Start">
            <strong>Start Date </strong>:{' '}
          </label>{' '}
          <Moment format="DD/MM/YYYY">{start}</Moment>
        </Typography>
        <hr />
        <Typography variant="body1" color="textPrimary" component="p">
          <label htmlFor="Start">
            <strong>End Date </strong>:{' '}
          </label>{' '}
          <Moment format="DD/MM/YYYY">{end}</Moment>
        </Typography>
        <hr />
        <Typography variant="body1" color="textPrimary" component="p">
          <label htmlFor="Role">
            <strong>Project Type </strong>:{' '}
          </label>{' '}
          {projectType}
        </Typography>
        <hr />
        <Typography variant="body1" color="textPrimary" component="p">
          <label htmlFor="Role">
            <strong>Challenge </strong>:{' '}
          </label>{' '}
          {challenge}
        </Typography>
        <hr />
        <Typography variant="body1" color="textPrimary" component="p">
          <label htmlFor="Role">
            <strong>Solution </strong>:{' '}
          </label>{' '}
          {solution}
        </Typography>
        <hr />
        <Typography variant="body1" color="textPrimary" component="p">
          <label htmlFor="Role">
            <strong>URL </strong>:{' '}
          </label>{' '}
          <a rel="noreferrer" href={url} target="_blank">
            {title}
          </a>
        </Typography>
        <hr />
        <Typography variant="body1" color="textPrimary" component="h1">
          <label htmlFor="Role">
            <strong>Technologies </strong>:{' '}
          </label>{' '}
          <ul>
            {technologies.map((tech, id) => {
              return <li key={id}>{tech}</li>;
            })}
          </ul>
        </Typography>
        <hr />
        <Typography variant="body1" color="textPrimary" component="h1">
          <label htmlFor="Role">
            <strong>ScreenShots </strong>:{' '}
          </label>
          <div className={classes.imgContainer}>
            {images.map((image, id) => {
              return <img src={image} key={id} />;
            })}
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};
