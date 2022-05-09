import React,{useState,useEffect} from 'react'
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";


const Home=()=>{
    const [currentId, setCurrentId] = useState(0);
      const dispatch = useDispatch();
    

      console.log("hi i am home");

      useEffect(() => {
        dispatch(getPosts());
      }, [dispatch, currentId]);

  return (
    <Grow in>
      <Container>
        <Grid
        //   className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home