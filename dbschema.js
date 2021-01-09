let db = {
  users: {
    userId: 'k8CpQDHbnsO2n8rqRaMnj2vKQU62',
    email: 'newnew@test.com',
    handle: 'newnew',
    createdAt: '2020-07-13T16:37:23.605Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/social-app-e8446.appspot.com/o/11684.png?alt=media',
    bio: 'Hello my name is user, nice to meet you',
    website: 'https://jessekrim.com',
    location: 'Franklin Lakes, NJ',
  },
  screams: [
    {
      userHandle: 'user',
      body: 'This is scream body',
      createdAt: '2020-07-10T03:07:38.339Z',
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'kdjsfgdksuufhgkdsufky',
      body: 'nice one mate!',
      createdAt: '2020-07-10T10:59:52.798Z',
    },
  ],
  notifications: [
    {
      recipient: 'user',
      sender: 'john',
      read: 'true | false',
      screamId: 'kdjsfgdksuufhgkdsufky',
      type: 'like | comment',
      createdAt: '2020-10-17T10:59:52.798Z'
    }
  ]
};

const userDetails = {
  // Redux data
  credentials: {
    userId: 'k8CpQDHbnsO2n8rqRaMnj2vKQU62',
    email: 'newnew@test.com',
    handle: 'newnew',
    createdAt: '2020-07-13T16:37:23.605Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/social-app-e8446.appspot.com/o/11684.png?alt=media',
    bio: "Hello I'm user nice to meet you",
    website: 'https://jessekrim.com',
    location: 'Franklin Lakes, NJ',
  },
  likes: [
    { userHandle: 'user', screamId: 'AoL5FoEhFj37ScxBUL9c' },
    { userHandle: 'user', screamId: 'DWT9XE3mYBxCTQHRgyGo' },
  ],
};
