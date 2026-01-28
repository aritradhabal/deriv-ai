import react from "react";
import Link from "next/link";

export const NavBar = ({
  currBalance,
  prevBalance,
}: {
  currBalance: number;
  prevBalance: number;
}) => {
  return (
    <div className="h-10 min-w-screen flex justify-between items-center px-10 py-8 border-white">
      <Link
        href={"/"}
        className="tracking-tighter font-mono font-bold text-2xl"
      >
        Deriv AI
      </Link>
      <div>
        <p className="font-mono">
          <span>Total Balance </span>
          <span className="font-bold font-xl">{currBalance.toFixed(1)}$</span>
        </p>
        <p className="font-mono">
          <span
            className={`text-2xs tracking-tight ${currBalance - prevBalance > 0 ? "text-green-400" : "text-red-400"}`}
          >
            {currBalance - prevBalance < 0 ? "Down" : "Up"}{" "}
            {(
              (Math.abs(currBalance - prevBalance) / prevBalance) *
              100
            ).toFixed(1)}
            %{" "}
          </span>
          <span className="text-xs">Since Last Trade </span>
        </p>
      </div>
    </div>
  );
};
