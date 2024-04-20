const userData = "https://dummyjson.com/users"

class Users {
    constructor(id, firstName, lastName, age, gender, email, username) {
      this.id = id
      this.firstName = firstName
      this.age = age
      this.gender = gender
      this.email = email
      this.username = username
      this.lastName = lastName
    }
}


function displayInfo(){
    async function fetchData() {
        try {
            const response = await fetch(userData)
            const users = await response.json();
            // console.log(response)
            // console.log(users)
            // console.log(users.limit)
            for (let i = 0; i <= users.limit; i++) {
                const daft = new Users(users.users[i].id, users.users[i].firstName, users.users[i].lastName, users.users[i].age,users.users[i].gender, users.users[i].email, users.users[i].username)
                console.log(daft)
            }
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }
    fetchData()
}

displayInfo()