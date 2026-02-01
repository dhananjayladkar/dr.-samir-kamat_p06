async function createRequest(vehicle_id, issue_text, issue_type, priority) {
  const { data: { user } } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("service_requests")
    .insert({
      user_id: user.id,
      vehicle_id,
      issue_text,
      issue_type,
      priority
    });

  console.log("Request:", data, error);
}

async function myRequests() {
  const { data, error } = await supabase
    .from("service_requests")
    .select("*");

  console.log("My Requests:", data, error);
}
