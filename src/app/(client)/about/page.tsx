"use client";

import { useStore } from "@/store";
import { observer } from "mobx-react-lite";

const AboutPage = observer(() => {
  const {
    appStore: { countStore },
  } = useStore();

  return (
    <div>
      <div className="flex gap-4 items-center justify-center flex-col sm:flex-row mt-3">
        <h2>About page</h2>
      </div>

      <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
        get count :{countStore?.getCountValueMultiplyByTwo}
      </div>
      <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
        <button
          onClick={() => countStore?.increment()}
          className="px-4 py-2 text-sm text-white bg-gradient-to-r from-blue-500 to-blue-400 rounded-md shadow-md hover:bg-gradient-to-r from-blue-600 to-blue-500 focus:outline-none"
        >
          Increment ++
        </button>
      </div>
    </div>
  );
});

export default AboutPage;
