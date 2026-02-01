async function mockAccident(userId, vehicleId) {
  const { data, error } = await supabase.rpc(
    "handle_accident",
    {
      p_user_id: userId,
      p_vehicle_id: vehicleId,
      p_impact: 80,
      p_lat: 21.14,
      p_lng: 79.08
    }
  );

  console.log("Accident:", data, error);
}
