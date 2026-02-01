async function allRequests() {
  const { data, error } = await supabase
    .from("service_requests")
    .select("*");

  console.log("ALL Requests:", data, error);
}

async function assignMechanic(requestId) {
  const { data, error } = await supabase.rpc(
    "assign_mechanic_to_request",
    { req_id: requestId }
  );

  console.log("Assigned:", data, error);
}
