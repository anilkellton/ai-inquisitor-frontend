import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import BlogServices from "../../API/services/BlogService";

const Landing = () => {
  type Response = {
    status: Number,blogData: [{content: any}]
}
  const [blogData, setBlogData] = useState<Response[]>([]);
  useEffect(() => {
    blogDetails();
  }, []);

  const blogDetails = async () => {
    try{
      const response = await BlogServices.viewBlogService();
      if(response.status ===200 && response.statusText == 'OK'){
        setBlogData(response.data.blogData);
      }
    } catch(error) {
      console.log(error);
    }
  }
  return (
    <>
    <div style={{ justifyContent: "center", display: "flex" }}>
      <List sx={{ width: '80%', bgcolor: 'background.paper' }}>
        {
          blogData.map((item,key) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                // primary={blogData.blogDetails.query}
                  // primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        key= {key}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        AI-GENERATED
                      </Typography>
                      {item.content}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))
        }

      </List>
    </div>
    </>
  );
};

export default Landing;
