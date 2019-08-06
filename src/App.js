import React from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

require("dotenv").config();
var keys = require("./keys.js");

class App extends React.Component {
  render () {
    let streamKey = process.env.StreamKey || keys.stream.key;
    let appID = process.env.ProjectID || keys.stream.id;
    let streamSecret = process.env.StreamSecret || keys.stream.secret;
    return (
      <StreamApp
        apiKey={streamKey}
        appId={appID}
        token={streamSecret}
      >
        <NotificationDropdown notify />
        <StatusUpdateForm
          feedGroup="timeline"
          userId="user-one" />
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