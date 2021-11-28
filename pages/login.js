import { getProviders, signIn } from "next-auth/react";

function login({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black">
      <img src="https://links.papareact.com/9xl" alt="" className="w-52 mb-5" />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="text-white p-5 rounded-full bg-[#18d068]"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
