import GhostLoader from "@/components/GhostLoader";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-950">
      <GhostLoader />
    </div>
  );
}
