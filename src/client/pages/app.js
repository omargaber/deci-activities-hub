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
                let table = document.getElementById("myTable");
                let tbody = table.getElementsByTagName("tbody")[0];
                var row = tbody.insertRow(i);
    
                // Insert cell for the name
                var cell1 = row.insertCell(0);
                cell1.innerHTML = users.users[i].id;
                // Insert cell for the age
                var cell2 = row.insertCell(1);                
                cell2.innerHTML = users.users[i].firstName;
                // Insert cell for the name
                var cell3 = row.insertCell(2);
                cell3.innerHTML = users.users[i].lastName;
                // Insert cell for the age
                var cell4 = row.insertCell(3);                
                cell4.innerHTML = users.users[i].age;
                // Insert cell for the name
                var cell5 = row.insertCell(4);
                cell5.innerHTML = users.users[i].gender;
                // Insert cell for the age
                var cell6 = row.insertCell(5);                
                cell6.innerHTML = users.users[i].email;
                // Insert cell for the name
                var cell7 = row.insertCell(6);
                cell7.innerHTML = users.users[i].username;
            }
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }
    fetchData()
}
