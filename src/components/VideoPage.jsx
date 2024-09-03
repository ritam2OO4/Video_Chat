import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function VideoPage() {
  // Access environment variables
  const appIdKey = import.meta.env.VITE_APPID_KEY;
  const serverKey = import.meta.env.VITE_SERVER_SECRET;
  

  // Get the id from URL parameters
  const { id } = useParams();
  const roomID = id;

  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = parseInt(appIdKey); // Ensure the app ID is a number
    const serverSecret = serverKey;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "React-Room");

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url: window.location.protocol + '//' + window.location.host + window.location.pathname,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to ZegoUIKitPrebuilt.OneONoneCall.
      },
    });
  }

  useEffect(() => {
    const element = document.getElementById('myMeeting');
    if (element) {
      myMeeting(element);
    }
  }, []);

  return (
    <div id="myMeeting" style={{ width: '100%', height: '100vh' }}>
      Video Conference will load here...
    </div>
  );
}

export default VideoPage;
