<script>
  import { onMount } from "svelte";

	let userId = "";
	let password = "";
	let isLogin = false;

	onMount(async () => {
		const loginEndpoint = 'http://localhost:3000/account/protected';
		const result = await fetch(loginEndpoint, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'credentials': 'include',
				'withCredentials': 'true'
			},
		})

		isLogin = result.ok
	});

	async function isLoginUser(){

	}

	//페이지가 로드되면 로그인 여부를 확인하고 로그인이 되어있으면 메인페이지로 이동

  
	
	async function handleLogin() {
		const loginEndpoint = 'http://localhost:3000/account/sign-in';
		const user_id = userId;

		const result = await fetch(loginEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'credentials': 'include',
				'withCredentials': 'true'
			},
			body: JSON.stringify({
				user_id,
				password,
			}),
		})

		const data = await result.json();
		console.log(result)
		console.log(data)

		if (result.ok) {
			alert('로그인 성공');
			isLogin=true
		} else {
			alert(`로그인 실패 - ${data.msg}`);
			isLogin=false
		}
  }
  
	function handleSignUp() {
								  window.location.href = '/sign-up';					
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
	margin-right: 8px;
}

button:hover {
	background-color: #45a049;
}

.signup-button {
	background-color: #008CBA;
}

.signup-button:hover {
	background-color: #005A8C;
}
</style>


{#if isLogin}
<h1>Logged in user</h1>
{:else}
<h1>Non-logged user</h1>
{/if}

<div class="container">
<h2>Login</h2>

<form on:submit|preventDefault={handleLogin}>
	<label for="userId">UserId:</label>
	<input type="text" id="userId" bind:value={userId} />

	<label for="password">Password:</label>
	<input type="password" id="password" bind:value={password} />

	<button type="submit">Login</button>
	<button type="button" on:click={handleSignUp} class="signup-button">Sign Up</button>
</form>
</div>
  