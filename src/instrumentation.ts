console.log(`[instrumentation] File loaded. Process id: ${process.pid}.`);

export async function register() {
  console.log('[instrumentation][register] Registering mocks. Process ID: ${process.pid}');
  if (
    process.env.NEXT_RUNTIME === "nodejs" &&
    process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
  ) {
    require('mocks');
    console.log('[instrumentation][register] API mocking enabled, starting.');
  }
}
