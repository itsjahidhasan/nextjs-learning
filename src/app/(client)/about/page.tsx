"use client";
import { useStore } from "@/store/store.context";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";

const AboutPage = observer(() => {
  const router = useRouter();
  const store = useStore();
  return (
    <div>
      <div className="flex gap-4 items-center justify-center flex-col sm:flex-row mt-3">
        <h2>About page</h2>
      </div>

      <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
        get count :{store?.count}
      </div>
      <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
        <button
          onClick={() => store?.increment()}
          className="px-4 py-2 text-sm text-white bg-gradient-to-r from-blue-500 to-blue-400 rounded-md shadow-md hover:bg-gradient-to-r from-blue-600 to-blue-500 focus:outline-none"
        >
          Increment ++
        </button>
        <button
          onClick={() => store?.decrement()}
          className="px-4 py-2 text-sm text-white bg-gradient-to-r from-blue-500 to-blue-400 rounded-md shadow-md hover:bg-gradient-to-r from-blue-600 to-blue-500 focus:outline-none"
        >
          Decrement --
        </button>
      </div>
    </div>
  );
});

export default AboutPage;
