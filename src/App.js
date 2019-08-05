import React from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

var stream = require('getstream');
// Instantiate a new client (server side)
client = stream.connect('f29vfyjscd65', 'a2khjzqaxnudajj8xk89j5cqq6h5vrg9su3wkn72zxg4umcv8w97f2scvj9da9w8', '56218');
// Instantiate a new client (client side)
client = stream.connect('f29vfyjscd65', null, '56218');

class App extends React.Component {
  render () {
    return (
      <StreamApp
        apiKey="f29vfyjscd65"
        appId="56218"
        token="a2khjzqaxnudajj8xk89j5cqq6h5vrg9su3wkn72zxg4umcv8w97f2scvj9da9w8"
      >
        <NotificationDropdown notify />
        <StatusUpdateForm
          feedGroup="timeline"
          userId="fe7a765e-6665-4121-9760-e6ec5193b243" />
        <FlatFeed
          options={ {reactions: { recent: true } } }
          notify
          Activity={(props) =>
              <Activity {...props}
                Footer={() => (
                  <div style={ {padding: '8px 16px'} }>
                    <LikeButton {...props} />
                    <CommentField
                      activity={props.activity}
                      onAddReaction={props.onAddReaction} />
                    <CommentList activityId={props.activity.id} />
                  </div>
                )}
              />
            }
          />
      </StreamApp>
    );
  }
}

export default App;