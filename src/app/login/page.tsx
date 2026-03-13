import { getPage } from "@/lib/getPage";

export default async function LoginPage() {
  const res = await getPage("login", "loginPage");
  const data = res?.fields;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {data?.title}
        </h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              {data?.emailLabel}
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-medium">
              {data?.passwordLabel}
            </label>
            <input
              id="password"
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
          >
            {data?.submitButtonText}
          </button>
        </form>
      </div>
    </main>
  );
}