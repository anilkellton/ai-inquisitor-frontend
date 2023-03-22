import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import BlogServices from "../../API/services/BlogService";


// const [blogData, setBlogData] = useState<any[]>([]);

// const queryParams = new URLSearchParams(window.location.search);


// useEffect(() => {
//   const id =queryParams.get("id")
//   if(!blogData){
//     blogDetails(id);
//   }
// }, []);


// const blogDetails = async (id:any) => {
//   try{
//     const response = await BlogServices.viewBlogService(id);
//     if(response.status ===200 && response.statusText == 'OK'){
//       setBlogData(response.data.blogData);
//     }
//   } catch(error) {
//     console.log(error);
//   }
// }

const useStyles = makeStyles((theme) => ({
  name: {
    lineHeight: 1,
  },
  content: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)  
    }
  },
  paragraph: {
    marginBottom: theme.spacing(3)
  },
  image: {
    maxWidth: '100%',
    borderRadius: theme.shape.borderRadius
  }
}));

export default function Blog(props:any) {
  const classes = useStyles();

  const content = {
    'date': 'Jan 16, 2020',
    'header-p1': 'Donec lacinia',
    'header-p2': 'turpis non sapien lobortis pretium',
    'avatar': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    'name': 'Linda Williams',
    'job': 'Founder and CEO',
    'paragraph1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lacus lorem, ut tincidunt massa accumsan at. Vestibulum libero mauris, facilisis ut nisl vel, dignissim feugiat mi. Curabitur dapibus tortor eu arcu volutpat, a pellentesque mauris auctor. Nunc vel magna felis. Praesent tristique viverra nibh porta ultricies. In iaculis faucibus sapien at tincidunt. Phasellus ut lacinia lorem. Nulla venenatis finibus tincidunt. Maecenas auctor augue odio, in accumsan sem molestie eget. Aliquam at lectus et lectus tempor luctus vel id est. Fusce vel vehicula urna. Donec pretium maximus aliquet. Aliquam felis nisl, tincidunt non lectus vitae, pulvinar iaculis justo.',
    'paragraph2': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lacus lorem, ut tincidunt massa accumsan at. Vestibulum libero mauris, facilisis ut nisl vel, dignissim feugiat mi. Curabitur dapibus tortor eu arcu volutpat, a pellentesque mauris auctor. Nunc vel magna felis. Praesent tristique viverra nibh porta ultricies. In iaculis faucibus sapien at tincidunt. Phasellus ut lacinia lorem. Nulla venenatis finibus tincidunt. Maecenas auctor augue odio, in accumsan sem molestie eget. Aliquam at lectus et lectus tempor luctus vel id est. Fusce vel vehicula urna. Donec pretium maximus aliquet. Aliquam felis nisl, tincidunt non lectus vitae, pulvinar iaculis justo.',
    'paragraph3': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lacus lorem, ut tincidunt massa accumsan at. Vestibulum libero mauris, facilisis ut nisl vel, dignissim feugiat mi. Curabitur dapibus tortor eu arcu volutpat, a pellentesque mauris auctor. Nunc vel magna felis. Praesent tristique viverra nibh porta ultricies. In iaculis faucibus sapien at tincidunt. Phasellus ut lacinia lorem. Nulla venenatis finibus tincidunt. Maecenas auctor augue odio, in accumsan sem molestie eget. Aliquam at lectus et lectus tempor luctus vel id est. Fusce vel vehicula urna. Donec pretium maximus aliquet. Aliquam felis nisl, tincidunt non lectus vitae, pulvinar iaculis justo.',
    'image': 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    ...props.content
  };

  return (
    <section  style={{backgroundColor:'white'}} >
        <Container maxWidth="md" >
          <Box py={10}>
            <Box textAlign="center" mb={5}>
              <Container maxWidth="sm">
                <Chip color="primary" label={content['date']} />
                <Box my={4}>
                  <Typography variant="h3" component="h2">
                    <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                    <Typography variant="h3" component="span">{content['header-p2']}</Typography>
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Avatar alt="" src={content['avatar']} />
                  <Box ml={2} textAlign="left">
                    <Typography variant="subtitle1" component="h2" className={classes.name}>{content['name']}</Typography>
                    <Typography variant="subtitle1" component="h3" color="textSecondary">{content['job']}</Typography>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box className={classes.content}>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.paragraph}>{content['paragraph1']}</Typography>
              <Box my={4}>
                <img src={content['image']} alt="" className={classes.image} />
              </Box>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.paragraph}>{content['paragraph1']}</Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.paragraph}>{content['paragraph1']}</Typography>
            </Box>
          </Box>
        </Container>
    </section>
  );
}