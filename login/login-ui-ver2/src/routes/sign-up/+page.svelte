<script>
    let userId = "";
    let password = "";
    let name = "";
    let mobilePhone = "";
    let address = "";
  
    async function handleRegistration() {
      // Implement your registration logic here
      const registrationData = {
        user_id: userId,
        password,
        name,
        phone_number: mobilePhone,
        address,
      };
      

      const loginEndpoint = 'http://localhost:3000/sign-up';
      const user_id = userId;

      const result = await fetch(loginEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          registrationData
        ),
      })

      const data = await result.json();
      console.log(result)
      console.log(data)

      if (result.ok) {
        alert('회원가입 성공');
      } else {
        alert(`회원가입 실패 - ${data.msg}`);
      }

    }
  </script>
  
  <style>
    /* Add your styling here */
    .container {
      max-width: 400px;
      margin: auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    label {
      display: block;
      margin-bottom: 8px;
    }
  
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
      box-sizing: border-box;
    }
  
    button {
      background-color: #4caf50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #45a049;
    }
  </style>
  
  <div class="container">
    <h2>Membership Registration</h2>
  
    <form on:submit|preventDefault={handleRegistration}>
      <label for="userId">User ID:</label>
      <input type="text" id="userId" bind:value={userId} />
  
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} />
  
      <label for="name">Name:</label>
      <input type="text" id="name" bind:value={name} />
  
      <label for="mobilePhone">Mobile Phone:</label>
      <input type="tel" id="mobilePhone" bind:value={mobilePhone} />
  
      <label for="address">Address:</label>
      <textarea id="address" bind:value={address}></textarea>
  
      <button type="submit">Register</button>
    </form>
  </div>
  