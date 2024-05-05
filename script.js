const users = [
  { email: 'user1@gmail.com', password: 'pass' },
  { email: 'user2@gamil.com', password: 'pass' }
];


const socialMediaFeeds = {
  facebook: '<ul><li>Facebook post 1</li><li>Facebook post 2</li></ul>',
  twitter: '<ul><li>Twitter tweet 1</li><li>Twitter tweet 2</li></ul>',
  instagram: '<ul><li>Instagram post 1</li><li>Instagram post 2</li></ul>'
};


document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    
    window.location.href ="social.html";
  
    Object.keys(socialMediaFeeds).forEach((platform) => {
      document.getElementById(`${platform}-feed`).innerHTML = socialMediaFeeds[platform];
    });
  } else {
   
    document.getElementById('login-error').innerHTML = 'Invalid email or password';
    document.getElementById('login-error').style.display = 'block';
  }
});