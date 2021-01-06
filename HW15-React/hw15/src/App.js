import Post from './Post'

function App() {
  const Posts = [
    {
      name: 'Mikaela Carroll',
      photo: 'https://www.flaticon.com/svg/static/icons/svg/147/147144.svg',
      nickname: '@Carroll',
      content: 'One morning, when Gregor Samsa woke from troubled dreams.',
      image:
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: '31 Dec 2020',
    },
    {
      name: 'Jesse Gibbons',
      photo: 'https://www.flaticon.com/svg/static/icons/svg/147/147142.svg',
      nickname: '@Gibbons',
      content: 'A wonderful serenity has taken possession of my entire soul.',
      image:
        'https://images.unsplash.com/photo-1465488867967-ffb57e7f0a89?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      date: '01 Jan 2021',
    },
    {
      name: 'Kalum Branch',
      photo: 'https://www.flaticon.com/svg/static/icons/svg/147/147140.svg',
      nickname: '@Branch',
      content: 'Far far away, behind the word mountains',
      image: 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg',
      date: '06 Jan 2021',
    },
  ]

  return (
    <div className="App">
      {Posts.map((post) => (
        <Post {...post} />
      ))}
    </div>
  )
}

export default App
