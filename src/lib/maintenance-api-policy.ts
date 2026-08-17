type MaintenanceApiPolicy = {
  status: 404 | 503;
  body: { error: string };
  headers?: Record<string, string>;
};

export function getMaintenanceApiPolicy(
  pathname: string,
): MaintenanceApiPolicy {
  if (pathname === "/api/contact") {
    return {
      status: 503,
      body: { error: "Begäran kan inte hanteras." },
      headers: { "Retry-After": "3600" },
    };
  }

  return {
    status: 404,
    body: { error: "Resursen hittades inte." },
  };
}
