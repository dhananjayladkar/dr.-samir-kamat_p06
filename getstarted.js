async function sendEmergency(event) {
  event.preventDefault();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    showStatus("❌ Please login first", "error");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
    return;
  }

  const contact = document.getElementById("contact").value;
  const issue = document.getElementById("issue").value;
  const lat = document.getElementById("lat").value;
  const lng = document.getElementById("lng").value;

  if (!contact || !issue || !lat || !lng) {
    showStatus("❌ Please fill all fields", "error");
    return;
  }

  showStatus("⏳ Sending emergency alert...", "");

  const { data: req, error } = await supabase
    .from("service_requests")
    .insert({
      user_id: user.id,
      issue_text: issue,
      issue_type: issue,
      priority: "high",
      status: "pending",
      contact_number: contact
    })
    .select()
    .single();

  if (error) {
    showStatus("❌ " + error.message, "error");
    return;
  }

  await supabase.from("accident_logs").insert({
    user_id: user.id,
    latitude: lat,
    longitude: lng,
    severity: "high",
    request_id: req.id
  });

  showStatus("✅ Emergency sent! Help is on the way.", "success");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
}

function showStatus(message, type) {
  const statusEl = document.getElementById("status");
  statusEl.textContent = message;
  statusEl.className = "status " + type;
}
