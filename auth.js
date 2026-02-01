async function signup(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });
  console.log("Signup:", data, error);
}

async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  console.log("Login:", data, error);
}
