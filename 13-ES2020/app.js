const me = {
  name: 'simmy',
  profile: {
    email: '@gmail.com'
  }
}

console.log(me.profile.email); // @gmail.com

const someone = {
  name: 'who',
}

console.log(someone.profile.email); // Uncaught TypeError: Cannot read property 'email' of undefined 에러 발생

console.log(someone?.profile?.email?.domain);