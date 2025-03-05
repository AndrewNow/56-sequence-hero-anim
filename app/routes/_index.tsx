import AnimationWrapper from "~/components/heroAnimation/AnimationWrapper";

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-7xl flex md:flex-row flex-col justify-between p-4">
        <div className="flex-1 flex flex-col gap-3 py-4 items-start justify-center">
          <h1 className="text-4xl font-bold text-balance text-white/90">
            Accelerate your blockchain ecosystem with one integration
          </h1>
          <p className="text-base max-w-prose text-balance text-gray-400">
            Empower developers with everything they need to build seamless, scalable, and engaging
            experiences.
          </p>
        </div>
        <div className="relative border border-dashed border-white-25 bg-black flex-1 mx-auto min-h-[516px] w-full max-w-[516px]">
          <AnimationWrapper />
        </div>
      </div>
    </div>
  );
}
